# Firestore Security Specification - Ritesh Shinde Portfolio

This document details the security constraints, relational rules, and payload verification patterns for the Ritesh Shinde Personal Portfolio and CMS.

## 1. Data Invariants

1. **Portfolio Content** (`portfolio/current`):
   - Access: Anyone (public) can `get` (read) the current profile document.
   - Mutation: Only the authenticated Admin (`ritesh.ds.001@gmail.com`) can create, update, or write this document.
   - Type Safety: Must contain fields like `heroName`, `introText`, and valid, strictly structured lists.
   - Temporal Checks: `updatedAt` field must align with `request.time` on updates.

2. **Inbound Messages** (`messages/{messageId}`):
   - Access: Anyone can `create` a message (public contact form).
   - Validation: The message must match size constraints (e.g. name, email, and description sizes under 5KB) to prevent database resource attacks.
   - Restriction: Only the Admin can view, query, list, or delete messages. No visitor can read another's sent message.

---

## 2. The "Dirty Dozen" Malicious Payloads

The following payloads attempt to break security rules and must return `PERMISSION_DENIED`.

1. **Unauthenticated Portfolio Write**: Non-logged in client attempting to rewrite portfolio content.
2. **Identity Spoofing Admin**: Visitor logging in under an anonymous ID and attempting to save change-logs.
3. **Privilege Escalation on Email**: Attempting to edit database settings with unverified email claims.
4. **Mass List Enumeration on Messages**: Random IP querying the `messages` collection to scrape other visitors' contacts.
5. **ID Poisoning Attack**: Attempting to write a message with a 1.5MB character ID to bloat document storage.
6. **Denial of Wallet payload**: Creating a message with a 10MB text body.
7. **Bypassing Type Validation**: Saving `cgpa` as a boolean (`true`) instead of a valid string structure.
8. **Stale Timestamp Write**: Creating or updating records with hardcoded client timestamps instead of `request.time`.
9. **Malicious Message Header Injection**: Intercepting messages and adding fields like `isApproved` or `role`.
10. **Target Content Overwrite**: Attempting to alter invariant keys on portfolio content block.
11. **Malicious Delete**: Trying to delete the single portfolio config document.
12. **Spam Creation**: Rapid-successive writes breaching rate limitations.

---

## 3. Threat Model and Rules Schema

### Global Rule Matrix
- Portfolio: `read` = true, `write` = isAdmin()
- Messages: `create` = validForm(), `read`/`write` = isAdmin()

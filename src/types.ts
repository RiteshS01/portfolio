/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SkillItem {
  name: string;
  level?: number; // 1-100 for stats if needed
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string; // fallback to custom SVG or canvas-generated illustrations
  featured?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface PortfolioData {
  id: string;
  heroName: string;
  heroTitle1: string;
  heroTitle2: string;
  heroSubtitles: string[];
  introText: string;
  heroImageUrl?: string;
  
  // Stats
  statCgpa: string;
  statGerman: string;
  statProjectsCount: string;
  statOther: string;
  
  // About
  aboutStory: string;
  aboutECE: string;
  aboutGoal: string;
  
  // Lists
  skillsList: SkillCategory[];
  experienceList: TimelineItem[];
  projectsList: ProjectItem[];
  educationList: TimelineItem[];
  certificationsList: CertificationItem[];
  
  // Contacts & Socials
  contactEmail: string;
  contactPhone?: string;
  socialLinkedIn: string;
  socialGitHub: string;
  socialInstagram: string;
  githubUsername: string;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

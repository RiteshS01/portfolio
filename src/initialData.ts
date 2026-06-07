/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioData } from './types';

export const initialPortfolioData: PortfolioData = {
  id: "current",
  heroName: "RITESH SHINDE",
  heroTitle1: "ELECTRONICS & EMBEDDED",
  heroTitle2: "SYSTEMS ENGINEER",
  heroSubtitles: [
    "Electronics and Computer Engineering",
    "IoT and Embedded System Builder",
    "Interested in Electronics"
  ],
  introText: "I am an Electronics and Computer Engineering student at MIT ADT University, Pune, with a strong foundation in Embedded Systems, IoT, Automation, and Software Development. Skilled in Arduino Programming, C Programming, Circuit Design, Sensor Interfacing, and Microcontroller-based system development. Passionate about applying engineering knowledge to develop efficient, technology-driven solutions for real-world challenges while continuously enhancing technical, analytical, and research capabilities.",
  heroImageUrl: "https://cdn.corenexis.com/files/c/1218173720.png",
  
  // Stats
  statCgpa: "8.31 / 10 CGPA",
  statGerman: "IEIL Innovation 2nd Rank",
  statProjectsCount: "4 Core ECE Projects",
  statOther: "Electronics & Embedded",
  
  // About
  aboutStory: "My journey in engineering centers on the integration of hardware precision and intelligent firmware modules—bridging physical execution and smart computing gates. From designing wireless EV inductive charging highways and underground cable fault locators to published scientific publications, I strive to design high-reliability electronic architectures.",
  aboutECE: "I focus primarily on lower-level systems engineering: conducting real-time sensor fusion calibration, specifying microcontroller-based system interfaces, creating robust PCB layout routing, and debugging logic using Proteus and Tinkercad workspaces.",
  aboutGoal: "Looking forward, my academic goal is to pursue my Master's Degree in Germany, focusing on Advanced Embedded Systems and Smart Microelectronics, to construct solutions that elevate hardware-software capability internationally.",
  
  // Lists
  skillsList: [
    {
      title: "Programming",
      skills: ["C", "C++", "Embedded C", "C++ (OOP & Data Structures)"]
    },
    {
      title: "Electronics & Microcontrollers",
      skills: ["Assembly", "Microprocessors", "Arduino Mega", "ARM7 Architecture", "ESP Boards", "Semiconductors"]
    },
    {
      title: "EDA & Instrumentation",
      skills: ["Sensor Interfacing", "PCB Layout Design", "Circuit Design", "Proteus Simulation", "Tinkercad", "Keil uVision"]
    },
    {
      title: "Other Core Competencies",
      skills: ["Problem Solving", "Team Leadership", "Technical Project Coding", "Scientific Research Writing"]
    }
  ],
  
  experienceList: [
    {
      id: "exp1",
      title: "Primary Academic Project Lead",
      subtitle: "MIT ADT University Projects",
      period: "2024 - Present",
      description: "Led multiple engineering project team developments during B.Tech studies (Team Size: 4). Handled hardware specification, circuit layout, and controller firmware logic for micro-systems like Underground Fault Detectors, Automated Door Access, and Gas Detectors."
    },
    {
      id: "exp2",
      title: "Scientific Research Author",
      subtitle: "International Journal of Creative Research Thoughts (IJCRT)",
      period: "Nov 2024 - Present",
      description: "Successfully co-authored and published a peer-reviewed scientific paper entitled '3 in 1 Safety Device – Gas, Alcohol & Smoke Detector' in the International Journal of Creative Research Thoughts (IJCRT), presenting design paradigms of sensor calibration."
    },
    {
      id: "exp3",
      title: "Value Added Course Scholar",
      subtitle: "Automate Engineering & MIT ADT Collaboration",
      period: "06 Apr 2026 - 10 Apr 2026",
      description: "Completed intensive practical training on 'Internet of Things (IoT) and Industrial IoT' organized by the Department of Electronics & Communication Engineering, focusing on physical sensors and network protocols."
    }
  ],
  
  projectsList: [
    {
      id: "proj1",
      title: "Smart IoT-Based Wireless EV Charging Road",
      subtitle: "Inductive Power Transfer Highway Track",
      description: "An innovative highway simulation enabling wireless charging of electric vehicles while moving or stationary. Designed an inductive power transfer layout where underground transmission coils energize a moving vehicle's receiving coil. Implemented IR sensor grids to detect vehicle positioning, activating coils selectively to prevent idle power drop. Coupled with Arduino and ESP boards to stream real-time battery voltage, percentage, temp, and environment stats to a Wi-Fi server.",
      tech: ["Electric Vehicles", "ARM7", "Arduino", "PCB Layout", "Embedded Systems", "Electronics", "Internet of Things"],
      githubUrl: "https://github.com/RiteshS01",
      liveUrl: "https://github.com/RiteshS01",
      image: "ev_charging_system",
      featured: true
    },
    {
      id: "proj2",
      title: "Underground Cable Fault Detector",
      subtitle: "Ohm's Law Based Distance Locator",
      description: "Designed a microcontroller-based system to detect and pinpoint short circuits, open circuits, and insulation failures in underground distribution cables using Ohm's Law. Measures resistance and voltage drop variations across cable lines to compute exact fault distances from the base station. Relays real-time diagnostic alerts and numeric calculations to an I2C LCD screen, reducing unnecessary excavation and maintenance costs.",
      tech: ["Arduino", "Resistor Networks", "Current Sensing Circuits", "Relay Modules", "Proteus", "LCD Interface", "Embedded Systems"],
      githubUrl: "https://github.com/RiteshS01/Underground-Cable-Fault-Detection-System",
      liveUrl: "https://github.com/RiteshS01/Underground-Cable-Fault-Detection-System",
      image: "cable_fault_system",
      featured: true
    },
    {
      id: "proj3",
      title: "Smart Door Locking System",
      subtitle: "Dual-Authenticated Security Access Control",
      description: "An embedded door locks security system designed using Arduino Mega, an RC522 RFID module, a 4x4 keypad, and a servo motor. Implemented secure validation routines comparing card IDs and PIN passes. If matches are found, the servo actuates lock mechanism state, reporting real-time system feedback on an I2C LCD screen. Achieved 97% RFID verification accuracy and 92% keypad logging accuracy.",
      tech: ["Embedded C", "C++", "Arduino Mega", "RFID RC522", "Servo Motors", "4x4 Keypads", "Circuit Interfacing"],
      githubUrl: "https://github.com/RiteshS01/Smart-Door-locking-System",
      liveUrl: "https://github.com/RiteshS01/Smart-Door-locking-System",
      image: "smart_door_lock",
      featured: true
    },
    {
      id: "proj4",
      title: "3 in 1 Safety Device: Gas, Alcohol & Smoke",
      subtitle: "Integrated Environmental Multi-Hazard Monitor",
      description: "Integrated an MQ2 sensor with BC557 transistors, buzzer warnings, TP4056 chargers, and 3.7V lithium-ion batteries. Triggers rapid acoustic warnings and optical LED indicators whenever smoke, hazardous gas, or alcohol vapor is detected. Built as a compact safety shield with Proteus test validation to enhance protection across residential, workspace, or transport vehicles.",
      tech: ["MQ2 Sensors", "Transistors", "TP4056 Charging", "PCB Design", "Tinkercad", "Proteus Simulation", "Safety Electronics"],
      githubUrl: "https://github.com/RiteshS01/3-in-1-Safety-Device-Gas-Alcohol-Smoke-Detector",
      liveUrl: "https://github.com/RiteshS01/3-in-1-Safety-Device-Gas-Alcohol-Smoke-Detector",
      image: "safety_detector",
      featured: true
    }
  ],
  
  educationList: [
    {
      id: "edu1",
      title: "B.Tech in Electronics & Computer Engineering",
      subtitle: "MIT ADT University // Pune, India",
      period: "2023 - 2027",
      description: "Specialized in Embedded Systems, IoT, Automation, and Microcontroller-based Systems. Maintained a CGPA: 8.31 / 10."
    },
    {
      id: "edu2",
      title: "12th Standard // Higher Secondary Certificate",
      subtitle: "Jai Bajrang High School, Ahilyanagar // MSBSHSE",
      period: "2023",
      description: "State Board Level (MSBSHSE). Aggregate percentage: 62 / 100."
    },
    {
      id: "edu3",
      title: "10th Standard // Secondary School Certificate",
      subtitle: "Lead School, Solapur, Solapur // CBSE",
      period: "2021",
      description: "Central Board Level (CBSE). Aggregate percentage: 83 / 100."
    }
  ],
  
  certificationsList: [
    {
      id: "cert1",
      title: "German Language A1 Level Certification",
      issuer: "Sai Foreign Language Institute",
      date: "13 May, 2031",
      link: "https://github.com/RiteshS01"
    },
    {
      id: "cert2",
      title: "IoT and Industrial IoT Value Added Training Certificate",
      issuer: "Department of Electronics & Communication Engineering, MIT ADT",
      date: "10 Apr, 2026",
      link: "https://github.com/RiteshS01"
    },
    {
      id: "cert3",
      title: "Published Paper: Integrated Safety System Model (3 in 1 Safety Device)",
      issuer: "International Journal of Creative Research Thoughts (IJCRT)",
      date: "21 Nov, 2024",
      link: "https://github.com/RiteshS01/3-in-1-Safety-Device-Gas-Alcohol-Smoke-Detector"
    }
  ],
  
  contactEmail: "riteshshinde261@gmail.com",
  contactPhone: "+91 7666601086",
  socialLinkedIn: "https://www.linkedin.com/in/ritesh-shinde-2481982a4",
  socialGitHub: "https://github.com/RiteshS01",
  socialInstagram: "https://www.instagram.com/riteshhh_001_?igsh=aDZzbjluZXVrM28z",
  githubUsername: "RiteshS01"
};

import Educations from "@/components/content/Educations";
import Experience from "@/components/content/Experience";
import Others from "@/components/content/Others";
import Personal from "@/components/content/Personal";

export const skills = [
  "Python",
  "Travis",
  "Kubernetes",
  "Tekton",
  "SFDX",
  "Agile",
  "JavaScript",
  "Java",
  "Android Studio",
  "C/C++",
  "Linux",
  "API",
  "Object Oriented Programming",
  "React",
];

export const menuItems: any = {
  Education: <Educations />,
  Experience: <Experience />,
  Personal: <Personal />,
  Others: <Others />,
};

export type education = {
  name: string;
  courses: string[];
  award: string[];
  img: string;
  location: string;
  date: string;
  major: string;
  degree: string;
  gpa: string;
};

const jhu: education = {
  name: "Johns Hopkins University",
  courses: [
    "Operating System",
    "Compilers & Interpreters",
    "Information Retrieval and Web Agents",
    "Principles of Programming Languages",
    "User Interfaces and Mobile Applications",
    "Introduction to Human-Computer Interaction",
    "Artificial Intelligence",
    "Full-Stack Javascript",
  ],
  award: ["JHU Grant 2022", "Hopkins Scholarship 2023"],
  img: "jhu.jpeg",
  location: "Baltimore, MD",
  date: "Aug 2022 - Current",
  major: "Computer Science",
  degree: "Bachelor & Master (WIP)",
  gpa: "3.84/4.00",
};

const su: education = {
  name: "Syracuse University",
  courses: [
    "Intro to Discrete Mathematics",
    "Intro Computer Science",
    "Computer Organization Programming System",
    "Data Structures",
    "Software Specification and Design",
    "Introduction to Analysis of Algorithms	",
    "Object Oriented Programming C++",
    "Systems & Network Programming",
  ],
  award: [
    "IEEE Winterlude Engagement Journey 2nd Place",
    "The Wellslink Leadership Program - Academic Excellence Award",
  ],
  img: "su.jpg",
  location: "Syracuse, NY",
  date: "Aug 2020 - May 2022",
  major: "Computer Science",
  degree: "Bachelor",
  gpa: "3.97/4.00",
};

export const educations: education[] = [jhu, su];

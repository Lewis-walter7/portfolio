import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import fluxchess from "@/public/fluxchess.png";
import flower from "@/public/flower.png";
import jvrtours from "@/public/jvrtours.png";
import artyfact from "@/public/artyfact.png";
import rankrover from "@/public/rankrover.png";
import citybossmotors from "@/public/citybossmotors.png";
import citybossrealtors from "@/public/citybossrealtors.png";
import { ProjectProps } from "@/components/project";
import phonemallexpresss from "@/public/partners/phonemallexpresss.png";
import phonemallexpress from "@/public/phonemallexpresss.png";
import citybosslogo from "@/public/partners/citybosslogo.png";
import brandPlaceholder from "@/public/brand-placeholder.png";

export type LearningProgress = "Beginner" | "Intermediate" | "Expert";

export interface LearningItem {
  name: string;
  description: string;
  progress: LearningProgress;
  icon: string;
}

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "GitHub",
    hash: "#github",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Testimonials",
    hash: "#testimonials",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Nairobi, KE",
    description:
      "I graduated after 6 months of studying. I immediately started working as a freelancer.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Front-End Developer",
    location: "Nairobi, KE",
    description:
      "I worked as a front-end developer for 1 year. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Nairobi KE",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma MongoDB, Jetpack Compose and Kotlin. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
  {
    title: "Android Developer",
    location: "Nairobi KE",
    description:
      "I'm now a full-stack android developer working as a freelancer. My stack includes Firebase, Appwrite, Jetpack Compose and Kotlin. I'm open to full-time opportunities.",
    icon: React.createElement(SiKotlin),
    date: "2021 - present",
  },
  {
    title: "Backend Developer",
    location: "Nairobi KE",
    description:
      "I'm now a full-stack android developer working as a freelancer. My stack includes Kotlin, MySQL, PostgreSQL, MongoDB, AppWrite, Ktor. I'm open to full-time opportunities.",
    icon: React.createElement(SiKotlin),
    date: "2021 - present",
  }
] as const;

export const projectsData: ProjectProps[] = [
  {
    title: "PhoneMallExpress",
    description:
      "This is a website for PhoneMallExpress. It features a modern and responsive design, with a focus on user experience and ease of navigation.",
    tags: ["React", "Next.js", "Vanilla CSS", "MongoDB",],
    imageUrl: phonemallexpress,
    link: "https://phonemallexpress.com",
    category: "Web App"
  },
  // {
  //   title: "MobiTower Electronics",
  //   description: "This is a website for MobiTower Electronics. It features a modern and responsive design, with a focus on user experience and ease of navigation.",
  //   tags: ["React", "Next.js", "Vanilla CSS", "MongoDB",],
  //   imageUrl: mobitower,
  //   link: "",
  //   category: "Web App"
  // },
  {
    title: "CityBoss Motors",
    description:
      "This is a car dealership website for CityBoss Motors. It features a modern and responsive design, with a focus on user experience and ease of navigation.",
    tags: ["React", "Next.js", "Tailwind", "MongoDB",],
    imageUrl: citybossmotors,
    link: "https://cityboss.vercel.app",
    category: "Web App"
  },
  {
    title: "CityBoss Realtors",
    description:
      "This is a real estate website for CityBoss Real Estate. It features a modern and responsive design, with a focus on user experience and ease of navigation.",
    tags: ["React", "Next.js", "Tailwind", "MongoDB",],
    imageUrl: citybossrealtors,
    link: "https://citybossrealtors.vercel.app",
    category: "Web App"
  },
  {
    title: "Rank Rover",
    description:
      "This is an SEO tool for tracking rankings, auditing websites, and monitoring competitors to boost organic search visibility.",
    tags: ["NestJS", "Next.js", "Tailwind", "TypeScript", "Prisma", "MongoDB"],
    imageUrl: rankrover,
    link: "https://rankrover.vercel.app",
    category: "Full-Stack"
  },
  {
    title: "JvrTours App",
    description:
      "An agency that offers travelers various tours and excursions with destinations all over the world. Browse our website to find your dream tour!",
    tags: ["React", "Next.js", "Tailwind", "MongoDB",],
    imageUrl: jvrtours,
    link: "https://jvrtourss.vercel.app",
    category: "Web App"
  },
  {
    title: "Flower",
    description:
      "A stunning flower coded using css to express high CSS skills.",
    tags: ["CSS", "HTML", "JS"],
    imageUrl: flower,
    link: "https://lewis-mj.vercel.app/",
    category: "Web App"
  },
  {
    title: "Flux Chess",
    description:
      "Flux Chess teaches chess tactics and strategies, fostering analytical thinking and decision-making through hands-on, interactive game experiences.",
    tags: ["React", "Next.js", "Tailwind", "PostgreSQL",],
    imageUrl: fluxchess,
    link: "https://fluxchess.vercel.app/",
    category: "Web App"

  },
  {
    title: "M-pesa App",
    description:
      "Worked on this project to showcase my ability to write code that follows clean architecture.",
    tags: ["Kotlin", "Firebase", "RoomDB", "Compose", "Appwrite"],
    imageUrl: corpcommentImg,
    category: "Mobile App"
  },
  {
    title: "Artyfact App",
    description:
      "Artyfact is a web app that showcases artyfacts for clients worldwide at cheaper prices leading to maximum authenticity.",
    tags: ["React", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: artyfact,
    category: "Web App"
  },
]

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Ktor",
  "NestJS",
  "Express",
  "PostgreSQL",
  "JUnit",
  "Jetpack Compose",
  "Kotlin",
  "Android Development",
  "Dependency Injection",
  "Perfomance"
] as const;

export const testimonialsData = [
  {
    name: "Sarah Johnson",
    title: "CEO",
    company: "City Boss Motors",
    testimonial: "Lewis delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient."
  },
  {
    name: "Jefferey Ataga",
    title: "Managing Director",
    company: "Jvr Tours Company",
    testimonial: "Working with Lewis was a fantastic experience. He transformed our vision into a beautiful, functional web application. Highly recommend his services!"
  },
  {
    name: " Rodriguez",
    title: "CEO",
    company: "City Boss Realtors",
    testimonial: "Lewis's development skills are top-notch. He built a responsive, fast, and visually stunning website for our agency. The results speak for themselves."
  }
] as const;

export const partneredBrandsData = [
  {
    name: "PhoneMallExpress",
    description: "Electronics Selling Trademark Company",
    logo: phonemallexpresss,
  },
  {
    name: "CityBoss Motors",
    description: "Car Selling Agency",
    logo: citybosslogo,
  },
  {
    name: "CityBoss Realtors",
    description: "Real Estate Agency",
    logo: citybosslogo,
  },
  {
    name: "Flux Chess",
    description: "Chess Learning Platform",
    logo: brandPlaceholder,
  },
] as const;

export const learningData: LearningItem[] = [
  {
    name: "Docker & Kubernetes",
    description: "Container orchestration and deployment",
    progress: "Intermediate",
    icon: "🐳"
  },
  {
    name: "Cloud Computing",
    description: "Cloud computing architecture and design",
    progress: "Intermediate",
    icon: "🔷"
  },
  {
    name: "AWS",
    description: "Cloud services and deployment",
    progress: "Intermediate",
    icon: "☁️"
  },
  {
    name: "Rust",
    description: "Systems programming language",
    progress: "Expert",
    icon: "🦀"
  },

];

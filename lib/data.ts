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
import { ProjectProps } from "@/components/project";

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
    name: "Experience",
    hash: "#experience",
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
    title: "Rank Rover",
    description:
      "This is an SEO tool for tracking rankings, auditing websites, and monitoring competitors to boost organic search visibility.",
    tags: ["NestJS", "Next.js", "Tailwind", "TypeScript", "Prisma", "MongoDB"],
    imageUrl: rankrover,
    link: "https://rankrover.vercel.app"
  },
  {
    title: "JvrTours App",
    description:
      "An agency that offers travelers various tours and excursions with destinations all over the world. Browse our website to find your dream tour!",
    tags: ["React", "Next.js", "Tailwind", "MongoDB",],
    imageUrl: jvrtours,
    link: "https://jvrtourss.vercel.app"
  },
  {
    title: "Flower",
    description:
      "A stunning flower coded using css to express high CSS skills.",
    tags: ["CSS", "HTML", "JS"],
    imageUrl: flower,
    link: "https://lewis-mj.vercel.app/"
  },
  {
    title: "Flux Chess",
    description:
      "Flux Chess is a platform that teaches players advanced chess strategies, enhances problem-solving skills, and encourages critical thinking through interactive games and challenges.",
    tags: ["React", "Next.js", "Tailwind", "PostgreSQL",],
    imageUrl: fluxchess,
  },
  {
    title: "M-pesa App",
    description:
      "Worked on this project to showcase my ability to write code that follows clean architecture.",
    tags: ["Kotlin", "Firebase", "RoomDB", "Compose", "Appwrite"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Artyfact App",
    description:
      "Artyfact is a web app that showcases artyfacts for clients worldwide at cheaper prices leading to maximum authenticity.",
    tags: ["React", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: artyfact,
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

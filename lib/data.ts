import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import instagram from "@/public/instagram.png";
import artyfact from "@/public/artyfact.png";

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

export const projectsData = [
  {
    title: "Ocean Pulse",
    description:
      "Am working on this project to give people ideas and expand their knowledge on Oceans and water bodies resulting to water bodies conservaton.",
    tags: ["Kotlin", "Firebase", "Compose", "RooMDB"],
    imageUrl: rmtdevImg,
  },
  {
    title: "M-pesa App",
    description:
      "Worked on this project to showcase my ability to write code that follows clean architecture.",
    tags: ["Kotlin", "Firebase", "RoomDB", "Compose", "Appwrite"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Instagram App",
    description:
      "An instagram clone both web app and android app that extended my thinking in creating world platform just to gain more expertise.",
    tags: ["React", "Next.js","Ktor", "PostgreSQL", "Tailwind", "MongoDB", "Kotlin", "Compose"],
    imageUrl: instagram,
  },
  {
    title: "Artyfact App",
    description:
      "Artyfact is a web app that showcases artyfacts for clients worldwide at cheaper prices leading to maximum authenticity.",
    tags: ["React", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: artyfact,
  },
] as const;

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
  "GraphQL",
  "Express",
  "PostgreSQL",
  "JUnit",
  "Jetpack Compose",
  "Kotlin",
  "Android Development",
  "Dependency Injection",
  "Perfomance"
] as const;

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiNestjs, SiPrisma, SiMongodb, SiPostgresql,
  SiKotlin, SiAndroid, SiFirebase,
  SiGit, SiTailwindcss
} from "react-icons/si";
import { FaCode, FaServer, FaMobile, FaTools } from "react-icons/fa";

const skillCategories = [
  {
    category: "Frontend",
    icon: FaCode,
    gradient: "from-blue-600 to-cyan-600",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "Tailwind", icon: SiTailwindcss },
    ]
  },
  {
    category: "Backend",
    icon: FaServer,
    gradient: "from-purple-600 to-pink-600",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "NestJS", icon: SiNestjs },
      { name: "Express", icon: SiExpress },
      { name: "Prisma", icon: SiPrisma },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
    ]
  },
  {
    category: "Mobile",
    icon: FaMobile,
    gradient: "from-green-600 to-emerald-600",
    skills: [
      { name: "Kotlin", icon: SiKotlin },
      { name: "Jetpack Compose", icon: SiAndroid },
      { name: "Android Development", icon: SiAndroid },
      { name: "Firebase", icon: SiFirebase },
    ]
  },
  {
    category: "Tools & Other",
    icon: FaTools,
    gradient: "from-orange-600 to-red-600",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "JUnit", icon: FaTools },
      { name: "Dependency Injection", icon: FaTools },
      { name: "Performance", icon: FaTools },
    ]
  }
];

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 px-4"
    >
      <SectionHeading>My skills</SectionHeading>

      <div className="grid gap-6 sm:gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.15 }}
            className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-black/5 dark:border-white/10 shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Category Header */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className={`bg-gradient-to-r ${category.gradient} p-3 rounded-xl`}>
                <category.icon className="text-2xl text-white" />
              </div>
              <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                {category.category}
              </h3>
            </div>

            {/* Skills Grid */}
            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: categoryIndex * 0.15 + skillIndex * 0.05,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  <div className="
                    flex items-center justify-center gap-2 px-4 py-2.5 rounded-full
                    bg-white dark:bg-white/10
                    border border-black/10 dark:border-white/20
                    hover:shadow-lg hover:scale-105
                    transition-all duration-300
                    cursor-pointer
                  ">
                    <skill.icon className={`text-lg bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform`} />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 text-center"
      >
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Always learning and expanding my technical toolkit
        </p>
      </motion.div>
    </section>
  );
}


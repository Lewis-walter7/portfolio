"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaCode, FaRocket, FaLightbulb, FaChess, FaGuitar, FaFilm } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiKotlin, SiMongodb, SiTypescript, SiPrisma } from "react-icons/si";

export default function About() {
  const { ref } = useSectionInView("About");

  const stats = [
    { label: "Years Experience", value: "4+" },
    { label: "Technologies", value: "15+" },
    { label: "Projects Completed", value: "20+" },
  ];

  const coreStack = [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Kotlin", icon: SiKotlin },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Prisma", icon: SiPrisma },
  ];

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[53rem] leading-8 sm:mb-40 scroll-mt-28 px-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      {/* Hero Statement */}
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          A <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">passionate developer</span> crafting elegant solutions at the intersection of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">technology and creativity</span>
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        className="grid grid-cols-3 gap-3 sm:gap-4 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="bg-white dark:bg-white/10 p-4 sm:p-6 rounded-2xl border border-black/5 dark:border-white/10 text-center hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
        {/* Left Column - Professional Journey */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <FaCode className="text-2xl text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">My Journey</h3>
          </div>

          <p className="text-gray-700 dark:text-gray-300">
            Currently pursuing <span className="font-semibold text-gray-900 dark:text-white">Computer Science</span>, I've transformed my passion for technology into real-world expertise through intensive bootcamp training and hands-on development.
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            What I <span className="italic font-medium">love most</span> about programming is the <span className="underline decoration-2 decoration-blue-500">problem-solving aspect</span> — that exhilarating moment when complex challenges transform into elegant solutions.
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-4 rounded-xl border border-blue-200/50 dark:border-blue-800/50">
            <div className="flex items-center gap-2 mb-2">
              <FaRocket className="text-blue-600 dark:text-blue-400" />
              <span className="font-semibold text-gray-900 dark:text-white">Core Stack</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {coreStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex items-center gap-1.5 bg-white dark:bg-white/10 px-3 py-1.5 rounded-full text-sm border border-black/5 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                >
                  <tech.icon className="text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Personal Interests */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <FaLightbulb className="text-2xl text-purple-600 dark:text-purple-400" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Beyond Code</h3>
          </div>

          <p className="text-gray-700 dark:text-gray-300">
            My curiosity extends to <span className="font-semibold text-gray-900 dark:text-white">theoretical physics</span>, exploring concepts like quantum gravity and dark matter. I'm also a <span className="font-semibold text-gray-900 dark:text-white">Blender professional</span>, bringing complex scientific ideas to life through 3D visualization.
          </p>

          <div className="space-y-3">
            <p className="text-gray-700 dark:text-gray-300 font-medium">When I'm not coding:</p>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center gap-3 bg-white dark:bg-white/5 p-3 rounded-lg border border-black/5 dark:border-white/10">
                <FaChess className="text-xl text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Playing chess & video games</span>
              </div>
              <div className="flex items-center gap-3 bg-white dark:bg-white/5 p-3 rounded-lg border border-black/5 dark:border-white/10">
                <FaFilm className="text-xl text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Watching documentaries</span>
              </div>
              <div className="flex items-center gap-3 bg-white dark:bg-white/5 p-3 rounded-lg border border-black/5 dark:border-white/10">
                <FaGuitar className="text-xl text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Learning guitar & philosophy</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action - Looking for Opportunities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 p-6 rounded-2xl text-center text-white shadow-lg"
      >
        <p className="text-lg sm:text-xl font-semibold mb-2">
          🚀 Open to Full-Time Opportunities
        </p>
        <p className="text-sm sm:text-base text-blue-50 dark:text-purple-50">
          Ready to contribute, innovate, and grow as a software developer where technology meets creativity
        </p>
      </motion.div>
    </motion.section>
  );
}

"use client";

import Image from "next/image";
import React from "react";
import './custom.css';
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import TypingEffect from "./utilfun";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] sm:mt-20 md:-mt-12"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/images/mesnap.jpeg"
              alt="Ricardo portrait"
              width="250"
              height="250"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.div
        className="mb-10 mt-4 px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-medium !leading-[1.5] sm:text-4xl mb-4">
          <span className="font-bold">Hello, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Lewis
            </span>
          </span>
        </h1>

        <div className="text-xl sm:text-3xl font-semibold mb-4">
          I'm <TypingEffect />
        </div>

        {/* Quick Stats Badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 bg-white dark:bg-white/10 px-4 py-2 rounded-full border border-black/10 dark:border-white/20 shadow-sm">
            <span className="text-2xl">🚀</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">4</span> Years
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white dark:bg-white/10 px-4 py-2 rounded-full border border-black/10 dark:border-white/20 shadow-sm">
            <span className="text-2xl">💻</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">20+</span> Projects
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white dark:bg-white/10 px-4 py-2 rounded-full border border-black/10 dark:border-white/20 shadow-sm">
            <span className="text-2xl">⚡</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">15+</span> Technologies
            </span>
          </div>
        </motion.div>

        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-[600px] mx-auto">
          Passionate about building{" "}
          <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            innovative sites & apps
          </span>
          {" "}with focus on{" "}
          <span className="relative inline-block">
            <span className="relative z-10 font-semibold text-gray-900 dark:text-white">
              Tech Space & Cyber Security
            </span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 dark:bg-blue-900 -z-10 opacity-50"></span>
          </span>
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-7 py-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:shadow-lg active:scale-105 transition-all"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:border-white/20 dark:bg-white/10 dark:text-white/60 hover:shadow-lg"
          href="https://www.linkedin.com/in/lewisindusa12/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:border-white/20 dark:bg-white/10 dark:text-white/60 hover:shadow-lg"
          href="https://github.com/Lewis-walter7"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}


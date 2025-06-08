"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
     <p className="mb-3">
        I am a dynamic and ambitious individual currently navigating the world of web and Android development. I do{" "}
        <span className="font-medium">Computer Science studies</span>, and I have delved into the practical aspects of my field, showcasing a passion for technology, programming, and scientific curiosity.
      </p>

      <p className="mb-3">
        I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the problem-solving aspect. I{" "}
        <span className="underline">love</span> the feeling of finally figuring out a solution to a problem.
      </p>

      <p className="mb-3">
        My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, MongoDB, Kotlin, and Jetpack Compose
        </span>
        . I am also familiar with TypeScript and Prisma, and I am always looking to learn new technologies.
      </p>

      <p className="mb-3">
        I have a strong interest in{" "}
        <span className="font-medium">physics</span>, especially in theoretical areas like quantum gravity and dark matter. I'm also a{" "}
        <span className="font-medium">Blender professional</span>, using 3D modeling and animation to visualize complex scientific and creative ideas.
      </p>

      <p className="mb-3">
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software developer where I can contribute, grow, and continue exploring the intersection of technology and creativity.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing <strong>chess</strong> &
        video games and watching factual movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}

"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

export interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  link?: string;
  category?: string;
}

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link
}: ProjectProps) {

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const CardContent = () => (
    <>
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            {title}
          </h3>
          {link && (
            <FaExternalLinkAlt className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mt-2 flex-shrink-0" />
          )}
        </div>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
          {description}
        </p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 dark:from-blue-500/90 dark:to-purple-500/90 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full shadow-sm"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt="Project I worked on"
        className="absolute hidden sm:block top-8 w-[28.25rem] -right-40 rounded-t-lg shadow-2xl
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial] group-even:-left-40"
      />
    </>
  );

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      {link ? (
        <section
          onClick={handleClick}
          className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[22rem] hover:bg-gray-200 transition-all hover:shadow-xl dark:text-white dark:bg-white/10 dark:hover:bg-white/20 cursor-pointer"
        >
          <CardContent />
        </section>
      ) : (
        <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[22rem] opacity-75 dark:text-white dark:bg-white/10">
          <CardContent />
        </section>
      )}
    </motion.div>
  );
}



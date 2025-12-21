"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "@/components/project";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { motion } from "framer-motion";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen pt-28 pb-20 px-4">
            <div className="max-w-[53rem] mx-auto">
                {/* Back Button */}
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors font-medium"
                >
                    <HiArrowLeft />
                    <span>Back to Home</span>
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            All Projects
                        </span>
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                        A showcase of my work across web, mobile, and full-stack development
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div>
                    {projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project
                                title={project.title}
                                description={project.description}
                                tags={project.tags}
                                imageUrl={project.imageUrl}
                                link={project.link}
                            />
                        </React.Fragment>
                    ))}
                </div>

                {/* Stats Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-600 dark:text-gray-400">
                        <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            {projectsData.length}
                        </span>{" "}
                        projects and counting...
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

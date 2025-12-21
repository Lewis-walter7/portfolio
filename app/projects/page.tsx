"use client";

import React, { useState, useMemo } from "react";
import { projectsData } from "@/lib/data";
import Project from "@/components/project";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

    // Get unique categories
    const categories = useMemo(() => {
        const cats = new Set<string>(["All"]);
        projectsData.forEach(project => {
            if (project.category) cats.add(project.category);
        });
        return Array.from(cats);
    }, []);

    // Get all unique tags
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        projectsData.forEach(project => {
            project.tags.forEach(tag => tags.add(tag));
        });
        return Array.from(tags).sort();
    }, []);

    // Filter projects based on selected category and tags
    const filteredProjects = useMemo(() => {
        return projectsData.filter(project => {
            const categoryMatch = selectedCategory === "All" || project.category === selectedCategory;
            const tagMatch = selectedTags.size === 0 ||
                project.tags.some(tag => selectedTags.has(tag));
            return categoryMatch && tagMatch;
        });
    }, [selectedCategory, selectedTags]);

    const toggleTag = (tag: string) => {
        const newTags = new Set(selectedTags);
        if (newTags.has(tag)) {
            newTags.delete(tag);
        } else {
            newTags.add(tag);
        }
        setSelectedTags(newTags);
    };

    return (
        <div className="min-h-screen -mt-20 pb-20 px-4">
            <div className="max-w-[53rem] mx-auto">
                {/* Back Button */}
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-4 transition-colors font-medium"
                >
                    <HiArrowLeft />
                    <span>Back to Home</span>
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
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

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8"
                >
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Filter by Category</h3>
                    <div className="flex flex-wrap gap-3">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedCategory === category
                                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                                        : "bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-white/20"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Tag Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                >
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Filter by Technology</h3>
                    <div className="flex flex-wrap gap-2">
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => toggleTag(tag)}
                                className={`px-3 py-1.5 text-sm rounded-full font-medium transition-all ${selectedTags.has(tag)
                                        ? "bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white shadow-md"
                                        : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10"
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                    {selectedTags.size > 0 && (
                        <button
                            onClick={() => setSelectedTags(new Set())}
                            className="mt-3 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Clear all filters ({selectedTags.size})
                        </button>
                    )}
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${selectedCategory}-${Array.from(selectedTags).join(",")}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project, index) => (
                                <React.Fragment key={index}>
                                    <Project
                                        title={project.title}
                                        description={project.description}
                                        tags={project.tags}
                                        imageUrl={project.imageUrl}
                                        link={project.link}
                                    />
                                </React.Fragment>
                            ))
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-gray-500 dark:text-gray-400 text-lg">
                                    No projects found with the selected filters
                                </p>
                                <button
                                    onClick={() => {
                                        setSelectedCategory("All");
                                        setSelectedTags(new Set());
                                    }}
                                    className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Stats Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-600 dark:text-gray-400">
                        Showing{" "}
                        <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            {filteredProjects.length}
                        </span>
                        {" "}of{" "}
                        <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            {projectsData.length}
                        </span>{" "}
                        projects
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

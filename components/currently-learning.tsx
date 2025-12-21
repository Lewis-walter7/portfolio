"use client";

import React from "react";
import { motion } from "framer-motion";
import { learningData } from "@/lib/data";
import { FaRocket } from "react-icons/fa";

export default function CurrentlyLearning() {
    return (
        <section className="mb-28 sm:mb-40 scroll-mt-28 max-w-[53rem] mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.175 }}
            >
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 mb-3">
                        <FaRocket className="text-3xl text-blue-600 dark:text-blue-400" />
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            Currently Exploring
                        </h2>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                        Technologies I'm learning and experimenting with
                    </p>
                </div>

                {/* Learning Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {learningData.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="bg-white dark:bg-white/5 p-5 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-lg">
                                {/* Icon and Title */}
                                <div className="flex items-start gap-3 mb-3">
                                    <span className="text-3xl">{item.icon}</span>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                                            {item.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Progress Badge */}
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                                        {item.progress}
                                    </span>
                                    <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ${item.progress === "Beginner"
                                                    ? "w-1/3"
                                                    : item.progress === "Intermediate"
                                                        ? "w-2/3"
                                                        : "w-full"
                                                }`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8"
                >
                    💡 Always expanding my knowledge and staying current with industry trends
                </motion.p>
            </motion.div>
        </section>
    );
}

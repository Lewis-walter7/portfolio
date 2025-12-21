"use client";

import React from "react";
import { motion } from "framer-motion";
import { testimonialsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

// Function to get initials from name
const getInitials = (name: string): string => {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
};

// Function to generate color based on name
const getColorFromName = (name: string): string => {
    const colors = [
        "from-blue-500 to-purple-500",
        "from-green-500 to-teal-500",
        "from-orange-500 to-red-500",
        "from-pink-500 to-rose-500",
        "from-cyan-500 to-blue-500",
        "from-yellow-500 to-orange-500",
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
};

export default function Testimonials() {
    const { ref } = useSectionInView("Testimonials", 0.5);

    return (
        <section
            ref={ref}
            id="testimonials"
            className="mb-28 sm:mb-40 scroll-mt-28"
        >
            <SectionHeading>Client Testimonials</SectionHeading>
            <div className="max-w-[53rem] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonialsData.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-gray-200 dark:border-white/10 hover:shadow-xl dark:hover:bg-white/10 transition-all"
                        >
                            {/* Quote Icon */}
                            <div className="mb-4">
                                <svg
                                    className="w-8 h-8 text-blue-600 dark:text-blue-400 opacity-50"
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                >
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg>
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-700 dark:text-white/75 leading-relaxed mb-6 italic">
                                "{testimonial.testimonial}"
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center gap-4">
                                {/* Avatar with Initials */}
                                <div
                                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${getColorFromName(
                                        testimonial.name
                                    )} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                                >
                                    {getInitials(testimonial.name)}
                                </div>

                                {/* Name and Title */}
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {testimonial.title}
                                        {testimonial.company && ` • ${testimonial.company}`}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

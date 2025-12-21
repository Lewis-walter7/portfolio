"use client";

import React from "react";
import { motion } from "framer-motion";
import { partneredBrandsData } from "@/lib/data";
import Image from "next/image";

export default function PartneredBrands() {

    return (
        <section
            id="brands"
            className="mb-28 sm:mb-40 scroll-mt-28 text-center"
        >
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.175 }}
                className="max-w-[53rem] mx-auto"
            >
                <h2 className="text-3xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                        Trusted By Industry Leaders
                    </span>
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-12">
                    Proud to have partnered with these amazing brands
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
                    {partneredBrandsData.map((brand, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-xl h-full flex flex-col items-center justify-center gap-3">
                                <div className="relative w-20 h-20 transition-all duration-300">
                                    <Image
                                        src={brand.logo}
                                        alt={`${brand.name} logo`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <div className="text-center">
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                                        {brand.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                        {brand.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaStar, FaCodeBranch, FaUsers } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

interface GitHubStats {
    publicRepos: number;
    totalStars: number;
    followers: number;
    contributions?: number;
}

export default function GithubStats() {
    const { ref } = useSectionInView("GitHub");
    const [stats, setStats] = useState<GitHubStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchGitHubStats = async () => {
            try {
                const username = "Lewis-walter7";

                // Fetch user data
                const userResponse = await fetch(`https://api.github.com/users/${username}`);
                if (!userResponse.ok) throw new Error("Failed to fetch user data");
                const userData = await userResponse.json();

                // Fetch repos to calculate total stars
                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
                if (!reposResponse.ok) throw new Error("Failed to fetch repos");
                const reposData = await reposResponse.json();

                const totalStars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);

                setStats({
                    publicRepos: userData.public_repos,
                    totalStars,
                    followers: userData.followers,
                });
                setLoading(false);
            } catch (err) {
                console.error("Error fetching GitHub stats:", err);
                setError(true);
                setLoading(false);
            }
        };

        fetchGitHubStats();
    }, []);

    if (error) {
        return null; // Silently fail, don't show anything if API fails
    }

    return (
        <section
            ref={ref}
            id="github"
            className="mb-28 sm:mb-40 scroll-mt-28 text-center"
        >
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.175 }}
                className="max-w-[53rem] mx-auto"
            >
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-3">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            GitHub Activity
                        </span>
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        My contributions and open source presence
                    </p>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="bg-gray-100 dark:bg-white/5 p-6 rounded-2xl animate-pulse"
                            >
                                <div className="h-12 w-12 bg-gray-200 dark:bg-white/10 rounded-full mx-auto mb-4"></div>
                                <div className="h-8 bg-gray-200 dark:bg-white/10 rounded mb-2"></div>
                                <div className="h-4 bg-gray-200 dark:bg-white/10 rounded"></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {/* Public Repos */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/30 hover:shadow-xl transition-all hover:scale-105"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
                                    <FaCodeBranch className="text-2xl text-white" />
                                </div>
                            </div>
                            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                                {stats?.publicRepos || 0}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">
                                Public Repositories
                            </p>
                        </motion.div>

                        {/* Total Stars */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-2xl border border-yellow-100 dark:border-yellow-800/30 hover:shadow-xl transition-all hover:scale-105"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-full">
                                    <FaStar className="text-2xl text-white" />
                                </div>
                            </div>
                            <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent mb-2">
                                {stats?.totalStars || 0}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">
                                Total Stars
                            </p>
                        </motion.div>

                        {/* Followers */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl border border-green-100 dark:border-green-800/30 hover:shadow-xl transition-all hover:scale-105"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-full">
                                    <FaUsers className="text-2xl text-white" />
                                </div>
                            </div>
                            <h3 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent mb-2">
                                {stats?.followers || 0}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">
                                Followers
                            </p>
                        </motion.div>
                    </div>
                )}

                {/* GitHub Link */}
                <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    href="https://github.com/Lewis-walter7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gray-900 dark:bg-white/10 text-white dark:text-gray-100 rounded-lg hover:bg-gray-800 dark:hover:bg-white/20 transition-all hover:shadow-lg font-medium"
                >
                    <FaGithub className="text-xl" />
                    <span>View GitHub Profile</span>
                </motion.a>
            </motion.div>
        </section>
    );
}

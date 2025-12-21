"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BiMessageDetail } from "react-icons/bi";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,42rem)] text-center px-4"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-white to-gray-50 dark:from-white/10 dark:to-white/5 p-8 rounded-2xl border border-black/5 dark:border-white/10 shadow-lg"
      >
        {/* Header */}
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Let's work together! Reach out directly at{" "}
          <a
            className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent hover:underline"
            href="mailto:lewisindusa62@gmail.com"
          >
            lewisindusa62@gmail.com
          </a>
          {" "}or use the form below.
        </p>

        {/* Social Quick Links */}
        <div className="flex justify-center gap-4 mb-8">
          <motion.a
            href="mailto:lewisindusa62@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-shadow"
          >
            <FaEnvelope />
            <span className="text-sm font-medium">Email</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/lewisindusa12/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-500 dark:to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-shadow"
          >
            <FaLinkedin />
            <span className="text-sm font-medium">LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://github.com/Lewis-walter7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 dark:from-gray-600 dark:to-gray-700 text-white px-4 py-2 rounded-full hover:shadow-lg transition-shadow"
          >
            <FaGithub />
            <span className="text-sm font-medium">GitHub</span>
          </motion.a>
        </div>

        {/* Contact Form */}
        <form
          className="flex flex-col gap-4"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          {/* Email Input */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <HiMail className="text-xl" />
            </div>
            <input
              className="w-full h-14 pl-12 pr-4 rounded-xl border border-black/10 dark:border-white/20 bg-white dark:bg-white/10 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
            />
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <div className="absolute left-4 top-4 text-gray-400">
              <BiMessageDetail className="text-xl" />
            </div>
            <textarea
              className="w-full h-52 pl-12 pr-4 py-4 rounded-xl border border-black/10 dark:border-white/20 bg-white dark:bg-white/10 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors resize-none"
              name="message"
              placeholder="Your message"
              required
              maxLength={5000}
            />
          </div>

          {/* Submit Button */}
          <SubmitBtn />
        </form>
      </motion.div>
    </motion.section>
  );
}


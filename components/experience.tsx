"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Journey</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light"
                    ? "#ffffff"
                    : "rgba(255, 255, 255, 0.05)",
                boxShadow: theme === "light"
                  ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                  : "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",
                border: theme === "light"
                  ? "1px solid rgba(0, 0, 0, 0.05)"
                  : "1px solid rgba(255, 255, 255, 0.1)",
                textAlign: "left",
                padding: "1.5rem 2rem",
                borderRadius: "0.75rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.5rem solid #ffffff"
                    : "0.5rem solid rgba(255, 255, 255, 0.05)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light"
                    ? "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)"
                    : "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)",
                fontSize: "1.5rem",
                color: "#ffffff",
                boxShadow: theme === "light"
                  ? "0 0 0 4px #ffffff, 0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                  : "0 0 0 4px rgba(255, 255, 255, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="font-medium !mt-1 text-gray-600 dark:text-gray-400">
                {item.location}
              </p>
              <p className="!mt-3 !font-normal text-gray-700 dark:text-white/75 leading-relaxed">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

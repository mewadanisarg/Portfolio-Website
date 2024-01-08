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

export default function Experince() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience & Education</SectionHeading>
      <VerticalTimeline>
        {experiencesData.map((experinceItem, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              visible={true}
              date={experinceItem.date}
              icon={experinceItem.icon}
              iconStyle={{
                background: "whitesmoke",
                fontSize: "1.5rem",
              }}
            >
              <h3 className=" font-semibold capitalize ">
                {experinceItem.title}
              </h3>
              <p className=" font-normal !mt-0 ">{experinceItem.location}</p>
              <p className=" !font-normal !mt-1 text-gray-750 ">
                {experinceItem.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

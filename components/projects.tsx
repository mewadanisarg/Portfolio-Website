import { projectsData } from "@/lib/data";
import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { useScroll } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

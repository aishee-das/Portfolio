"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-0 scroll-mt-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
        {/* I am currently a Software Engineering Intern at Vitec, where I'm fortunate to be part of the dynamic head-end team. Currently,  */}
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am pursuing a Bachelor's of Science in Computer Science at the University of Edinburgh, now well into my third academic year. My toolset? A mix of Python, Java, C, HTML, CSS, JavaScript, SQLite and the dynamic world of React. Alongside, I've also dabbled in Haskell and PDDL, keeping my skills sharp and adaptive.
      </p>

      <p>
        Beyond the world of coding and algorithms, I enjoy playing video games, reading books and watching movies. Feel free to explore my portfolio and get in touch - whether it's about collaborating on a project, sharing insights or simply connecting over a shared interest.
      </p>
    </motion.section>
  );
}
//could add more stuff on to the about section such as experince amd previous background.
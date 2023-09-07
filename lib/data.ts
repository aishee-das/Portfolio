import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bookingsystemImg from "@/public/bookingsytem.png";
import datascienceImg from "@/public/datascience.png";
import kanbanboardImg from "@/public/kanbanboard.png";
//moved experience before projects
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  // {
  //   title: "Informatics Tutoring Scheme",
  //   location: "Edinburgh, UK",
  //   description:
  //     "Participated in a voluntary Informatics Tutoring Scheme where I supported Scottish Mathematics exam-level high school students through online tutorial sessions to prepare for the final exam.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "November 2021 - May 2022",
  // },
  {
    title: "Learn Foundations Student Intern",
    location: "Edinburgh, UK",
    description:
      "I worked as a Learn intern miapping, migrating and carrying out acccessibility checks on a wide range of courses.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - May 2023",
  },
  {
    title: "Caledonia Math tutor",
    location: "Edinburgh, UK",
    description:
      "Tutoring Higher Mathematics student based on the SQA curriculum and working with an online whiteboard tool called Miro.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2022 - May 2023",
  },
  {
    title: "Spring Intern",
    location: "Amazon, UK",
    description:
      "Through this experience, I gained great insight into Amazon's basic values and leadership ideas, as well as a comprehensive awareness of the wide range of options the firm offers. I got the opportunity to participate in a variety of technical challenges, which helped me develop my problem-solving abilities and gave me the chance to network with talented people. ",
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 - June 2023",
  },
  {
    title: "Software Engineering Intern",
    location: "Vitec, Dalgety Bay, UK",
    description:
      "Worked on the head-end team dealing with several tickets regarding bug fixes for gateways. This was followed by a larger project that I was assigned to which involved converting several python scripts containing data about various gateways, mediaplayers and encoders in complex formats to a sqlite database.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 - September 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Customisable Events App",
    description:
      "Built a customizable Java events app, integrating GraphHopper API, developed and tested using dynamic UML design, JUnit, and system-level testing, ensuring a reliable software solution.",
    tags: ["Java"],
    imageUrl: bookingsystemImg,
  },
  {
    title: "Kanban Board",
    description:
      "Created an interactive Kanban board featuring seamless task addition and intuitive drag-and-drop functionality for efficient workflow management.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: kanbanboardImg,
  },
  {
    title: "Video Game Analysis",
    description:
      "Analyzed video game sales using R, unveiling key factors impacting influence and sales dynamics.",
    tags: ["R"],
    imageUrl: datascienceImg,
  },
//more projects? just add here (copy the format above)
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
  "Python",
  "SQLite",
  "C",
  "Java",
  "R",
  "Haskell",
] as const;
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaMicrosoft } from "react-icons/fa6";
import rmtdevImg from "@/public/rmtdev.png";
import nisargPersonalPortfolio from "@/public/Nisarg-Personal-Portfolio.png";
import socialNetworkProject from "@/public/social-network-project.png";
import naturesArt from "@/public/Nature's Art.png";
import { LogoAngular } from "@carbon/icons-react";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Masters in International Business and Engineering",
    location: "Hamm, DE",
    description:
      "I graduated after 2 years of studying. After finishing my master studies I was learning and developer web-apps.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2020",
  },
  {
    title: "Graduated bootcamp",
    location: "Berlin, DE",
    description:
      "I graduated from Spiced Academy after 3 months of studying. I immediately found an Intership as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Intern Web-Developer",
    location: "Essen, DE",
    description:
      "I worked as a webdeveloper at Impact Technology GmbH. Learned and developed PHP website for the client. My Tech-stack was PHP, MySQL, HTML, CSS, Bootstrap.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2021",
  },
  {
    title: "Technical Support Engineer at Microsoft",
    location: "Berlin, DEL",
    description:
      "I worked as a Technical Support Engineer for 13 months at Microsoft Deutschland GmbH",
    icon: React.createElement(FaMicrosoft),
    date: "2022 - 2023",
  },
  {
    title: "Junior Software Engineer",
    location: "Berlin, DE",
    description:
      "I was working as Junior Software Engineer at Prostep AG. My stack includes Angular, TypeScript, SCSS, Storybook, Docker and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(LogoAngular),
    date: "2023 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Social Network Project",
    description:
      "I worked as a full-stack developer on this final project for final presentation. Users can connect with similar in car Brand and Model.",
    tags: ["React", "Node.js", "Express.js", "PostgreSQL", "Tailwind", "Redux"],
    imageUrl: socialNetworkProject,
  },
  {
    title: "Nature's Art",
    description:
      "Image board for nature love. It has features like uploading files, pagination and commenting.",
    tags: ["Vue.js", "Node.js", "PostgreSQL", "Tailwind"],
    imageUrl: naturesArt,
  },
  {
    title: "Personal Portfolio",
    description:
      "A Personal Portfolio to respresent my skills and experience to the companies",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: nisargPersonalPortfolio,
  },
] as const;

export const skillsData = [
  "HTML",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;

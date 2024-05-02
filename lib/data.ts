import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import foodrestorent from "@/public/foodrestorent.png";
import coffeeshop from "@/public/coffeeshop.png";

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
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Degree Of Bachelor of Social Science (B.S.S.) Present.",
//     location: "Govt. Debendra College, Manikganj",
//     description:
//       " ",
//     icon: React.createElement(LuGraduationCap),
//     date: "",
//   },
//   {
//     title: "LWS-Think In A Redux Way",
//     location: "Online",
//     description:
//       "Deep Learn Redux. ",
//     icon: React.createElement(LuGraduationCap),
//     date: "2022",
//   },
//   // {
//   //   title: "Front-End Developer",
//   //   location: "Orlando, FL",
//   //   description:
//   //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//   //   icon: React.createElement(CgWorkAlt),
//   //   date: "2019 - 2021",
//   // },
//   // {
//   //   title: "Full-Stack Developer",
//   //   location: "Houston, TX",
//   //   description:
//   //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//   //   icon: React.createElement(FaReact),
//   //   date: "2021 - present",
//   // },
// ] as const;

export const projectsData = [
  {
    title: "Food Restorent",
    description:
      "A full-stack single-page restaurant web app. Login system with Firebase and private routes. Users can buy Food and see their purchase records on the Cart page. Users see another dashboard page and add reviews, booking lists, payment history checks, and new bookings created.Admin Dashboard, where the admin can do CRUD operations.",
    tags: ["React", "React Router", "MongoDB", "Tailwind", "Firebase", "Express-JS", "Tost Alert", "React-Tabs"],
    links: [{ name: "Live", link: "https://food-restorent-7c3cc.web.app/" }, { name: "BackEnd", link: "https://github.com/Sohel-Developer/food-restorent-server" }, { name: "Frontend", link: "https://github.com/Sohel-Developer/food-restorent-clint" }],
    imageUrl: foodrestorent,
  },
  {
    title: "Coffee Shop",
    description:
      "A single-page coffee shop web app. this website is only use admin dashboard page. Admin can Food Edit info , food add, food deleted and food all details seethat. ",
    tags: ["React", "React-Router", "MongoDB", "Tailwind", "Expres-JS", "React-Hook-Form"],
    links: [{ name: "Live", link: "https://coffee-shop-bd.web.app/" }, { name: "BackEnd", link: "https://github.com/Sohel-Developer/coffee-shop-server" }, { name: "Frontend", link: "https://github.com/Sohel-Developer/coffee-shop" }],
    imageUrl: coffeeshop,
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Rest Api",
  "Axios",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "MongoDB",
  "Firebase",
  "Redux",
  "Express",
  "Framer Motion",
  "Git",
  "Dev-Tool",
  "Figma",
] as const;

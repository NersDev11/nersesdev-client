import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiClaude,
  SiPostgresql,
  SiMongodb,
  SiFigma,
  SiJest,
  SiVitest,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { MdOutlineDataObject } from "react-icons/md";

export const skills = [
  {
    id: 1,
    name: "js",
    skills: ["javascript", "typescript"],
    icons: [SiJavascript, SiTypescript],
    imgBg: "js.png",
    text: "",
    quote:
      '"Any application that can be written in JavaScript, will eventually be written in JavaScript." — Anders Hejlsberg',
  },
  {
    id: 2,
    name: "css",
    skills: ["css", "tailwind"],
    icons: [SiCss, SiTailwindcss],
    imgBg: "css.png",
    text: "",
    quote:
      '"Everything is centered. Except the thing you need centered." — Folklore',
  },
  {
    id: 3,
    name: "html",
    skills: ["semantic html"],
    icons: [SiHtml5],
    imgBg: "html.png",
    text: "",
    quote: "",
  },
  {
    id: 4,
    name: "react",
    skills: ["react", "next"],
    icons: [SiReact, SiNextdotjs],
    imgBg: "react.png",
    text: "",
    quote:
      '"I came for the components. I stayed because I forgot how state works." — Folklore',
  },
  {
    id: 5,
    name: "node",
    skills: ["node", "express"],
    icons: [SiNodedotjs, SiExpress],
    imgBg: "node.png",
    text: "",
    quote:
      '"Express gives you enough structure to build an app, and enough freedom to build a disaster." — Folklore',
  },
  {
    id: 6,
    name: "oop",
    skills: ["oop"],
    icons: [MdOutlineDataObject],
    imgBg: "oop.png",
    text: "",
    quote:
      '"A junior developer writes a class. A mid-level developer writes an inheritance hierarchy. A senior developer asks if a function would be enough." — Folklore',
  },

  {
    id: 7,
    name: "git",
    skills: ["git"],
    icons: [SiGit],
    imgBg: "git.png",
    text: "",
    quote:
      '"Git lets you travel through time. Usually to discover where you broke everything."  — Folklore',
  },

  {
    id: 8,
    name: "db",
    skills: ["sql", "mongodb"],
    icons: [SiPostgresql, SiMongodb],
    imgBg: "db.png",
    text: "",
    quote: '"" — ',
  },
  {
    id: 9,
    name: "testing",
    skills: ["jest", "vitest"],
    icons: [SiJest, SiVitest],
    imgBg: "testing.png",
    text: "",
    quote: '"" — ',
  },
  {
    id: 10,
    name: "docker",
    skills: ["docker", "kubernetes"],
    icons: [SiDocker, SiKubernetes],
    imgBg: "docker.png",
    text: "",
    quote: '"If it works on your machine, ship your machine." — Solomon Hykes',
  },
  {
    id: 11,
    name: "cloud",
    skills: ["aws", "azure"],
    icons: [FaAws, VscAzure],
    imgBg: "cloud.png",
    text: "",
    quote: '"" — ',
  },
  {
    id: 12,
    name: "figma",
    skills: ["figma"],
    icons: [SiFigma],
    imgBg: "figma.png",
    text: "",
    quote: '"Design is a team sport." — Dylan Field',
  },
  {
    id: 13,
    name: "ai",
    skills: ["ai"],
    icons: [SiClaude],
    imgBg: "ai.png",
    text: "",
    quote:
      '"A junior developer writes a class. A mid-level developer writes an inheritance hierarchy. A senior developer asks if a function would be enough." — Folklore',
  },
];

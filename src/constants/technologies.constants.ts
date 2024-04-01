import angular from "@/assets/tech/angular.png";
import css from "@/assets/tech/css.png";
import git from "@/assets/tech/git.png";
import html from "@/assets/tech/html.png";
import javascript from "@/assets/tech/javascript.png";
import mapbox from "@/assets/tech/mapbox.png";
import mongodb from "@/assets/tech/mongodb.png";
import nodejs from "@/assets/tech/nodejs.png";
import openlayers from "@/assets/tech/openlayers.png";
import reactjs from "@/assets/tech/reactjs.png";
import redux from "@/assets/tech/redux.png";
import typescript from "@/assets/tech/typescript.png";




export interface Technology {
  name: string;
  icon: string;
}

export const technologies: Technology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Mapbox",
    icon: mapbox,
  },
  {
    name: "Openlayers",
    icon: openlayers,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

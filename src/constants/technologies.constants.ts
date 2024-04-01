import {
  angular,
  css,
  git,
  html,
  javascript,
  mapbox,
  mongodb,
  nodejs,
  openlayers,
  reactjs,
  redux,
  typescript
} from "../assets";

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

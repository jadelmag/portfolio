import { bigbuy, global, idrica, oesia } from "../assets";

export interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export const experiences = [
  {
    title: "Senior React Developer",
    company_name: "Oesia",
    icon: oesia,
    iconBg: "#383E56",
    date: "Septiembre 2023 - Actualidad",
    points: [
      "Rol de Team Leader con el objetivo de impulsar mejoras significativas en el desarrollo de proyectos, elevar la calidad de nuestros productos y brindar mentoría a mis compañeros. ",
      "Migración del proyecto existente a un proyecto nuevo con arquitectura hexagonal, Typescript, patrones de diseño y principios SOLID.",
      "Participar en revisiones de código y proporcionar retroalimentación constructiva a otros desarrolladores.",
    ],
  },
  {
    title: "Senior React Developer",
    company_name: "BigBuy",
    icon: bigbuy,
    iconBg: "#E6DEDD",
    date: "Septiembre 2021 - Febrero 2023",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web utilizando React, Next y otras tecnologías relacionadas.",
      "Además, realizamos una librería de componentes con storybook y vite para que ux pudiese los diferentes componentes que publicábamos.",
      "Desarrollamos un panel de control para los que los usuarios pudiesen acceder a su intranet y comprar diferentes paquetes que se le ofrecían.",
      "Realizábamos pruebas unitarias con React Testing Library con Jest y E2E con cypress.",
      "Colaboración con equipos multifuncionales, incluyendo diseñadores, gerentes de productos y otros desarrolladores, para crear productos de alta calidad.",
    ],
  },
  {
    title: "Senior React Developer",
    company_name: "Idrica",
    icon: idrica,
    iconBg: "#383E56",
    date: "Diciembre 2020 - Septiembre 2021",
    points: [
      "Durante mi tiempo en Idrica, trabajé en dos equipos amplios donde cada desarrollador colaboraba con un desarrollador backend, permitiéndonos trabajar en paralelo bajo la metodología ágil de SCRUM.",
      "Nos dedicamos al desarrollo de varios proyectos utilizando componentes funcionales con hooks, redux, Typescript, vite, sass y mixins para temas variados en las aplicaciones.",
      "También nos enfrentamos al desafío de reconstruir un proyecto que inicialmente estaba basado en componentes de clase, optando por rehacerlo con componentes funcionales en Typescript y aplicando los principios SOLID. Las llamadas al backend se realizaban tanto a través de API Rest como GraphQL.",
      "Realizamos pruebas unitarias con React Testing Library y pruebas E2E con Cypress.",
      "Además, creamos una biblioteca de componentes con Storybook para reutilizar elementos y validar los diseños de UX diseñados en Figma.",
      "Finalmente, desarrollamos otras bibliotecas para su uso en varios proyectos y para otros equipos dentro de la empresa.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Global Omnium",
    icon: global,
    iconBg: "#E6DEDD",
    date: "Marzo 2018 - Diciembre 2020",
    points: [
      "Durante este período, formé parte del equipo llamado Axis, donde asumí el desafío de aprender GIS (Sistemas de Información Geográfica). Para ello, completé un curso de GIS ofrecido por la Universidad Politécnica y adquirí habilidades en el uso de la herramienta QGIS.",
      "Investición de diferentes frameworks, entre los cuales incluyen OpenLayers, Leaflet, Mapbox y Deck.gl, para el desarrollo de los proyectos.",
      "Desarrollo de diferentes aplicaciones con mapbox para la creación de mapas de forma muy intuitiva y añadir tanto capas del GeoServer de Aguas de Valencia como externas y publicarlas a nivel interno o externo.",
      "Implemención de un diseño adaptable que garantizase la compatibilidad entre navegadores.",
      "Trabajar en la metodología Kanban",
    ],
  },
];

import avantio from "@/assets/projects/avantio.png";
import chatsoketio from "@/assets/projects/chat-socket.io.png";
import dashboard from "@/assets/projects/dashboard.png";
import ecommerce from "@/assets/projects/ecommerce.png";
import mapboxapp from "@/assets/projects/mapboxapp.png";
import netflix from "@/assets/projects/netflix.png";
import podcast from "@/assets/projects/podcast.png";


export interface Project {
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
}

export interface Tag {
  name: string;
  color: string;
}

export const projects: Project[] = [
  {
    name: "Cliente Netflix",
    description:
      "Catálogo de películas basado en el diseño de Netflix en el que se cargan películas.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Unit Tests & E2E",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/jadelmag/netflix-client",
  },
  {
    name: "Ecommerce",
    description:
      "Ejemplo de Ecommerce con pruebas unitarias con react testing library y cypress.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Unit Tests & E2E",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/jadelmag/react-ecommerce",
  },
  {
    name: "Podcast",
    description:
      "Prueba técnica Senior para reproducir podcasts usando la api de itunes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Unit Tests & E2E",
        color: "pink-text-gradient",
      },
    ],
    image: podcast,
    source_code_link: "https://github.com/jadelmag/podcastexercise",
  },
  {
    name: "Avantio",
    description:
      "Prueba técnica Senior para Avantio. Es una simple aplicación para reservar un apartamento y que al compilar genere un WebComponent.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Unit Tests & E2E",
        color: "pink-text-gradient",
      },
    ],
    image: avantio,
    source_code_link: "https://github.com/jadelmag/podcastexercise",
  },
  {
    name: "Chat Socket.io",
    description:
      "Chat con el mismo comportamiento que whatsapp pero usando Socket.io.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Unit Tests & E2E",
        color: "pink-text-gradient",
      },
    ],
    image: chatsoketio,
    source_code_link: "https://github.com/jadelmag/ChatSocketioClient",
  },
  {
    name: "Dashboard",
    description: "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Unit Tests & E2E",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/jadelmag/dashboard",
  },
  {
    name: "MapBox App",
    description: "Aplicación de cálculo de rutas mediante el buscador de calles.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Unit Tests & E2E",
        color: "pink-text-gradient",
      },
    ],
    image: mapboxapp,
    source_code_link: "https://github.com/jadelmag/mapsApp",
  },
];

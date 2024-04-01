export interface Navlink {
  id: string;
  title: string;
  pos: number;
}

export const navLinks: Navlink[] = [
  {
    id: "init",
    title: "Prensentación",
    pos: 0,
  },
  {
    id: "description",
    title: "Descripción",
    pos: 1,
  },
  {
    id: "work",
    title: "Experiencia",
    pos: 2,
  },
  {
    id: "mapbox",
    title: "Mapbox",
    pos: 3,
  },
  {
    id: "projects",
    title: "Proyectos",
    pos: 4,
  },
  {
    id: "contact",
    title: "Contactar",
    pos: 5,
  }
];

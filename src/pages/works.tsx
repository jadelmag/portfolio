import { motion } from "framer-motion";
import { RefObject } from "react";
import ProjectCard from "../components/projectcard";
import { Project, projects } from "../constants/projects.constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

interface WorksProps {
  worksRef: RefObject<HTMLDivElement>;
}

const Works: React.FC<WorksProps> = ({ worksRef }) => {
  return (
    <div
      ref={worksRef}
      className="w-full flex flex-col justify-center text-center mt-20"
    >
      <motion.div variants={textVariant(0)}>
        <p className={`${styles.sectionSubText} `}>Mi Trabajo</p>
        <h2 className={`${styles.sectionHeadText}`}>Proyectos</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl mx-auto text-secondary text-[17px] w-full leading-[30px] text-justify p-5"
      >
        Los siguientes proyectos muestran mis habilidades y experiencia a través
        de ejemplos de mi trabajo del mundo real. Cada proyecto se describe
        brevemente con enlaces a repositorios de código y demostraciones en
        vivo. Refleja mi capacidad para resolver problemas complejos, trabajar
        con diferentes tecnologías y gestionar proyectos de forma eficaz.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project: Project, index: number) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            name={project.name}
            description={project.description}
            tags={project.tags}
            image={project.image}
            source_code_link={project.source_code_link}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;

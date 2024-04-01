import { RefObject } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "../components/experiencecard";
import { Experience, experiences } from "../constants/experiences.constants";
import { styles } from "../styles";

interface ExperienceProps {
  experienceRef: RefObject<HTMLDivElement>;
}

const Experience: React.FC<ExperienceProps> = ({ experienceRef }) => {
  return (
    <div ref={experienceRef} className="mt-20">
      <div>
        <p className={`${styles.sectionSubText} text-center`}>
          Lo que he hecho hasta ahora
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experiencia con React
        </h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience: Experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              title={experience.title}
              company_name={experience.company_name}
              icon={experience.icon}
              iconBg={experience.iconBg}
              date={experience.date}
              points={experience.points}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;

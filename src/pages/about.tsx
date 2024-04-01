import jadelmag from "@/assets/me/me2.png";
import { about } from "@/constants/description.constants";
import { styles } from "@/styles";
import { RefObject } from "react";

interface AboutProps {
  aboutRef: RefObject<HTMLDivElement>;
}

const About: React.FC<AboutProps> = ({ aboutRef }: AboutProps) => {
  return (
    <div
      ref={aboutRef}
      className="w-full flex flex-col justify-center text-center mt-20"
    >
      <div>
        <p className={styles.sectionSubText}>Introducción</p>
        <h2 className={styles.sectionHeadText}>Descripción general</h2>
      </div>
      <p className="mt-4 max-w-3xl mx-auto text-secondary text-[17px] w-full leading-[30px] text-justify p-5">
        {about.introduction} <br className="sm:block hidden" />
        {about.skills} <br className="sm:block hidden" />
        {about.client} <br className="sm:block hidden" />
      </p>
      <p className="text-secondary">{about.end}</p>{" "}
      <br className="sm:block hidden" />
      <p className="mt-4 max-w-3xl mx-auto">
        <img className="rounded-full" src={jadelmag} alt="me" />
      </p>
    </div>
  );
};

export default About;

import Mouse from "@/components/mouse";
import { Technology, technologies } from "@/constants/technologies.constants";
import { styles } from "@/styles";
import { calculateYearsWorked } from "@/utils/functions";
import { RefObject } from "react";

interface HomeProps {
  homeRef: RefObject<HTMLDivElement>;
}

const Home: React.FC<HomeProps> = ({ homeRef }) => {
  return (
    <section ref={homeRef} className={`relative w-full h-[800px] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hola, soy <span className="text-[#915EFF]">Javier</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {`+${calculateYearsWorked()}`} Años de experiencia como
            desarrollador frontend.
            <br className="sm:block hidden" />
            Realizo aplicaciones backend con Node y Express.
            <br className="sm:block hidden" />
            Tengo un amplio conocimiento en GIS y su desarrollo mediante
            OpenLayers y Mapbox.
            <br className="sm:block hidden" />
          </p>

          <div className="mt-7 flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology: Technology) => (
              <div
                className="transition duration-300 hover:transform hover:scale-150 hover:rounded-full hover:bg-opacity-40 hover:bg-white w-14 h-14"
                key={technology.name}
              >
                <img src={technology.icon} alt={technology.name} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Mouse />
    </section>
  );
};

export default Home;

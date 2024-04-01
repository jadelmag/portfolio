import StarsCanvas from "@/components/canvas/stars";
import MapBox from "@/components/mapbox/mapbox";
import Navbar from "@/components/navbar";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Experience from "@/pages/experience";
import Home from "@/pages/home";
import Works from "@/pages/works";
import { RefObject, useRef } from "react";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const homeRef: RefObject<HTMLDivElement> = useRef(null);
  const aboutRef: RefObject<HTMLDivElement> = useRef(null);
  const experienceRef: RefObject<HTMLDivElement> = useRef(null);
  const mapboxRef: RefObject<HTMLDivElement> = useRef(null);
  const worksRef: RefObject<HTMLDivElement> = useRef(null);
  const contactRef: RefObject<HTMLDivElement> = useRef(null);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-pattern bg-cover bg-no-repeat bg-center">
          <Navbar
            refs={[
              homeRef,
              aboutRef,
              experienceRef,
              mapboxRef,
              worksRef,
              contactRef,
            ]}
          />
          <Home homeRef={homeRef} />
        </div>
        <About aboutRef={aboutRef} />
        <Experience experienceRef={experienceRef} />
        <MapBox mapboxRef={mapboxRef} />
        <Works worksRef={worksRef} />
        <div className="relative z-0">
          <Contact contactRef={contactRef} />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

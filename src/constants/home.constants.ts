
interface Home {
    name: string;
    description: string;
}

export const home: Home = {
    name: `Hola, soy<span className="text-[#915EFF]">Javier</span>`,
    description: `Soy desarrollador frontend, 
    trabajo con <span className="text-[#915EFF]">React</span>, 
    <span className="text-[#915EFF]">Angular</span> y 
    <span className="text-[#915EFF]">Vue</span>.<br className="sm:block hidden" /> 
    Además, desarrollo aplicaciones backend con node y express. <br className="sm:block hidden" />
    Tengo un amplio conocimiento en <span className="text-[#915EFF]">Gis</span> y desarrollo aplicaciones usando 
    tanto <span className="text-[#915EFF]">OpenLayers</span>, 
    <span className="text-[#915EFF]">Leaflet</span> y 
    sobre todo <span className="text-[#915EFF]">Mapbox</span>.<br className="sm:block hidden" />`,
};

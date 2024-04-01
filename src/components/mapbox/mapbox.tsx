import Overlay from "@/components/mapbox/mapbox-overlay";
import { MAPBOX_TOKEN } from "@/tokens/mapbox.token";
import mapboxgl from "mapbox-gl";
import { LegacyRef, useCallback, useEffect, useState } from "react";
import "./mapbox.css";

mapboxgl.accessToken = MAPBOX_TOKEN;

interface MapBoxProps {
  mapboxRef: LegacyRef<HTMLDivElement>;
}

const MapBox: React.FC<MapBoxProps> = ({ mapboxRef }) => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  const addLine = useCallback((map: mapboxgl.Map) => {
    map.on("style.load", () => {
      map.addSource("line", {
        type: "geojson",
        lineMetrics: true,
        data: {
          type: "LineString",
          coordinates: [
            [2.293389857555951, 48.85896319631851],
            [2.2890810326441624, 48.86174223718291],
          ],
        },
      });

      map.addLayer({
        id: "line",
        source: "line",
        type: "line",
        paint: {
          "line-width": 12,
          "line-emissive-strength": 0.8,
          "line-gradient": [
            "interpolate",
            ["linear"],
            ["line-progress"],
            0,
            "red",
            1,
            "blue",
          ],
        },
      });
    });
  }, []);

  const addControls = (map: mapboxgl.Map) => {
    map.addControl(new mapboxgl.NavigationControl());
  };

  useEffect(() => {
    if (map) return;
    const newMap = new mapboxgl.Map({
      style: "mapbox://styles/mapbox/standard",
      container: "map",
      center: [2.2932, 48.86069],
      zoom: 15.1,
      pitch: 62,
      bearing: -20,
    });
    addLine(newMap);
    addControls(newMap);
    setMap(newMap);
  }, [addLine, map]);

  return (
    <div ref={mapboxRef} className={`relative w-full h-full mx-auto m-10`}>
      <div id="map" className="map-container" />
      {map && <Overlay map={map} />}
    </div>
  );
};

export default MapBox;

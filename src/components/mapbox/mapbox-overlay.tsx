import { useEffect, useState } from "react";
import { close } from "../../assets";
import "./mapbox-overlay.css";
import { DEFAULT_TIME } from "./mapbox.constants";

interface OverlayProps {
  map: mapboxgl.Map;
}

const Overlay: React.FC<OverlayProps> = ({ map }) => {
  const [show, setShow] = useState<boolean>(true);
  const [light, setLight] = useState<string>("dusk");
  const [options, setOptions] = useState({
    showPlaceLabels: true,
    showPointOfInterestLabels: true,
    showRoadLabels: true,
    showTransitLabels: true,
  });

  const changeLight = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const {
      target: { value },
    } = event;
    map.setConfigProperty("basemap", "lightPreset", value);
    setLight(value);
  };

  const changeCheckboxOption = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const status = event.target.checked;
    const currentOptions = { ...options, [id]: status };
    setOptions(currentOptions);
    map.setConfigProperty("basemap", id, status);
  };

  const onHideMenu = () => {
    setShow(!show);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      map.setConfigProperty("basemap", "lightPreset", "dusk");
      clearTimeout(timeout);
    }, DEFAULT_TIME);
  }, [map]);

  return (
    <div className={`map-overlay top ${show ? "visible" : "hide"}`}>
      <img
        className={`map-overlay-close-icon ${show ? "left" : "right"}`}
        src={close}
        alt="close"
        onClick={onHideMenu}
      />
      <div className="map-overlay-inner">
        <fieldset className="select-fieldset">
          <label>Seleccionar luz</label>
          <select name="lightPreset" value={light} onChange={changeLight}>
            <option value="dawn">Amanecer</option>
            <option value="day">Día</option>
            <option value="dusk">Oscuridad</option>
            <option value="night">Noche</option>
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="showPlaceLabels">Mostrar etiquetas de lugares</label>
          <input
            type="checkbox"
            id="showPlaceLabels"
            checked={options.showPlaceLabels}
            onChange={(event) => changeCheckboxOption(event, "showPlaceLabels")}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="showPointOfInterestLabels">Mostrar POI</label>
          <input
            type="checkbox"
            id="showPointOfInterestLabels"
            checked={options.showPointOfInterestLabels}
            onChange={(event) =>
              changeCheckboxOption(event, "showPointOfInterestLabels")
            }
          />
        </fieldset>
        <fieldset>
          <label htmlFor="showRoadLabels">
            Mostrar etiquetas de carreteras
          </label>
          <input
            type="checkbox"
            id="showRoadLabels"
            checked={options.showRoadLabels}
            onChange={(event) => changeCheckboxOption(event, "showRoadLabels")}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="showTransitLabels">
            Mostrar etiquetas de tránsito
          </label>
          <input
            type="checkbox"
            id="showTransitLabels"
            checked={options.showTransitLabels}
            onChange={(event) =>
              changeCheckboxOption(event, "showTransitLabels")
            }
          />
        </fieldset>
      </div>
    </div>
  );
};

export default Overlay;

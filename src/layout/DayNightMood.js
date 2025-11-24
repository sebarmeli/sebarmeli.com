import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const DayNightMood = () => {
  const [night, setNight] = useState(true);
  const changeMood = () => {
    document.querySelector("body").classList.toggle("theme-light");
    setNight(!night);
  };
  return (
    <label className="color_switch" onClick={() => changeMood()}>
      <FontAwesomeIcon icon={night ? faMoon : faSun} />
    </label>
  );
};
export default DayNightMood;

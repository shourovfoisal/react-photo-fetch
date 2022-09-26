import "./DarkMode.css";
import "../../../Utils.css";

import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../../app/slices/darkMode";
import { adjustDim } from "../../../app/slices/ScrenDim";

export default function DarkMode({ mode }) {
  const isDarkModeOn = useSelector((state) => state.darkMode.status);
  const dispatch = useDispatch();
  const handleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const screenDimValue = useSelector((state) => state.screenDim.amount);
  const handleRangeChange = (e) => {
    dispatch(adjustDim(e.target.value));
  };

  let darkModeStyles = {
    boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
    color: "#fff",
    backgroundColor: "#2c3e50",
  };

  return (
    <div id="darkModeContainer">
      <div
        id="darkModeBox"
        style={isDarkModeOn ? darkModeStyles : {}}
        onClick={handleDarkMode}
      >
        {isDarkModeOn ? (
          <ion-icon name="partly-sunny-outline"></ion-icon>
        ) : (
          <ion-icon name="sunny-outline"></ion-icon>
        )}
      </div>
      <div id="dimRangeSlider">
        <input
          type="range"
          min="1"
          max="100"
          value={screenDimValue}
          onChange={handleRangeChange}
        ></input>
      </div>
    </div>
  );
}

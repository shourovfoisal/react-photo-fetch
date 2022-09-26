import "./NavItem.css";
import "../../../../Utils.css";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
// import { addItem, removeItem } from "../../../../app/slices/navItems";
import { addImages, removeImages } from "../../../../app/slices/handleImages";

export default function NavItem({ title, id, name, value, imgUrl }) {
  const dispatch = useDispatch();
  const isDarkModeOn = useSelector((state) => state.darkMode.status);
  const handleChange = async (e) => {
    // darkMode
    const bg = e.target.parentElement;
    if (isDarkModeOn) {
      bg.setAttribute("style", "background-color: #20aa84");
    } else {
      bg.setAttribute("style", "background-color: #55efc4");
    }

    if (e.target.checked) {
      // dispatch(addItem(e.target.value));
      try {
        let response = await axios.get(
          `https://api.pexels.com/v1/search?query=${e.target.value}`,
          {
            headers: {
              Authorization: `${process.env.REACT_APP_PEXELS_KEY}`,
            },
          }
        );
        response = response.data.photos;
        dispatch(addImages({ key: e.target.value, images: response }));
      } catch (error) {
        console.log(error);
      }
    } else {
      if (isDarkModeOn) {
        bg.setAttribute("style", "background-color: #57606f");
      } else {
        bg.setAttribute("style", "background-color: #f0f0f0");
      }
      // dispatch(removeItem(e.target.value));
      dispatch(removeImages({ key: e.target.value }));
    }
  };

  return (
    <div
      className="navItem"
      style={isDarkModeOn ? { backgroundColor: "#57606f" } : {}}
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onChange={(e) => handleChange(e)}
      />

      <label
        htmlFor={id}
        className={`navItemLabel ${isDarkModeOn ? "textLight" : "textDark"}`}
      >
        <div className="imageDiv">
          <img className="navItemImage" src={imgUrl} alt={name} />
        </div>
        {title}
      </label>
    </div>
  );
}

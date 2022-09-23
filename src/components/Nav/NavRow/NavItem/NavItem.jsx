import { useDispatch } from "react-redux";
// import { addItem, removeItem } from "../../../../app/slices/navItems";
import "../../../../Utils.css";
import "./NavItem.css";
import axios from "axios";
import { addImages, removeImages } from "../../../../app/slices/handleImages";

export default function NavItem({ title, id, name, value, imgUrl }) {
  const dispatch = useDispatch();
  const handleChange = async (e) => {
    const bg = e.target.parentElement;
    bg.setAttribute("style", "background-color: #55efc4");
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
      bg.setAttribute("style", "background-color: #f0f0f0");
      // dispatch(removeItem(e.target.value));
      dispatch(removeImages({ key: e.target.value }));
    }
  };
  return (
    <div className="navItem">
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onChange={(e) => handleChange(e)}
      />

      <label htmlFor={id} className="navItemLabel textDark">
        <div className="imageDiv">
          <img className="navItemImage" src={imgUrl} alt={name} />
        </div>
        {title}
      </label>
    </div>
  );
}

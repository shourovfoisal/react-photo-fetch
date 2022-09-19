import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../../../app/slices/navItems";
import "./NavItem.css";
import "../../../../Utils.css";

export default function NavItem({ title, id, name, value, imgUrl }) {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const bg = e.target.parentElement;
    if (e.target.checked) {
      dispatch(addItem(e.target.value));
      bg.setAttribute("style", "background-color: #55efc4");
    } else {
      dispatch(removeItem(e.target.value));
      bg.setAttribute("style", "background-color: #f0f0f0");
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

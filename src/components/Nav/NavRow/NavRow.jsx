import "../../../Utils.css";
import NavItem from "./NavItem/NavItem";
import { publicPathGenerator } from "../../../lib/publicPath";
export default function NavRow() {
  return (
    <form className="myRow">
      <NavItem
        title="Cats"
        id="cat1"
        name="cat"
        value="cat"
        imgUrl={publicPathGenerator("images/navThumbs/cat.jpg")}
      />
      <NavItem
        title="Dogs"
        id="dog1"
        name="dog"
        value="dog"
        imgUrl={publicPathGenerator("images/navThumbs/dog.jpg")}
      />
      <NavItem
        title="Birds"
        id="bird1"
        name="bird"
        value="bird"
        imgUrl={publicPathGenerator("images/navThumbs/bird.jpg")}
      />
      <NavItem
        title="Cars"
        id="car1"
        name="car"
        value="car"
        imgUrl={publicPathGenerator("images/navThumbs/car.jpg")}
      />
      <NavItem
        title="Fruits"
        id="fruit1"
        name="fruit"
        value="fruit"
        imgUrl={publicPathGenerator("images/navThumbs/fruit.jpg")}
      />
    </form>
  );
}

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
    </form>
  );
}

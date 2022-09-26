import "./Home.css";

import { useSelector } from "react-redux";

import Gallery from "../Gallery/Gallery";
import Nav from "../Nav/Nav";
import ExpandOverlay from "../ExpandOverlay/ExpandOverlay";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import DarkMode from "./DarkMode/DarkMode";
import DimLayer from "./DimLayer/DimLayer";

export default function Home() {
  const items = useSelector((state) => state.images.fetchedImages);
  const imageLink = useSelector((state) => state.expandImage.imageLink);
  const imageAlt = useSelector((state) => state.expandImage.imageAlt);

  const isDarkModeOn = useSelector((state) => state.darkMode.status);
  const screenDimAmount = useSelector((state) => state.screenDim.amount);

  return (
    <div
      className="home"
      style={isDarkModeOn ? { backgroundColor: "#2c3e50" } : {}}
    >
      <DimLayer amount={screenDimAmount} />
      <Nav />
      <DarkMode />
      <ScrollToTop />

      {items.length > 0 ? (
        <Gallery items={items} />
      ) : (
        <div
          className="noImages textDark"
          style={isDarkModeOn ? { color: "#fff" } : {}}
        >
          Please select an item.
        </div>
      )}

      {imageLink ? <ExpandOverlay image={imageLink} alt={imageAlt} /> : null}
    </div>
  );
}

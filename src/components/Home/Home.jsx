import "./Home.css";

import { useSelector } from "react-redux";

import Gallery from "../Gallery/Gallery";
import Nav from "../Nav/Nav";
import ExpandOverlay from "../ExpandOverlay/ExpandOverlay";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

export default function Home() {
  const items = useSelector((state) => state.images.fetchedImages);
  const imageLink = useSelector((state) => state.expandImage.imageLink);
  const imageAlt = useSelector((state) => state.expandImage.imageAlt);
  return (
    <div className="home">
      <Nav />
      {items.length > 0 ? (
        <Gallery items={items} />
      ) : (
        <div className="noImages textDark">Please select an item.</div>
      )}
      {imageLink ? <ExpandOverlay image={imageLink} alt={imageAlt} /> : null}
      <ScrollToTop />
    </div>
  );
}

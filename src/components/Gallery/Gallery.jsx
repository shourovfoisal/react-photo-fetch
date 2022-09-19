import "../../Utils.css";
import "./Gallery.css";

export default function Gallery({ children }) {
  return (
    <>
      {children.length > 0 ? (
        <div className="imageGallery">{children}</div>
      ) : (
        <div className="noImages textDark">Please select an item.</div>
      )}
    </>
  );
}

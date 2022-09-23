import { useDispatch } from "react-redux";
import { removeExpandImage } from "../../app/slices/expandImage";
import "./ExpandOverlay.css";

const ExpandOverlay = ({ image, alt }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(removeExpandImage());
  };

  return (
    <div className="expandOverlay" onClick={() => handleClose()}>
      <button className="closeButton">
        <ion-icon name="close-outline"></ion-icon>
      </button>
      <div
        className="expandImageBox"
        onClick={(event) => event.stopPropagation()}
      >
        <img src={image} alt={alt} />
      </div>
    </div>
  );
};

export default ExpandOverlay;

import { useDispatch } from "react-redux";
import { setExpandImage } from "../../app/slices/expandImage";
import { publicPathGenerator } from "../../lib/publicPath";
import "../../Utils.css";
import "./Gallery.css";

export default function Gallery({ items }) {
  const dispatch = useDispatch();

  const handleExpand = (e) => {
    // this function shows the high resolution image
    const imageType = e.target.parentElement.parentElement.dataset.imageType;
    const imageId = e.target.parentElement.parentElement.dataset.imageId;
    items.forEach((item) => {
      if (item.key === imageType) {
        const images = item.images;
        images.forEach((image) => {
          if (image.id.toString() === imageId) {
            dispatch(
              setExpandImage({
                imageLink: image.src.original,
                imageAlt: image.alt,
              })
            );
          }
        });
      }
    });
  };

  return (
    <div className="imageGallery">
      {items.map((item) =>
        item.images.map((image, index) => (
          <div
            key={image.id}
            className="imageBox fadeIn"
            style={{ animationDelay: `${(index % 10) * 0.1}s` }}
            data-image-type={item.key}
            data-image-id={image.id}
          >
            <div className="imageHolder">
              <img src={image.src.tiny} alt={image.alt} />
            </div>
            <div
              className="expandButton"
              onClick={(event) => handleExpand(event)}
            >
              <ion-icon name="expand-outline"></ion-icon>
            </div>
            <div className="captionCard">
              <div className="captionHolder">
                <a href={image.url}>{image.alt.substring(0, 40)}</a>
              </div>
              <div className="buttonHolder">
                <div className="leftButton">
                  <a href={image.url}>
                    <img
                      className="pexelsLogo"
                      src={publicPathGenerator(
                        "images/vendorLogos/pexels_logo.png"
                      )}
                      alt="pexels logo"
                    />
                  </a>
                </div>
                <div className="rightButton">
                  <a href={image.photographer_url}>
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <span>{image.photographer}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

import { publicPathGenerator } from "../../lib/publicPath";
import "../../Utils.css";
import "./Gallery.css";

export default function Gallery({ items }) {
  console.log(items);
  return (
    <div className="imageGallery">
      {items.map((item) =>
        item.images.map((image, index) => (
          // <img src={image.src.tiny} alt="" />
          <div
            key={image.id}
            className="imageBox fadeIn"
            style={{ animationDelay: `${(index % 10) * 0.1}s` }}
          >
            <div className="imageHolder">
              <img src={image.src.tiny} alt={image.alt} />
            </div>
            <div className="expandButton">
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
  // <>
  //   {children.length > 0 ? (
  //     <div className="imageGallery">{children}</div>
  //   ) : (
  //     <div className="noImages textDark">Please select an item.</div>
  //   )}
  // </>
}

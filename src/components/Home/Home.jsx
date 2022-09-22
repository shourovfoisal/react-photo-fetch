import "./Home.css";

import { useSelector } from "react-redux";

import Gallery from "../Gallery/Gallery";
import Nav from "../Nav/Nav";

export default function Home() {
  const items = useSelector((state) => state.images.fetchedImages);

  return (
    <div className="home">
      <Nav />
      {items.length > 0 ? (
        <Gallery items={items} />
      ) : (
        <div className="noImages textDark">Please select an item.</div>
      )}

      {/* {mainArray.map((item, index) => (
          <div
            key={index}
            className="imageBox fadeIn"
            style={{ animationDelay: `${(index % 10) * 0.1}s` }}
          >
            <div className="imageHolder">
              <img
                src="https://images.pexels.com/photos/13433015/pexels-photo-13433015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="expandButton">
              <ion-icon name="expand-outline"></ion-icon>
            </div>
            <div className="captionCard">
              <div className="captionHolder">
                <a href="https://www.google.com">
                  Lorem ipsum dolor sit amet consectetur
                </a>
              </div>
              <div className="buttonHolder">
                <div className="leftButton">
                  <a href="https://www.google.com">
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
                  <a href="https://www.google.com">
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <span>Person Name</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))} */}
      {/* {items.forEach((item) => {
          let imageList = item.images;
          imageList.map((image, index) => (
            <div
              key={image.id}
              className="imageBox fadeIn"
              style={{ animationDelay: `${(index % 10) * 0.1}s` }}
            >
              <div className="imageHolder">
                <img
                  src="https://images.pexels.com/photos/13433015/pexels-photo-13433015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="expandButton">
                <ion-icon name="expand-outline"></ion-icon>
              </div>
              <div className="captionCard">
                <div className="captionHolder">
                  <a href="https://www.google.com">
                    Lorem ipsum dolor sit amet consectetur
                  </a>
                </div>
                <div className="buttonHolder">
                  <div className="leftButton">
                    <a href="https://www.google.com">
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
                    <a href="https://www.google.com">
                      <ion-icon name="person-circle-outline"></ion-icon>
                      <span>Person Name</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ));
        })} */}
    </div>
  );
}

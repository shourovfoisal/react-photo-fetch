import "./Home.module.css";

import axios from "axios";

import { addImages } from "../../app/slices/getImages";
import { useSelector, useDispatch } from "react-redux";
import { publicPathGenerator } from "../../lib/publicPath";

import Gallery from "../Gallery/Gallery";
import Nav from "../Nav/Nav";

export default function Home() {
  const itemsList = useSelector((state) => state.navItems.selectedItemsList);
  const imageArray1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  const imageArray2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  let mainArray = [];
  if (itemsList.length === 1) {
    mainArray = [...imageArray1];
  } else if (itemsList.length === 2) {
    mainArray = [...imageArray2, ...imageArray1];
  }

  const dispatch = useDispatch();
  const handleFetch = async (item = "cat") => {
    try {
      let response = await axios.get(
        `https://api.pexels.com/v1/search?query=${item}`,
        {
          headers: {
            Authorization: `${process.env.REACT_APP_PEXELS_KEY}`,
          },
        }
      );
      response = response.data.photos;
      dispatch(addImages({ key: item, images: response }));
    } catch (error) {
      console.log(error);
    }
  };
  handleFetch();

  return (
    <div className="home">
      <Nav />
      <Gallery>
        {mainArray.map((item, index) => (
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
        ))}
      </Gallery>
    </div>
  );
}

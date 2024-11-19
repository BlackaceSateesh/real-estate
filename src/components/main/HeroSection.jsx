/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import highlightImg from "../../assets/main/highlightImg.png";
import ButtonMain from "../UI/ButtonMain";
import img1 from "../../assets/sliderImg/img1.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../../styles/heroSection/HeroSection.css";

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  const allSliderData = [
    {
      desc: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum felis, sed ullamcorper tempus faucibus in imperdiet.",
      img: img1,
    },
    {
      desc: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum felis, sed ullamcorper tempus faucibus in imperdiet.",
      img: img1,
    },
    {
      desc: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum felis, sed ullamcorper tempus faucibus in imperdiet.",
      img: img1,
    },
  ];
  const nextSlide = () => {
    const imgElement = document.querySelector(".carousel-image");
    imgElement.classList.add("fade");

    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % allSliderData.length);
    }, 500);

    setTimeout(() => {
      imgElement.classList.remove("fade");
    }, 500);
  };

  const prevSlide = () => {
    const imgElement = document.querySelector(".carousel-image");
    imgElement.classList.add("fade");

    setTimeout(() => {
      setIndex(
        (prevIndex) =>
          (prevIndex - 1 + allSliderData.length) % allSliderData.length
      );
    }, 500);

    setTimeout(() => {
      imgElement.classList.remove("fade");
    }, 500);
  };

  return (
    <div className="HeroSection sm-flex-column">
      <div className="section-left sm-flex-column">
        <div className="left">
          <div className="hltImg">
            <img src={highlightImg} alt="highlightImg" />
          </div>
          <div className="content">
            <h1 className="heading">Architecture Perfectionist</h1>
            <p className="para white">
              Welcome to a new beginning in a world of unparalleled luxury and
              comfort. Our real estate project, "Taj Township" is designed to
              elevate your living experience with an array of benefits and
              world-class amenities.
            </p>
            <ButtonMain name={"Let's Talk"} />
          </div>

          <div className="carousel-content">
            <span>Our Latest Project</span>
            <p className="para white">{allSliderData?.[index]?.desc}</p>
            <div className="carousel-ss-btns">
              <button className="carousel-control prev" onClick={prevSlide}>
                <IoIosArrowBack />
              </button>
              <button className="carousel-control next" onClick={nextSlide}>
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>

        {/* Custom Carousel Section */}
        <div className="right">
          <div className="carousel-body-wrapper">
            <img
              src={allSliderData?.[index]?.img}
              alt="carousel-slide"
              className="carousel-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

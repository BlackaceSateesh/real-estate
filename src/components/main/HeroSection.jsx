/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import highlightImg from "../../assets/main/highlightImg.png";
import ButtonMain from "../UI/ButtonMain";
import img1 from "../../assets/sliderImg/img1.png";
import { Carousel } from "react-bootstrap";
import "../../styles/heroSection/HeroSection.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const allSliderData = [
    {
      desc: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum felis, sed ullamcorper tempus faucibus in imperdiet. ",
      img: img1,
    },
    {
      desc: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum felis, sed ullamcorper tempus faucibus in imperdiet. ",
      img: img1,
    },
    {
      desc: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum felis, sed ullamcorper tempus faucibus in imperdiet. ",
      img: img1,
    },
  ];

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % allSliderData.length);
  };

  const prevSlide = () => {
    setIndex(
      (prevIndex) =>
        (prevIndex - 1 + allSliderData.length) % allSliderData.length
    );
  };
  return (
    <>
      <div className="HeroSection">
        <div className="section-left">
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
          <div className="right">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {allSliderData?.map((testimonial, idx) => (
                <Carousel.Item key={idx}>
                  <div className="body-wrapper">
                    <img src={testimonial?.img} alt="" />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

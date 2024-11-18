/* eslint-disable react/no-unescaped-entities */
import underlinePng from "../../assets/svg/underline.png";
import ImageSlider from "../main/ImageSlider";
import img1 from "../../assets/layout-section/img1.png";
import img2 from "../../assets/layout-section/img2.png";
import img3 from "../../assets/layout-section/img3.png";
import img4 from "../../assets/layout-section/img4.png";
import img5 from "../../assets/layout-section/img5.png";
import img6 from "../../assets/layout-section/img6.png";
import layoutMap from "../../assets/layout-section/layoutMap.png";
import "../../styles/planLayoutSection/PlanLayoutSection.css";
import { IoImageOutline, IoVideocamOutline } from "react-icons/io5";
import { Md360 } from "react-icons/md";
import { useEffect, useState } from "react";

const PlanLayoutSection = () => {
  const layoutData = {
    photos: [
      { src: img1 },
      { src: img2 },
      { src: img3 },
      { src: img4 },
      { src: img5 },
      { src: img6 },
    ],
    videos: [
      { src: "https://www.youtube.com/embed/rrhiFM6CvMk?si=OZUW0Mo-4vVfAKW_" },
      { src: "https://www.youtube.com/embed/6aGXr302-k4?si=j3_QoJ2j9x_btgL8" },
      { src: "https://www.youtube.com/embed/rrhiFM6CvMk?si=OZUW0Mo-4vVfAKW_" },
      { src: "https://www.youtube.com/embed/6aGXr302-k4?si=j3_QoJ2j9x_btgL8" },
    ],
    videos360: [
      { src: "https://www.youtube.com/embed/6aGXr302-k4?si=j3_QoJ2j9x_btgL8" },
      { src: "https://www.youtube.com/embed/rrhiFM6CvMk?si=OZUW0Mo-4vVfAKW_" },
      { src: "https://www.youtube.com/embed/rrhiFM6CvMk?si=OZUW0Mo-4vVfAKW_" },
      { src: "https://www.youtube.com/embed/rrhiFM6CvMk?si=OZUW0Mo-4vVfAKW_" },
    ],
  };

  const [activeTab, setActiveTab] = useState("photos");

  const tabHandler = (tab) => {
    setActiveTab(tab);
  };

  const getSliderData = () => {
    switch (activeTab) {
      case "photos":
        return layoutData.photos;
      case "videos":
        return layoutData.videos;
      case "videos360":
        return layoutData.videos360;
      default:
        return layoutData.photos;
    }
  };

  useEffect(() => {
    getSliderData();
  }, [activeTab]);

  return (
    <div className="PlanLayoutSection">
      <div className="section-inner">
        <div className="top-header">
          <span className="ylwTag">OUR GALLERY</span>
          <h4 className="heading2">Layouts Plan</h4>
          <p className="para">
            Smart Panning is not always about Grandeur, It's about creating the
            Grandeur by using Natural resources smartly
          </p>
          <div className="underline">
            <img src={underlinePng} alt="underline" />
          </div>
        </div>
        <div className="inner-wrapper">
          <div className="left">
            <ImageSlider data={getSliderData()} tab={activeTab} />
          </div>
          <div className="right">
            <div className="top-panel">
              <ul>
                <li>
                  <button
                    onClick={() => tabHandler("photos")}
                    className={`tab-btn ${
                      activeTab === "photos" ? "active" : ""
                    }`}
                  >
                    <IoImageOutline /> Photos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => tabHandler("videos")}
                    className={`tab-btn ${
                      activeTab === "videos" ? "active" : ""
                    }`}
                  >
                    <IoVideocamOutline /> Video
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => tabHandler("videos360")}
                    className={`tab-btn ${
                      activeTab === "videos360" ? "active" : ""
                    }`}
                  >
                    <Md360 /> 360 Video
                  </button>
                </li>
              </ul>
            </div>
            <div className="map-layout">
              <img src={layoutMap} alt="layoutMap" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanLayoutSection;

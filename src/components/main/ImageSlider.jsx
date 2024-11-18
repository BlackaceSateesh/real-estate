/* eslint-disable react/prop-types */
import { useState } from "react";

const getYouTubeThumbnailUrl = (url) => {
  const videoId = url.split("v=")[1]?.split("&")[0];
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

const ImageSlider = ({ data, tab }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="slider ImageSlider">
      <div className="slider__full-image">
        {tab === "photos" ? (
          <img
            src={data?.[currentIndex]?.src}
            className="slider__item-img"
            alt={`User Pic ${currentIndex + 1}`}
          />
        ) : (
          <iframe
            src={data?.[currentIndex]?.src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>

      <div className="slider__thumbnails">
        <ul className="slider__list">
          {data?.map((pic, index) => (
            <li
              key={index}
              className={`slider__thumbnail ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {tab === "photos" ? (
                <img src={pic?.src} alt={`Thumbnail ${index + 1}`} />
              ) : (
                <img
                  src={getYouTubeThumbnailUrl(pic?.src)}
                  alt={`Thumbnail ${index + 1}`}
                  className="video-thumbnail"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageSlider;

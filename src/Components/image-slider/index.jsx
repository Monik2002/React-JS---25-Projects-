import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

import PropTypes from "prop-types";

export default function ImageSlider({ url, limit }) {
  ImageSlider.propTypes = {
    url: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
  };
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const resp = await fetch(`${url}?_limit=${limit}`);
        const data = await resp.json();
        if (data) {
          setLoading(false);
          setImages(data);
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    if (url !== "" || undefined) {
      fetchImages();
    }
  }, [url, limit]);

  const handlePrev = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  if (loading) {
    return <div className="container">Loading...</div>;
  }
  if (error) {
    return <div className="container">{` Error Occurred - ${error}`}</div>;
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow left-arrow"
        onClick={handlePrev}
      />
      {images && images.length > 0
        ? images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.title}
              className={
                index === currentImage
                  ? "current-image active-image"
                  : "current-image inactive-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow right-arrow"
        onClick={handleNext}
      />
      <span className="circle-indicators">
        {images && images.length > 0
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  index === currentImage
                    ? "current-indicator active-circle"
                    : "current-indicator inactive-circle"
                }
                onClick={() => setCurrentImage(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

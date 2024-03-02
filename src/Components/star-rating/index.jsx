// Ask the interviewer how many stars he wants to display & if he wants to display half stars or not & if it comes as a prop or not.
import { useState } from "react";
import "./styles.css";
import { FaStar } from "react-icons/fa";

import PropTypes from "prop-types";

export default function StarRating({ numberOfStars }) {
  StarRating.propTypes = {
    numberOfStars: PropTypes.number.isRequired,
  };
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // explain why you are using this function to the interviewer
  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseMove = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {/* Using an underscore ("_") in the map function is a convention to indicate
      that you are intentionally ignoring the value provided by the map
      function. It's a way to signal to other developers (or yourself) that the
      value is not going to be used in the logic of the map callback function */}
      {[...Array(numberOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "non-active"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}

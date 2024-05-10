// import React from 'react'

import Accordian from "./Components/accordian";
// import RandomColors from "./Components/random-colors";
// import StarRating from "./Components/star-rating";
import "./App.css";
// import ImageSlider from "./Components/image-slider";

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      <Accordian />

      {/* Random Color Componenent*/}
      {/* <RandomColors /> */}

      {/* Star Rating Component */}
      {/* <StarRating numberOfStars={10} /> */}

      {/* Image Slider Component */}
      {/* <ImageSlider
        url="https://jsonplaceholder.typicode.com/photos"
        limit={10}
      /> */}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { ArrowContainer, Controls } from "../Slider/styles";
import { PhotoBlock } from "./styles";

const photosBefore = [
  require("./worksPhoto/before/1.jpeg"),
  require("./worksPhoto/before/2.jpeg"),
  require("./worksPhoto/before/3.jpeg"),
];

const photosAfter = [
  require("./worksPhoto/after/1.jpeg"),
  require("./worksPhoto/after/2.jpeg"),
  require("./worksPhoto/after/3.jpeg"),
];

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < photosBefore.length ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : photosBefore.length - 1
    );
  };

  return (
    <div className='main-content' id='works'>
      <h2>НАШІ РОБОТИ</h2>
      <div>
        <div>
          <h3>ДО / ПІСЛЯ</h3>
          <PhotoBlock>
            <img
              src={photosBefore[currentIndex]}
              alt={`Before Slide ${currentIndex + 1}`}
              loading='lazy'
            />
            <img
              src={photosAfter[currentIndex]}
              alt={`After Slide ${currentIndex + 1}`}
              loading='lazy'
            />
          </PhotoBlock>
        </div>
        <Controls>
          <ArrowContainer onClick={prevSlide}>
            <ArrowCircleLeftIcon />
          </ArrowContainer>
          <ArrowContainer onClick={nextSlide}>
            <ArrowCircleRightIcon />
          </ArrowContainer>
        </Controls>
      </div>
    </div>
  );
};

export default Works;

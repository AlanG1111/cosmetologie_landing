import React, { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import {
  ArrowContainer,
  Controls,
  Price,
  PriceBlock,
  PriceContainer,
  PriceElement,
  PriceTitle,
} from "./styles";

export interface Slide {
  title: string;
  content: [string, string][];
}

interface SliderProps {
  slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentSlide: Slide = slides[currentIndex];

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='slider'>
      <div className='slide'>
        <h3>{currentSlide.title}</h3>
        <PriceContainer>
          <PriceBlock>
            {currentSlide.content.map(([name, price], index) => (
              <PriceElement key={index}>
                <PriceTitle>{name}</PriceTitle>
                <Price>{price}</Price>
              </PriceElement>
            ))}
          </PriceBlock>
        </PriceContainer>
      </div>
      <Controls>
        <ArrowContainer onClick={handlePrevSlide}>
          <ArrowCircleLeftIcon />
        </ArrowContainer>
        <ArrowContainer onClick={handleNextSlide}>
          <ArrowCircleRightIcon />
        </ArrowContainer>
      </Controls>
    </div>
  );
};

export default Slider;

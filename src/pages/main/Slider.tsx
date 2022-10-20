import { SLIDER_INFO } from "constants/generalConstants";
import { useState, useEffect } from "react";
import {
  SliderContainer,
  SliderImage,
  SliderImageBlock,
  SliderStyled,
  SliderTitle,
} from "./Main.styled";

export const Slider: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(1);
  const [load, setLoad] = useState<boolean>(false);
  const nextSlide = (): void => {
    if (slideIndex !== SLIDER_INFO.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === SLIDER_INFO.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = (): void => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(SLIDER_INFO.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 100);
  }, []);

  return (
    <SliderStyled>
      <SliderContainer load={load}>
        {SLIDER_INFO.map((elem, index) => (
          <SliderImageBlock
            key={elem.name}
            slideIndex={slideIndex}
            index={index}
          >
            <SliderImage src={elem.img} alt="sliderImg" />
            <SliderTitle>{elem.name}</SliderTitle>
          </SliderImageBlock>
        ))}
      </SliderContainer>
    </SliderStyled>
  );
};

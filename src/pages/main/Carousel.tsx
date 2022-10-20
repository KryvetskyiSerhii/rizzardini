import { useSelector } from "react-redux";
import { useState, useEffect, Children, cloneElement } from "react";
import left from "assets/icons/arrows/left.svg";
import right from "assets/icons/arrows/right.svg";
import {
  ArrowImg,
  CarouselArrowLeft,
  CarouselArrowRight,
  CarouselBlock,
  CarouselContainer,
  CarouselDotImages,
  CarouselDotItem,
  CarouselDots,
  CarouselItemContainer,
  CarouselMilestoneText,
  CarouselWindow,
  SimpleBlock,
} from "./Main.styled";
import { MenuImage } from "pages/menu/Menu.styled";
import { SLIDER_INFO } from "../../constants/generalConstants";

export const Carousel: React.FC<any> = ({ children }) => {
  const PAGE_WIDTH = 850;
  const DOT_WIDTH = 103;
  const [dotOffset, setDotOffset] = useState(309);
  const [slideIndex, setSlideIndex] = useState(1);
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setPages(
      Children.map(children, (child) =>
        cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        })
      )
    );
  }, []);

  const handleLeftArrowClick = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
      setOffset((currentOffset) => {
        const newOffset = currentOffset + PAGE_WIDTH;
        return Math.min(newOffset, 0);
      });
      setDotOffset((currentOffset) => {
        const newOffset = currentOffset + DOT_WIDTH;
        return Math.min(newOffset, 0);
      });
    }
  };

  const handleRightArrowClick = () => {
    if (slideIndex !== SLIDER_INFO.length) {
      setSlideIndex(slideIndex + 1);
      setOffset((currentOffset) => {
        const newOffset = currentOffset - PAGE_WIDTH;
        const maxOffest = -(PAGE_WIDTH * (pages.length - 1));
        return Math.max(newOffset, maxOffest);
      });
      setDotOffset((currentOffset) => {
        const newOffset = currentOffset - DOT_WIDTH;
        const maxOffset = -(DOT_WIDTH * (pages.length - 1));
        return Math.max(newOffset, maxOffset);
      });
    }
  };
  const moveDot = (index: number) => {
    if (index > slideIndex) {
      setSlideIndex(index);
      setOffset((currentOffset) => {
        const newOffset = currentOffset - PAGE_WIDTH * (index - slideIndex);
        const maxOffest = -(PAGE_WIDTH * (pages.length - 1));
        return Math.max(newOffset, maxOffest);
      });
      setDotOffset((currentOffset) => {
        const newOffset = currentOffset - DOT_WIDTH * (index - slideIndex);
        const maxOffset = -(DOT_WIDTH * (pages.length - 1));
        return Math.max(newOffset, maxOffset);
      });
    } else {
      setSlideIndex(index);
      setOffset((currentOffset) => {
        const newOffset = currentOffset + PAGE_WIDTH * (slideIndex - index);
        return Math.min(newOffset, 0);
      });
      setDotOffset((currentOffset) => {
        const newOffset = currentOffset + DOT_WIDTH * (slideIndex - index);
        return Math.min(newOffset, 0);
      });
    }
  };

  return (
    <SimpleBlock>
      <CarouselBlock>
        <CarouselArrowLeft index={slideIndex} onClick={handleLeftArrowClick}>
          <ArrowImg src={left} alt="left" />
        </CarouselArrowLeft>
        <CarouselContainer>
          <CarouselWindow>
            <CarouselItemContainer
              style={{
                transform: `translateX(${offset}px)`,
              }}
            >
              {pages}
            </CarouselItemContainer>
          </CarouselWindow>
        </CarouselContainer>
        <CarouselArrowRight
          index={slideIndex}
          images={SLIDER_INFO}
          onClick={handleRightArrowClick}
        >
          <ArrowImg src={right} alt="right" />
        </CarouselArrowRight>
      </CarouselBlock>

      <CarouselDots
        style={{
          transform: `translateX(${dotOffset}px)`,
        }}
      >
        {SLIDER_INFO.map((elem, index) => (
          <CarouselDotImages
            src={elem.img}
            slideIndex={slideIndex}
            index={index}
            onClick={() => {
              moveDot(index + 1);
            }}
          >
            {/* <CarouselMilestoneText slideIndex={slideIndex} index={index}>
              {elem.name}
            </CarouselMilestoneText> */}
          </CarouselDotImages>
        ))}
      </CarouselDots>
    </SimpleBlock>
  );
};

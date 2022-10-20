import styled from "styled-components";
import { Link } from "react-router-dom";

interface PropsLoad {
  load?: boolean;
  lampLoad?: boolean;
  icon?: string;
  width?: string;
  height?: string;
}

interface Slider {
  name: string;
  img: string;
}

interface PropsIndex {
  index: number;
  slideIndex?: number;
  images?: Slider[];
}

interface PropsPos {
  top: string;
  left: string;
  scale?: string;
}

export const HeaderStyled = styled.div`
  height: 50px;
  padding: 10px 30px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 110;
  width: 100vw;
  border-bottom: 1px solid #fff;
  box-shadow: 1px 1px 1px #fff;
`;

export const HeaderNav = styled.nav`
  width: 20%;
`;

export const HeaderNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

export const HeaderNavListItem = styled.li``;

export const HeaderNavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  padding: 0px 5px;
  height: 30px;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 1px #fff;
  }
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const SliderStyled = styled.div`
  margin-top: -10px;
  position: relative;
`;

export const SliderContainer = styled.div<PropsLoad>`
  width: ${({ load }) => (load ? "100%" : "99%")};
  margin: 100px auto 0;
  position: relative;
  overflow: hidden;
  height: ${({ load }) => (load ? "80vh" : "79vh")};
  border-radius: 10px;
  box-shadow: 10px 10px 10px #000;
  transition: all 0.4s ease-in;
  opacity: ${({ load }) => (load ? "1" : "0.9")};
  z-index: 20;
  background: transparent;
`;

export const SliderImageBlock = styled.div<PropsIndex>`
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  position: absolute;
  opacity: ${({ slideIndex, index }) => (slideIndex === index + 1 ? "1" : "0")};
  transition: all 0.8s ease-in;
  background: transparent;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SldierText = styled.p`
  position: absolute;
  top: 100px;
  left: 250px;
  z-index: 10;
  color: #fff;
  font-size: 25px;
`;
export const SliderTitle = styled.h3`
  position: absolute;
  top: 20px;
  left: 35%;
  z-index: 10;
  font-size: 40px;
  color: #fff;
`;

export const SliderImage = styled.img``;

export const LampImage = styled.img<PropsLoad>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  visibility: ${({ lampLoad }) => (lampLoad ? "visibile" : "hidden")};
  z-index: 120;
  opacity: ${({ lampLoad }) => (lampLoad ? "1" : "0")};
  transition: all 1s ease-in;
`;

export const FooterStyled = styled.footer`
  width: 100%;
  color: #fff;
  padding: 20px;

  border-top: 1px solid #fff;
  margin-top: 40px;
  overflow: hidden;
`;

export const FooterStyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  margin: 0 auto;
`;

export const FooterText = styled.p`
  color: #fff;
  margin-bottom: 10px;
`;

export const FooterBlock = styled.div``;

export const FooterBlockItem = styled.div<PropsLoad>`
  width: 200px;
  padding-left: 32px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: -5px;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background: url(${({ icon }) => icon}) no-repeat;
    z-index: 4;
  }
`;

export const FooterBlockContactsItem = styled.div<PropsLoad>`
  width: 200px;
  padding-left: 27px;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: -1px;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background: url(${({ icon }) => icon}) no-repeat;
    z-index: 4;
  }
`;
export const FooterLink = styled.a`
  text-decoration: none;
  color: #fff;
`;

export const StarterImage = styled.img<PropsPos>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: 400px;
  height: 400px;
`;

export const StarterLogoImage = styled.img<PropsPos>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transform: ${({ scale }) => scale};
  width: 400px;
  height: 400px;
`;

export const StarterStyled = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

export const ContentStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 25px;
`;

export const ContentVideoBlock = styled.div`
  width: 45%;
  border-radius: 10px;
`;

export const ContentVideo = styled.video`
  width: 75%;
  height: 30vh;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #000;
`;

export const ContentRightBlock = styled.div`
  width: 50%;
  color: #fff;
  text-align: center;
  line-height: 25px;
`;

export const SimpleBlock = styled.div``;

export const CarouselArrowLeft = styled.div<PropsIndex>`
  opacity: ${({ index }) => (index === 1 ? "0" : "1")};
  cursor: pointer;
  &:focus {
    outline: none;
  }
  img {
    width: 50px;
  }
`;

export const CarouselArrowRight = styled.div<PropsIndex>`
  opacity: ${({ index, images }) => (index === images?.length ? "0" : "1")};
  cursor: pointer;
  &:focus {
    outline: none;
  }
  img {
    width: 50px;
  }
`;
export const CarouselBlock = styled.div`
  display: flex;
  align-items: center;
  &:focus {
    outline: none;
  }
`;

export const CarouselContainer = styled.div`
  margin: 100px auto 0px auto;
  height: 350px;
  width: 850px;
  &:focus {
    outline: none;
  }
`;

export const CarouselDotItem = styled.div<PropsIndex>`
  width: 15px;
  height: 15px;
  margin: 0 5px;
  cursor: pointer;
  background: #000;
  border-radius: 50%;
  border: ${({ slideIndex, index }) =>
    slideIndex === index + 1 ? "2px solid #fff" : "5px solid #fff"};
  &:not(:last-child) {
    margin-right: 170px;
  }
  &:focus {
    outline: none;
  }
`;
export const CarouselMilestoneText = styled.p<PropsIndex>`
  margin: 10px 0px 0px -30px;
  color: #000;
  width: 150px;
  font-size: ${({ slideIndex, index }) =>
    slideIndex === index + 1 ? "18px" : "16px"};
  font-weight: ${({ slideIndex, index }) =>
    slideIndex === index + 1 ? "600" : "400"};
  &:focus {
    outline: none;
  }
`;
export const CarouselDots = styled.div`
  margin: 30px auto 0px auto;
  display: flex;
  align-items: center;
  width: 150vw;
  background: transparent;
  border-radius: 20px;
  transition: translate;
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  &:focus {
    outline: none;
  }
`;

export const CarouselItemContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  transition: translate;
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  &:focus {
    outline: none;
  }
`;
export const CarouselWindow = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  &:focus {
    outline: none;
  }
`;
export const AboutUsItem = styled.div`
  img {
    width: 450px;
    height: 250px;
  }
`;

export const CarouselDotImages = styled.img<PropsIndex>`
  width: 100px;
  height: 100px;
  border: ${({ slideIndex, index }) =>
    slideIndex === index + 1 ? "4px solid #fff" : "1px solid #fff"};
  margin-right: 30px;
`;

export const ArrowImg = styled.img``;

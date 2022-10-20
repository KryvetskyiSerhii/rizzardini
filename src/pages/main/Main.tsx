import { Slider } from "./Slider";
import { useState, useEffect } from "react";
import { Lamp } from "./Lamp";
import { Starter } from "./Starter";
import { Content } from "./Content";
import { Carousel } from "./Carousel";
import { SLIDER_INFO } from "constants/generalConstants";
import { AboutUsItem } from "./Main.styled";
import { MenuImage } from "pages/menu/Menu.styled";

export const Main: React.FC = () => {
  const [lampLoad, setLampLoad] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLampLoad(false);
    }, 1500);
  });

  return (
    <>
      {/* <Lamp lampLoad={lampLoad} /> */}
      <Starter />
      <Content />
      <Slider />
      <Carousel>
        {SLIDER_INFO.map((elem) => (
          <AboutUsItem>
            <h3>{elem.name}</h3>
            <MenuImage src={elem.img} alt="carouselImg" />
          </AboutUsItem>
        ))}
      </Carousel>
    </>
  );
};

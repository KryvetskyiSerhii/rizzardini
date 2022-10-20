import { STARTER_IMAGES } from "constants/images";
import { StarterImage, StarterLogoImage, StarterStyled } from "./Main.styled";
import { useState } from "react";

export const Starter: React.FC = () => {
  const [waffelLeftPos, setWaffelLeftPos] = useState<string>("0");
  const [cupLeftPos, setCupLeftPos] = useState<string>("50vw");
  const [logoScale, setLogoScale] = useState<string>("scale(0)");
  window.addEventListener("scroll", () => {
    let value = window.scrollY;
    setWaffelLeftPos(0 + value * -0.2 + "%");
    setLogoScale("scale(" + (0.1 + value * 0.003) + ")");
    setCupLeftPos(55 + value * 0.2 + "%");
  });
  return (
    <StarterStyled>
      <StarterImage
        src={STARTER_IMAGES.waffel}
        top="20vh"
        left={waffelLeftPos}
      />
      <StarterImage src={STARTER_IMAGES.cup} top="20vh" left={cupLeftPos} />
      <StarterLogoImage
        src={STARTER_IMAGES.logo}
        top="50vh"
        left="30vw"
        scale={logoScale}
      />
    </StarterStyled>
  );
};

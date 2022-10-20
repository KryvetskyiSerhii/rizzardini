import { MenuImage, MenuImageBlcok } from "./Menu.styled";
import { useLayoutEffect, useRef, useState } from "react";

interface Props {
  image: string;
  delay?: number;
}

export const MenuItem: React.FC<Props> = ({ image }) => {
  const blockRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useLayoutEffect(() => {
    const topPos = blockRef.current.getBoundingClientRect().top;
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (topPos < scrollPos) setIsVisible(true);
    });
  });

  return (
    <MenuImageBlcok ref={blockRef} isVisible={isVisible}>
      <MenuImage src={image} />
    </MenuImageBlcok>
  );
};

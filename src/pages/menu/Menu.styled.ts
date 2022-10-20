import styled from "styled-components";

interface Props {
  isVisible: boolean;
}

export const MenuStyled = styled.div``;

export const MenuImageBlcok = styled.div<Props>`
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  transform: ${({ isVisible }) => (isVisible ? "scale(1)" : "scale(0)")};
  //   opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: 1s ease-in;
`;

export const MenuImage = styled.img`
  width: 90%;
  height: 70vh;
  margin: 80px;
  box-shadow: 5px 5px 5px #000;
  border-radius: 15px;
`;

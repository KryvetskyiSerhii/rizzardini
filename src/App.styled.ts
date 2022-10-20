import styled, { createGlobalStyle } from "styled-components";
import back from "assets/images/background/back.svg";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box; 
        background: url(${back});
        font-family: 'Playfair Display';
    }
    :: -webkit-scrollbar {
      width: .7em;
  }
  :: -webkit-scrollbar-track {
      background: url(${back});
      
  }
  :: -webkit-scrollbar-thumb {
      // background: url(${back});
      background: hsl(0 0% 100% / .5);
      border: .15em solid hsl(0 0% 20% / 1);
      border-radius: 100vw;
  }
  :: -webkit-scrollbar-thumb:hover {
      background: hsl(0 0% 100% / 1);
      border: .15em solid hsl(0 0% 20% / 1);
  }

 `;

export const AppContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  color: #fff;
  overflow: hidden;
`;

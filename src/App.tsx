import { AppContainer, GlobalStyle } from "App.styled";
import { Routing } from "./routing/Routing";
import { Header } from "pages/main/Header";
import { Footer } from "pages/main/Footer";

export const App: React.FC = () => {
  return (
    <>
      <AppContainer>
        <GlobalStyle />
        <Header />
        <Routing />
      </AppContainer>
      <Footer />
    </>
  );
};

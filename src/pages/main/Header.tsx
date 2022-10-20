import { NAV_LINKS } from "constants/generalConstants";
import {
  HeaderLink,
  HeaderNav,
  HeaderNavButton,
  HeaderNavList,
  HeaderNavListItem,
  HeaderStyled,
} from "./Main.styled";

export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <HeaderNav>
        <HeaderNavList>
          {NAV_LINKS.map((item) => (
            <HeaderNavListItem key={item.name}>
              <HeaderLink to={item.link}>
                <HeaderNavButton>{item.name}</HeaderNavButton>
              </HeaderLink>
            </HeaderNavListItem>
          ))}
        </HeaderNavList>
      </HeaderNav>
    </HeaderStyled>
  );
};

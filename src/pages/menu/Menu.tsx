import { MENU_ITEMS } from "constants/images";
import { MenuStyled } from "./Menu.styled";
import { MenuItem } from "./MenuItem";

export const Menu: React.FC = () => {
  return (
    <MenuStyled>
      {MENU_ITEMS.map((menu) => (
        <MenuItem image={menu} />
      ))}
    </MenuStyled>
  );
};

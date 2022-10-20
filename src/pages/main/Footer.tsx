import { FOOTER_CONTACTS } from "constants/generalConstants";
import { FOOTER_ICONS } from "constants/images";
import {
  FooterBlock,
  FooterBlockContactsItem,
  FooterBlockItem,
  FooterLink,
  FooterStyled,
  FooterStyledContainer,
  FooterText,
  HeaderLink,
} from "./Main.styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <FooterStyledContainer>
        <FooterBlock>
          <FooterText>EisCafe Rizzardini GmbH</FooterText>
          <FooterBlockItem
            icon={FOOTER_ICONS.location}
            width="35px"
            height="35px"
          >
            Bleichstrasse 3, 76593 Gernsbach
          </FooterBlockItem>
        </FooterBlock>
        <FooterBlock>
          {FOOTER_CONTACTS.map((contact) =>
            contact.link ? (
              <FooterLink href={contact.link}>
                <FooterBlockContactsItem
                  key={contact.text}
                  icon={contact.img}
                  width="20px"
                  height="20px"
                >
                  {contact.text}
                </FooterBlockContactsItem>{" "}
              </FooterLink>
            ) : (
              <FooterBlockContactsItem
                key={contact.text}
                icon={contact.img}
                width="20px"
                height="20px"
              >
                {contact.text}
              </FooterBlockContactsItem>
            )
          )}
        </FooterBlock>
      </FooterStyledContainer>
    </FooterStyled>
  );
};

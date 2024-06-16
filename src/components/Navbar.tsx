import React from "react";
import { useTranslation } from "react-i18next";
import {
  DivFlag,
  DivFlexColumn,
  DivFlexColumnLogo,
  DivFlexRowLng,
  DivFlexRowLogoContainer,
  LetterStyled,
  LinkA,
  NavItem,
  NavLink,
  NavList,
  NavbarContainer,
  NavbarWrapper,
} from "./NavbarStyled";

const Navbar: React.FC = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <DivFlexColumnLogo>
          <LinkA to={"/"}>
            <DivFlexRowLogoContainer>
              <LetterStyled>A</LetterStyled>
            </DivFlexRowLogoContainer>
          </LinkA>
        </DivFlexColumnLogo>

        <DivFlexColumn>
          <DivFlexRowLng>
            <DivFlag
              className="flag-icon flag-icon-gb"
              onClick={() => changeLanguage("en")}
            />

            <DivFlag
              className="flag-icon flag-icon-de"
              onClick={() => changeLanguage("de")}
            />
          </DivFlexRowLng>
          <NavList>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavItem>
          </NavList>
        </DivFlexColumn>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;

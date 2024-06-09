import React from "react";
import {
  DivFlexRowLogo,
  DivFlexRowLogoContainer,
  LetterStyled,
  LinkA,
  NavItem,
  NavLink,
  NavList,
  NavbarContainer,
} from "./NavbarStyled";

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <DivFlexRowLogo>
        <LinkA to={"/"}>
          <DivFlexRowLogoContainer>
            <LetterStyled>A</LetterStyled>
          </DivFlexRowLogoContainer>
        </LinkA>
      </DivFlexRowLogo>

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
    </NavbarContainer>
  );
};

export default Navbar;

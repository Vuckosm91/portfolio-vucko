import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const flipIn = keyframes`
  from {
    opacity: 0;
    transform: rotateY(-90deg);
  }
  to {
    opacity: 1;
    transform: rotateY(0);
  }
`;

export const TextColor = "#ADD8E6";

export const NavbarWrapper = styled.div`
display: flex;
width: 100%
height: auto;
justify-content: center;
align-items: center;
`;

export const NavbarContainer = styled.nav`
  background-color: #1a012e;
  border: 2px solid #0b3f42;
  border-radius: 1rem;
  padding: 8px 15px;
  margin-top: 1rem;
  display: flex;
  width: 50%;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s ease-in;
  &:hover {
    border: 2px solid #25cfdb;
  }

  @media (max-width: 600px) {
    width: 98%;
  }
`;

export const DivFlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DivFlexRowLogo = styled(DivFlexRow)`
  align-items: center;
`;

export const DivFlexRowLogoContainer = styled(DivFlexRowLogo)`
  animation: ${flipIn} 1s ease-in-out forwards;
  border: 2px solid #fff;
  padding-inline: 0.5rem;
  margin-left: 1rem;
  border-radius: 10rem;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  margin-right: 2rem;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 0 10px;
`;

export const NavLink = styled(Link)`
  color: ${TextColor};
  text-decoration: none;
  font-size: 1.2em;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }
`;

export const LinkA = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

export const Logo = styled.div`
  color: ${TextColor};
  margin-left: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
`;

export const LetterStyled = styled.h1`
  color: ${TextColor};
  margin: 0;
  font-size: 1.8rem;
  font-family: "Montserrat", sans-serif;
   transition: transform 0.8s ease-in-out;

   &:hover {
    transform: rotate(360deg);
`;

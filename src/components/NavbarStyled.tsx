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

export const NavbarContainer = styled.nav`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px 25px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 10px 0;
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
  gap: 2rem;
  padding: 0.5rem 1rem;
  animation: ${flipIn} 1s ease-in-out forwards;
  border: 2px solid #fff;
  border-radius: 10rem;
  @media (max-width: 768px) {
    padding: 0px 12px;
    margin-left: 10px;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
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
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LetterStyled = styled.h1`
  color: ${TextColor};
  margin: 0;
  font-size: 1.8rem;
  font-family: "Montserrat", sans-serif;
`;

import styled, { keyframes } from "styled-components";
import backgroundImage from "../images/developer-dark.svg";
import { TextColor } from "../components/NavbarStyled";

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const DivFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivRowHalf = styled(DivFlexColumn)`
  align-items: Start;
  justify-content: Start;
  width: 50%;
  height: 100%;
  animation: ${fadeInLeft} 1s ease-in-out forwards;
  padding-top: 10rem;
  padding-left: 5rem;
  padding-right: 5rem;
  @media (max-width: 768px) {
    width: auto;
    height: auto;
    padding-top: 2rem;
    padding-left: 0.2rem;
    padding-right: 0;
    margin-inline: 1rem;
  }
`;

export const DivRowHalfImage = styled.div`
  width: 50%;
  height: 100%;
  animation: ${fadeInRight} 1s ease-in-out forwards;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    width: 100%;
    height: 300px; /* ili neka druga visina koja odgovara */
  }
`;

export const TextStyledItalicL = styled.h1`
  color: ${TextColor};
  margin-left: 2rem;
  font-size: 2rem;
  font-weight: 600;
  font-family: "Georgia", serif;
  font-style: italic;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-left: 1rem;
  }
`;

export const TextStyledL = styled.h1`
  color: ${TextColor};
  margin-left: 2rem;
  font-size: 2rem;
  font-family: "Georgia", serif;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-left: 0;
  }
`;

export const TextStyledItalicM = styled(TextStyledItalicL)`
  font-size: 1.2rem;
`;

export const TextStyledM = styled(TextStyledL)`
  font-size: 1.2rem;
`;

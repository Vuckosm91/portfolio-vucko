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
  width: 100%;
  height: auto;
  gap: 1rem;
  overflow: hidden;
`;

export const DivFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivRowHalf = styled(DivFlexColumn)`
  align-items: Start;
  justify-content: Start;
  width: 65%;
  height: 100%;

  animation: ${fadeInLeft} 1s ease-in-out forwards;

  @media (min-width: 1081px) and (max-width: 1599px) {
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 1080px) {
    width: 90%;
    align-items: center;
  }
  @media (min-width: 1600px) {
    align-items: center;
  }
`;

export const DivFlexTextContainer = styled(DivFlexColumn)`
  display: flex;
  width: 90%;
  height: auto;
  align-items: start;

  @media (min-width: 1081px) and (max-width: 1599px) {
    padding: 2rem;
    width: 90%;
  }

  @media (min-width: 1600px) {
    padding: 2rem;
    width: 80%;
  }
`;

export const DivRowHalfImage = styled.div`
  display: flex;
  width: 30%;
  height: 80vh;
  animation: ${fadeInRight} 1s ease-in-out forwards;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 1599px) {
    display: none;
  }
`;

export const TextStyledM = styled.h1`
  color: ${TextColor};
  font-size: 1.5rem;
  line-height: 1.9rem;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1rem;
    padding-bottom: 2rem;
  }

  @media (min-width: 1600px) {
    font-weight: 600;
  }
`;

export const TextStyled_M_Italic = styled(TextStyledM)`
  font-style: italic;
`;

export const TextStyledL = styled.h1`
  color: ${TextColor};
  font-size: 3rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  @media (min-width: 1600px) {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const TextStyled_L_Italic = styled(TextStyledL)`
  font-style: italic;
`;

export const LinkToWeb = styled.a`
  color: #25cfdb;
`;

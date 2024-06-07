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
  gap: 1rem;
  overflow: hidden;
  @media (max-width: 1248px) {
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
  width: 65%;
  height: 100%;
  padding: 4rem;
  animation: ${fadeInLeft} 1s ease-in-out forwards;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1024px) {
    width: 80%;
    height: 100%;
    padding-top: 2rem;
  }
`;

export const DivFlexTextContainer = styled(DivFlexColumn)`
  display: flex;
  width: 100%;
  align-items: start;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }
`;

export const DivRowHalfImage = styled.div`
  display: flex;
  width: 30%;
  height: 80%;
  animation: ${fadeInRight} 1s ease-in-out forwards;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    width: 100%;
    height: 600px;
  }
  @media (max-width: 1248px) {
    width: 80%;
    height: 600px;
    margin-top: 12rem;
  }
`;

export const TextStyledM = styled.h1`
  color: ${TextColor};
  font-size: 1.5rem;
  line-height: 1.9rem;
  font-weight: 600;
  font-family: "Georgia", serif;
  font-style: italic;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-left: 1rem;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.6rem;
  }
`;

export const TextStyled_M_Italic = styled(TextStyledM)`
  font-style: italic;
`;

export const TextStyledL = styled.h1`
  color: ${TextColor};
  font-size: 3rem;
  font-family: "Georgia", serif;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const TextStyled_L_Italic = styled(TextStyledL)`
  font-style: italic;
`;

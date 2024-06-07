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
`;

export const DivRowHalfImage = styled.div`
  width: 50%;
  height: 100%;
  animation: ${fadeInRight} 1s ease-in-out forwards;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TextStyledItalicL = styled.h1`
  color: ${TextColor};
  margin-left: 2rem;
  font-size: 2rem;
  font-weight: 600;
  font-family: "Georgia", serif;
  font-style: italic;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* X-offset, Y-offset, blur, boja */
`;

export const TextStyledL = styled.h1`
  color: ${TextColor};
  margin-left: 2rem;
  font-size: 2rem;
  font-family: "Georgia", serif;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* X-offset, Y-offset, blur, boja */
`;

export const TextStyledItalicM = styled(TextStyledItalicL)`
  font-size: 1.8rem;
`;

export const TextStyledM = styled(TextStyledL)`
  font-size: 1.8rem;
`;

import styled from "styled-components";
import image from "../images/games-platform.png";

export const ProjectPageWrapp = styled.div`
  display: flex;
  justify-content: space-around;
  height: auto;
  width: 100%;
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const GamePlatformText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  height: auto;
  width: 50%;
  @media (max-width: 1080px) {
    width: 90%;
  }
`;

export const GamePlatformPicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  height: auto;
  width: 40%;
  @media (max-width: 1080px) {
    width: 90%;
  }
`;

export const GamePlatformPicText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  height: auto;
  width: 100%;
`;

export const GamePlatformPic = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  border: 1px solid green;
  background: url(${image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: start;
`;

export const StyledList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  color: #add8e6;
  font-family: "Arial", sans-serif;
  font-size: 1.2rem;
`;

export const ListItem = styled.li`
  margin-bottom: 0.5rem; /* Razmak između stavki u listi */
`;

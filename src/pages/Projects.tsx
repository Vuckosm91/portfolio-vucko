import image from "../images/games-platform.png";
import { LinkToWeb, TextStyledM } from "./HomeStyled";

import {
  GamePlatformPicText,
  GamePlatformPicWrapper,
  GamePlatformText,
  ListItem,
  ProjectPageWrapp,
  StyledList,
} from "./ProjectsStyled";

const Projects = () => {
  return (
    <ProjectPageWrapp>
      <GamePlatformText>
        <TextStyledM>Project Description</TextStyledM>
        <TextStyledM>
          This project is a comprehensive gaming platform where users can
          explore a wide variety of games fetched from a backend server. The
          platform provides robust filtering options allowing users to sort
          games by genre, platform, release year, title, and relevance.
          Additionally, users can search for specific game titles. Each game
          listed on the platform comes with detailed information including an
          average rating, supported platforms, and publisher details. When a
          user selects a game, they are taken to a dedicated page for that game,
          featuring a detailed description, screenshots, and a trailer (if
          available from the backend). This platform aims to enhance the gaming
          discovery experience by providing intuitive and user-friendly
          navigation and search capabilities, ensuring that users can find and
          learn about games that match their interests.
          <br />
          <br />
          <LinkToWeb
            href="https://game-hub-ruby-iota.vercel.app/"
            target="blank"
          >
            Try demo here
          </LinkToWeb>
        </TextStyledM>
      </GamePlatformText>
      <GamePlatformPicWrapper>
        <img src={image} />
        <GamePlatformPicText>
          <TextStyledM>What was used making this app:</TextStyledM>
          <StyledList>
            <ListItem>TSX (TypeScript XML)</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>Chakra UI</ListItem>
            <ListItem>ReactQuery</ListItem>
            <ListItem>Zustand (State managment)</ListItem>
            <ListItem>Vercel (deployment)</ListItem>
          </StyledList>
        </GamePlatformPicText>
      </GamePlatformPicWrapper>
    </ProjectPageWrapp>
  );
};

export default Projects;

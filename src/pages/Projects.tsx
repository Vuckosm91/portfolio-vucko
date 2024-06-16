import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <ProjectPageWrapp>
      <GamePlatformText>
        <TextStyledM>{t("projectHeadline")}</TextStyledM>
        <TextStyledM>
          {t("projectDescription")}
          <LinkToWeb
            href="https://game-hub-ruby-iota.vercel.app/"
            target="blank"
          >
            {t("demoTry")}
          </LinkToWeb>
        </TextStyledM>
      </GamePlatformText>
      <GamePlatformPicWrapper>
        <img src={image} />
        <GamePlatformPicText>
          <TextStyledM>{t("isUsed")}</TextStyledM>
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

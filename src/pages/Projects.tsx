import { useTranslation } from "react-i18next";
import image from "../images/games-platform.png";
import { LinkToApp, TextStyledM } from "./HomeStyled";

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
        <TextStyledM>{t("projectDescription1")}</TextStyledM>
        <TextStyledM>{t("projectDescription2")}</TextStyledM>
        <TextStyledM>{t("projectDescription3")}</TextStyledM>
        <TextStyledM>{t("projectDescription4")}</TextStyledM>
        <TextStyledM>{t("projectDescription5")}</TextStyledM>
        <LinkToApp href="https://game-hub-ruby-iota.vercel.app/" target="blank">
          {t("demoTry")}
        </LinkToApp>
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

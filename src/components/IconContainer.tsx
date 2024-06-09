import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiMysql,
  SiGit,
  SiBootstrap,
  SiMui,
} from "@icons-pack/react-simple-icons";
import {
  StyledIconHTML,
  StyledIconCss,
  StyledIconJs,
  StyledIconTs,
  StyledIconReact,
  StyledIconMySql,
  StyledIconGit,
  IconContainerWrap,
  StyledIconBootstrap,
  StyledIconMui,
} from "./IconContainerStyled";

const IconContainer = () => {
  return (
    <IconContainerWrap>
      <StyledIconHTML>
        <SiHtml5 />
      </StyledIconHTML>
      <StyledIconCss>
        <SiCss3 />
      </StyledIconCss>
      <StyledIconBootstrap>
        <SiBootstrap />
      </StyledIconBootstrap>
      <StyledIconJs>
        <SiJavascript />
      </StyledIconJs>
      <StyledIconTs>
        <SiTypescript />
      </StyledIconTs>
      <StyledIconReact>
        <SiReact />
      </StyledIconReact>
      <StyledIconMui>
        <SiMui />
      </StyledIconMui>
      <StyledIconMySql>
        <SiMysql />
      </StyledIconMySql>
      <StyledIconGit>
        <SiGit />
      </StyledIconGit>
    </IconContainerWrap>
  );
};

export default IconContainer;

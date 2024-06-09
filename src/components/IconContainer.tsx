import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiMysql,
  SiGit,
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
      <StyledIconJs>
        <SiJavascript />
      </StyledIconJs>
      <StyledIconTs>
        <SiTypescript />
      </StyledIconTs>
      <StyledIconReact>
        <SiReact />
      </StyledIconReact>
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

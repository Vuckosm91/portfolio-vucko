import { styled } from "styled-components";

export const IconContainerWrap = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
    grid-template-rows: repeat(2, auto); /* Dva reda automatske visine */
    grid-gap: 20px; /* Razmak između elemenata */
    justify-items: center;
    align-items: center;
  }
`;

export const StyledIconHTML = styled.div`
  margin: 10px;
  svg {
    width: 32px;
    height: 32px;
    fill: #e32619; /* Prilagodi boju po potrebi */
    &:hover {
      fill: #f06529; /* Hover boja */
    }
  }
`;

export const StyledIconCss = styled.div`
  margin: 10px;
  svg {
    width: 32px;
    height: 32px;
    fill: #194be3; /* Prilagodi boju po potrebi */
    &:hover {
      fill: #f06529; /* Hover boja */
    }
  }
`;
export const StyledIconJs = styled.div`
  margin: 10px;
  svg {
    width: 32px;
    height: 32px;
    fill: #e3dc19; /* Prilagodi boju po potrebi */
    &:hover {
      fill: #f06529; /* Hover boja */
    }
  }
`;
export const StyledIconTs = styled.div`
  margin: 10px;
  svg {
    width: 32px;
    height: 32px;
    fill: #083182; /* Prilagodi boju po potrebi */
    &:hover {
      fill: #f06529; /* Hover boja */
    }
  }
`;
export const StyledIconReact = styled.div`
  margin: 10px;
  svg {
    width: 32px;
    height: 32px;
    fill: #1cceed; /* Prilagodi boju po potrebi */
    &:hover {
      fill: #f06529; /* Hover boja */
    }
  }
`;
export const StyledIconMySql = styled.div`
  margin: 10px;
  svg {
    width: 32px;
    height: 32px;
    fill: #1196ad; /* Prilagodi boju po potrebi */
    &:hover {
      fill: #f06529; /* Hover boja */
    }
  }
`;
export const StyledIconGit = styled.div`
  margin: 10px;
  svg {
    width: 32px;
    height: 32px;
    fill: #db4125; /* Prilagodi boju po potrebi */
    &:hover {
      fill: #f06529; /* Hover boja */
    }
  }
`;

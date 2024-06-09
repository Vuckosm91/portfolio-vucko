import styled from "styled-components";

export const LayoutWrapper = styled.div`
  background-color: #010242;
  background-image: repeating-linear-gradient(
      45deg,
      #01022e,
      #01022e 10px,
      transparent 30px,
      transparent 20px
    ),
    repeating-linear-gradient(
      135deg,
      #01022e,
      #01022e 10px,
      transparent 10px,
      transparent 30px
    );
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

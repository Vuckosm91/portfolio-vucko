import styled from "styled-components";

export const LayoutWrapper = styled.div`
  background-color: #010224;
  background-image: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1) 10px,
    transparent 10px,
    transparent 20px
  );
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

import {
  DivFlexTextContainer,
  DivRowHalf,
  DivRowHalfImage,
  PageWrapper,
  TextStyledM,
  TextStyled_L_Italic,
} from "./HomeStyled";

const Home = () => {
  return (
    <PageWrapper>
      <DivRowHalf>
        <DivFlexTextContainer>
          <TextStyled_L_Italic>Hi, I'm Aleksandar</TextStyled_L_Italic>
          <TextStyledM>A React Developer & Design Enthusiast</TextStyledM>
          <TextStyledM>
            I embarked on my programming journey back in 2019, delving into
            various technologies and languages. Since the fall of 2022, I've
            been professionally engaged in frontend development using React,
            turning my passion into a career. I'm dedicated to crafting elegant
            and intuitive user interfaces that deliver exceptional user
            experiences.
          </TextStyledM>
        </DivFlexTextContainer>
      </DivRowHalf>
      <DivRowHalfImage />
    </PageWrapper>
  );
};

export default Home;

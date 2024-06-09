import IconContainer from "../components/IconContainer";
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
            My name is Aleksandar Vuckovic, and I have been living in Munich
            since 2016. I embarked on my journey into frontend development in
            2019, starting with learning HTML and CSS. With the help of
            Bootstrap, I began creating web pages and then proceeded to learn
            JavaScript. <br /> <br />I attended IT Academy, where I revisited
            the fundamentals of HTML, CSS, and JavaScript, and learned how to
            create databases using Wamp server, as well as performing queries on
            those databases. After completing the course, I continued to advance
            my skills independently, learning TypeScript, and soon after, I
            started working with ReactTS. <br /> <br />
            <IconContainer />
            <br /> By the end of 2022, I began my professional career as a
            ReactTS developer with DeltaDigit LLC, a company based in Novi Sad,
            Serbia, where I currently work remotely on a part-time basis. <br />
            <br /> On this page, you can also find a section dedicated to my
            projects, where you can view a demo application built with React.
            The project includes a detailed description of all the technologies
            and tools used in its development. This section aims to provide a
            comprehensive understanding of my capabilities and the extent of my
            expertise in creating modern, responsive web applications.
          </TextStyledM>
        </DivFlexTextContainer>
      </DivRowHalf>
      <DivRowHalfImage />
    </PageWrapper>
  );
};

export default Home;

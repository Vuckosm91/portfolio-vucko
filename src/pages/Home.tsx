import { useTranslation } from "react-i18next";
import {
  DivFlexTextContainer,
  DivRowHalf,
  DivRowHalfImage,
  LinkToWeb,
  PageWrapper,
  TextStyledM,
  TextStyled_L_Italic,
} from "./HomeStyled";

const Home = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <DivRowHalf>
        <DivFlexTextContainer>
          <TextStyled_L_Italic>{t("welcome")}</TextStyled_L_Italic>
          <TextStyledM>{t("welcome2")}</TextStyledM>

          <TextStyledM>{t("about1")}</TextStyledM>
          <TextStyledM>{t("about2")}</TextStyledM>
          <TextStyledM>
            {t("about3")}

            <LinkToWeb href="https://www.deltadigit.rs/" target="_blank">
              DeltaDigit LLC
            </LinkToWeb>

            {t("about4")}
          </TextStyledM>
          <TextStyledM>{t("about5")}</TextStyledM>
        </DivFlexTextContainer>
      </DivRowHalf>
      <DivRowHalfImage />
    </PageWrapper>
  );
};

export default Home;

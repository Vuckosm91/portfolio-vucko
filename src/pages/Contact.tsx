import {
  SiFacebook,
  SiGit,
  SiInstagram,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";
import ContactForm from "./ContactForm";
import {
  ContactIconContainerWrap,
  ContactPagePhoto,
  ContactPageSocial,
  ContactPageWrapp,
  ContactTextL,
  ContactTextM,
  LinkDownload,
} from "./ContactStyled";
import { IconContainerWrap } from "../components/IconContainerStyled";
import { LinkA } from "../components/NavbarStyled";
import cv from "../cv/Aleksandar_Vuckovic.pdf";

const Contact = () => {
  return (
    <>
      <ContactPageWrapp>
        <ContactPagePhoto />
        <ContactPageSocial>
          <ContactTextL>Contact Me</ContactTextL>
          <ContactTextM>I'll be glad to hear from You</ContactTextM>
          <ContactForm />
          <ContactIconContainerWrap>
            <LinkA
              to="https://www.facebook.com/share/dVg3aW9QaW7VY1DS/"
              target="blank"
            >
              <SiFacebook color="white" cursor="pointer" />
            </LinkA>

            <LinkA
              to="https://www.instagram.com/tavor_1mg_p.o?igsh=MTRwbWdrOWdzMGZzaQ=="
              target="blank"
            >
              <SiInstagram color="orange" cursor="pointer" />
            </LinkA>

            <LinkA to="https://github.com/Vuckosm91" target="blank">
              <SiGit color="gray" cursor="pointer" />
            </LinkA>

            <LinkA
              to="https://www.linkedin.com/in/vuckosm91?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="blank"
            >
              <SiLinkedin color="cyan" cursor="pointer" />
            </LinkA>
          </ContactIconContainerWrap>
          <ContactTextM>
            You can also download my CV{" "}
            <LinkDownload href={cv} download="Aleksandar_Vuckovic.pdf">
              here
            </LinkDownload>
          </ContactTextM>
        </ContactPageSocial>
      </ContactPageWrapp>
    </>
  );
};

export default Contact;

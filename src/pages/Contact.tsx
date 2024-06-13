import ContactForm from "./ContactForm";
import {
  ContactPagePhoto,
  ContactPageSocial,
  ContactPageWrapp,
  ContactTextL,
} from "./ContactStyled";

const Contact = () => {
  return (
    <>
      <ContactPageWrapp>
        <ContactPagePhoto />
        <ContactPageSocial>
          <ContactTextL>Contact Me</ContactTextL>
          <ContactForm />
        </ContactPageSocial>
      </ContactPageWrapp>
    </>
  );
};

export default Contact;

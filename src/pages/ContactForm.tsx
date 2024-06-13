import emailjs from "emailjs-com";
import React, { useRef } from "react";
import { ButtonContact, Form, Input, Label, Textarea } from "./ContactStyled";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_odkt2dg",
        "template_dfiwq2p",
        form.current!,
        "y2cmGGQ22pbZP7MNq"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <Label>Name</Label>
      <Input type="text" name="user_name" required />
      <Label>Email</Label>
      <Input type="email" name="user_email" required />
      <Label>Message</Label>
      <Textarea name="message" required />
      <ButtonContact type="submit">Send</ButtonContact>
    </Form>
  );
};

export default ContactForm;

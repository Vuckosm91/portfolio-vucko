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
      <Input
        type="text"
        name="user_name"
        placeholder="Enter Your Name"
        required
      />
      <Label>Email</Label>
      <Input
        type="email"
        name="user_email"
        placeholder="Enter Your Email"
        required
      />
      <Label>Message</Label>
      <Textarea name="message" placeholder="Write me a message" required />
      <ButtonContact type="submit">Send</ButtonContact>
    </Form>
  );
};

export default ContactForm;

import styled from "styled-components";
import image from "../images/WhatsApp Image 2024-06-14 at 04.23.22_f8500829.jpg";

export const ContactPageWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: 3rem;
  align-self: center;
`;

export const ContactPagePhoto = styled.div`
  width: 30%;
  height: 500px;
  border: 2px solid #fff;
  border-radius: 5px;
  background: url(${image});
  background-size: cover;
  background-position: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ContactPageSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 60%;
  height: 600px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

/* FORM */

export const ContactTextL = styled.h2`
  color: #fff;
  margin: 0;
`;

export const ContactTextM = styled.h3`
  color: #fff;
  margin: 0;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #131036;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 425px) {
    width: 80%;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #fff;
`;

export const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #131036;
  color: #fff;

    &:focus {
    outline: none;
    border-color: #007BFF;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    caret-color: #007BFF; /* Boja kursora */
`;

export const Textarea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #131036;
  color: #fff;

   &:focus {
    outline: none;
    border-color: #007BFF;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    caret-color: #007BFF; /* Boja kursora */
`;

export const ButtonContact = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const LinkDownload = styled.a`
  margin-inline: 0.3rem;
  color: cyan;
  font-size: 1.7rem;
`;

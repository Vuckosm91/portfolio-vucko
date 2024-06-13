import styled from "styled-components";
import image from "../images/238016289_10223445002491475_266834550084840426_n.jpg";

export const ContactPageWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  min-height: 100vh;
  border: 2px solid red;
  align-self: center;
`;

export const ContactPagePhoto = styled.div`
  width: 30%;
  height: 500px;
  border: 2px solid green;
  background: url(${image});
  background-size: cover;
  background-position: center;
`;

export const ContactPageSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 500px;
  border: 2px solid yellow;
`;

/* FORM */

export const ContactTextL = styled.h2`
  color: #fff;
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
`;

export const Label = styled.label`
  margin-bottom: 5px;
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

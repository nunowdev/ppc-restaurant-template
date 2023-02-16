import * as React from "react";
import { Container } from "@mui/material";
import { FormContainer, FormInput, FormQuestion } from "./style";

function Form() {
  return (
    <Container maxWidth="md">
      <FormContainer>
        <FormQuestion>
          <h1>Name</h1>
        </FormQuestion>
        <FormInput />
        <FormQuestion>
          <h1>Date</h1>
        </FormQuestion>
        <FormInput />
        <FormQuestion>
          <h1>Time</h1>
        </FormQuestion>
        <FormInput />
        <FormQuestion>
          <h1>Guests</h1>
        </FormQuestion>
        <FormInput />
        <FormQuestion>
          <h1>Email</h1>
        </FormQuestion>
        <FormInput />
        <img
          src="https://uploads-ssl.webflow.com/6239aa5f4b436d4a462801ea/623c3c50ae131130983ee232_book-button.png"
          alt=""
        />
      </FormContainer>
    </Container>
  );
}

export default Form;

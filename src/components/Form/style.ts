import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 450px;

  @media screen and (max-width: 640px) {
    margin-top: 600px;
    padding: 0px 40px;

    img {
      width: 70%;
      margin-top: 100px;
    }
  }
`;

export const FormQuestion = styled.div`
  width: 100%;
  display: flex;
  max-width: 640px;
  align-items: center;
  justify-content: flex-start;

  h1 {
    font-family: "Outfit", sans-serif;
    font-size: 24px;
    font-weight: 400;
    text-decoration: none;
    color: #b98529;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  max-width: 640px;
  padding: 8px 100px 8px 0rem;
  border-style: none none solid;
  border-width: 1px;
  border-color: #b98529;
  color: #b98529;
  font-size: 24px;
  background-color: hsla(0, 0%, 100%, 0);
  margin-bottom: 60px;
`;

import styled from "styled-components";

export const PromotionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 260px;
  position: relative;
  @media screen and (max-width: 767px) {
    img {
      width: 90%;
    }
  }
`;

export const PromotionText = styled.p`
  position: absolute;
  font-family: "Italiana", sans-serif;
  font-size: 85px;
  line-height: 1.3;
  font-weight: 400;
  text-align: center;
  top: 458px;
  @media screen and (max-width: 767px) {
    font-size: 60px;
    top: 200px;
  }
`;

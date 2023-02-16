import * as React from "react";
import { PromotionContainer, PromotionText } from "./style";

export function Promotion() {
  return (
    <PromotionContainer>
      <img
        src="https://uploads-ssl.webflow.com/6239aa5f4b436d4a462801ea/62b2efcc2bc46d1d48a60217_Jan%2021%20Beer%202%201.png"
        alt=""
      />
      <PromotionText>
        ENJOY A BEAUTIFULLY <br /> PREPARLD A LA CARTE <br /> OR TASTING MENU
        WITH <br /> MATCHING DRINKS <br /> FLIGHTS
      </PromotionText>
    </PromotionContainer>
  );
}

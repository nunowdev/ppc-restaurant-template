import { Container } from "@mui/material";
import * as React from "react";
import {
  HeroContainer,
  HeroCTAS,
  HeroDiscoverButton,
  HeroMainTitle,
  HeroPhoneNumber,
  HeroRestaurantAward,
} from "./style";

export function Hero() {
  return (
    <Container maxWidth="xl">
      <HeroContainer>
        <HeroMainTitle>Savannah best cocktail bar</HeroMainTitle>
        <HeroCTAS>
          <HeroDiscoverButton>DISCOVER MORE</HeroDiscoverButton>
          <HeroPhoneNumber>
            OR <span>222.400.111</span>
          </HeroPhoneNumber>
        </HeroCTAS>
        <HeroRestaurantAward>
          <img
            src="https://uploads-ssl.webflow.com/6239aa5f4b436d4a462801ea/6239b6e7ab9ba9814b1e61a0_Group%20916.png"
            alt=""
            className="hero_award"
          />
        </HeroRestaurantAward>
      </HeroContainer>
    </Container>
  );
}

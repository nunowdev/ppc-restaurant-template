import * as React from "react";
import Container from "@mui/material/Container";
import { AboutContainer, AboutLeft, AboutRight } from "./style";
import { HeroDiscoverButton } from "../Hero/style";

export function About() {
  return (
    <Container maxWidth="xl">
      <AboutContainer>
        <AboutLeft>
          <img
            src="https://uploads-ssl.webflow.com/6239aa5f4b436d4a462801ea/6239e5b044a52c5ac92354b0_1975_16_jwb%20(2)%202.png"
            alt=""
            className="first_image"
          />
          <img
            src="https://uploads-ssl.webflow.com/6239aa5f4b436d4a462801ea/6239e5c1c7ca789763a410a5_Event%20space_53_jwb%202.png"
            alt=""
            className="second_image"
          />
          <h2 className="since">Since 2010</h2>
          <h2 className="since_mobile">
            Since
            <br />
            <span className="year">2010</span>
          </h2>
        </AboutLeft>
        <AboutRight>
          <h2>About us</h2>
          <h1>Between Heaven & Heart</h1>
          <img
            src="https://uploads-ssl.webflow.com/6239aa5f4b436d4a462801ea/6239ec1d654f14d485078b3f_Line%201.png"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <HeroDiscoverButton>DISCOVER MORE</HeroDiscoverButton>
        </AboutRight>
      </AboutContainer>
    </Container>
  );
}

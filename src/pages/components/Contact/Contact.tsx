import * as React from "react";
import { HeroRestaurantAward } from "../Hero/style";
import Container from "@mui/material/Container";
import {
  ContactContainer,
  ContactLinks,
  ContactMainTitle,
  ContactUs,
  Copyright,
  CopyrightAndSocials,
  Detail,
  Details,
  Socials,
} from "./style";

function Contact() {
  return (
    <Container maxWidth="xl">
      <ContactContainer>
        <ContactUs>Contact Us</ContactUs>
        <ContactMainTitle>Don't be shy!</ContactMainTitle>
        <img
          src="https://uploads-ssl.webflow.com/6239aa5f4b436d4a462801ea/6239ec1d654f14d485078b3f_Line%201.png"
          alt=""
        />
        <Details>
          <Detail>
            <h1>Phone Number</h1>
            <p>222.400.111</p>
          </Detail>
          <Detail>
            <h1>Mail</h1>
            <p>info@ciciano.com</p>
          </Detail>
          <Detail>
            <h1>Address</h1>
            <p>BLVD.SAVANNAH</p>
          </Detail>
        </Details>
        <ContactLinks>
          <p>Privacy Policy</p>
          <p>Licensing</p>
          <p>Change log</p>
          <p>Style Guide</p>
        </ContactLinks>
        <CopyrightAndSocials>
          <Copyright>
            @Copyrights Reserved 2023 - Powered By Cloudinfo
          </Copyright>
          <HeroRestaurantAward
            id="restaurant_award"
            className="restaurant_award"
          >
            <img
              src="https://uploads-ssl.webflow.com/6239aa5f4b436d4a462801ea/6239b6e7ab9ba9814b1e61a0_Group%20916.png"
              alt=""
              className="contact_award"
            />
          </HeroRestaurantAward>
          <Socials>
            <img
              src="https://uploads-ssl.webflow.com/6239aa5f4b436d4a462801ea/623c43f9a48b9056997f68a4_facebook.svg"
              alt=""
            />
            <img
              src="https://uploads-ssl.webflow.com/6239aa5f4b436d4a462801ea/623c443c276e7c2a0e25eb15_instagram.svg"
              alt=""
            />
            <img
              src="https://uploads-ssl.webflow.com/6239aa5f4b436d4a462801ea/623c4448cd1e16b82a8e1758_linkedin.svg"
              alt=""
            />
            <img
              src="https://uploads-ssl.webflow.com/6239aa5f4b436d4a462801ea/623c4451a43a03374dffaa06_twitter.svg"
              alt=""
            />
          </Socials>
        </CopyrightAndSocials>
      </ContactContainer>
    </Container>
  );
}

export default Contact;

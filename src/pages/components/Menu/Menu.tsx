import * as React from "react";
import Container from "@mui/material/Container";
import { MenuContainer, MenuItem, MenuItems } from "./style";
import { HeroDiscoverButton } from "../Hero/style";

function Menu() {
  return (
    <Container maxWidth="xl">
      <MenuContainer>
        <h2>Our Menu</h2>
        <h1>The Divine Feel of Taste</h1>
        <img
          className="separator"
          src="https://uploads-ssl.webflow.com/6239aa5f4b436d4a462801ea/623b34b98895c6b45fd0fffe_Group%20911.png"
          alt=""
        />
        <MenuItems>
          <MenuItem>
            <img
              src="https://uploads-ssl.webflow.com/6239aa5f4b436d4a462801ea/623b36642ff0819d9295b3b5_Catch_Mussells%201%203.png"
              alt=""
            />
            <p>Brunch</p>
            <div className="menu_item_separator" />
          </MenuItem>
          <MenuItem>
            <img
              src="https://uploads-ssl.webflow.com/6239aa5f4b436d4a462801ea/623b37482dbe8da2cc1462a8_Scallops%203%203.png"
              alt=""
            />
            <p>Dinner</p>
            <div className="menu_item_separator" />
          </MenuItem>
          <MenuItem>
            <img
              src="https://uploads-ssl.webflow.com/6239aa5f4b436d4a462801ea/623b3757691d3a9d9d54347d_Jan%2021%20Red%20Wine%20Left%20Bank%20red%203.png"
              alt=""
            />
            <p>Drinks</p>
            <div className="menu_item_separator" />
          </MenuItem>
          <MenuItem>
            <img
              src="https://uploads-ssl.webflow.com/6239aa5f4b436d4a462801ea/623b37d496887a1437d24a35_wiskey%201.png"
              alt=""
            />
            <p>Whiskey</p>
            <div className="menu_item_separator" />
          </MenuItem>
        </MenuItems>
        <HeroDiscoverButton>BOOK A TABLE</HeroDiscoverButton>
      </MenuContainer>
    </Container>
  );
}

export default Menu;

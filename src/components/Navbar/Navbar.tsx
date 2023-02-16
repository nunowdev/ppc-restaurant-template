import { Container } from "@mui/system";
import gsap from "gsap";
import * as React from "react";
import {
  MenuItem,
  NavbarContainer,
  NavButton,
  NavigationMenu,
  NavItem,
  NavItems,
  OpenMenuButton,
} from "./style";

function Navbar() {
  const props = {
    navTitle: "ciciano",
    navItems: ["Home", "Gallery", "Menus", "Contact"],
    navButtonText: "BOOK A TABLE",
  };

  function openMenu() {
    gsap.to(".navigation_menu", { y: 0 });
    document.body.classList.add("body_class");
  }
  function closeMenu() {
    gsap.to(".navigation_menu", { y: "-100%" });
    document.body.classList.remove("body_class");
  }
  return (
    <Container maxWidth="xl">
      <NavigationMenu className="navigation_menu">
        <div className="close" onClick={() => closeMenu()}>
          <div className="small_circle" />
        </div>
        <MenuItem>Home</MenuItem>
        <MenuItem>Gallery</MenuItem>
        <MenuItem>Menus</MenuItem>
        <MenuItem>Contact</MenuItem>
      </NavigationMenu>
      <NavbarContainer>
        <img
          src="https://uploads-ssl.webflow.com/6239aa5f4b436d4a462801ea/6284f9a226d01c47f4233d65_ciciano.svg"
          alt=""
          className="nav_logo"
        />
        <NavItems>
          {props.navItems.map((item) => (
            <NavItem>{item}</NavItem>
          ))}
        </NavItems>
        <NavButton>{props.navButtonText}</NavButton>
        <OpenMenuButton onClick={() => openMenu()}>
          <div className="small_circle" />
        </OpenMenuButton>
      </NavbarContainer>
    </Container>
  );
}

export default Navbar;

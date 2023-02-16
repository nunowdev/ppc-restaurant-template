import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 35px;
  .nav_logo {
    width: 87px;
    height: 87px;
    cursor: pointer;
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  color: #fff;
  font-size: 14px;
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 200ms ease;
  :hover {
    opacity: 0.5;
    color: #d69227;
  }
`;

export const NavButton = styled.button`
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #875f20;
  font-family: "Outfit", sans-serif;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 991px) {
    display: none;
  }

  :hover {
    opacity: 0.5;
  }
`;

export const OpenMenuButton = styled.div`
  width: 50px;
  height: 50px;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #875f20;
  cursor: pointer;
  @media screen and (max-width: 991px) {
    display: flex;
  }
  .small_circle {
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
  }
`;

export const NavigationMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;
  width: 100vw;
  height: 100%;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  transform: translateY(-100%);
  .close {
    width: 50px;
    height: 50px;
    display: none;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: white;
    margin-top: 40px;
    margin-bottom: 100px;
    cursor: pointer;
    @media screen and (max-width: 991px) {
      display: flex;
    }
    .small_circle {
      width: 10px;
      height: 10px;
      background-color: #875f20;
      border-radius: 50%;
    }
  }
`;

export const MenuItem = styled.p`
  font-family: "Italiana", sans-serif;
  color: #b98529;
  font-size: 85px;
  text-decoration: none;
`;

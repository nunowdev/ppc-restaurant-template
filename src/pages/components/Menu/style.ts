import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-family: "Outfit", sans-serif;
    color: #875f20;
    font-size: 30px;
    line-height: 1.5;
    font-weight: 300;
    margin-bottom: 20px;
  }
  h1 {
    font-family: "Outfit", sans-serif;
    color: #fff;
    font-size: 50px;
    line-height: 1.3;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .separator {
    margin-bottom: 60px;
  }
`;

export const MenuItems = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const MenuItem = styled.div`
  width: 260px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 991px) {
    align-items: flex-start;
    margin-bottom: 50px;
  }
  img {
    width: 100%;
    height: 260px;
  }
  p {
    font-family: "Outfit", sans-serif;
    color: #fff;
    font-size: 22px;
    font-weight: 400;
    text-decoration: none;
    margin-bottom: 30px;
  }
  .menu_item_separator {
    width: 50%;
    border: 2px solid #b98529;
  }
`;

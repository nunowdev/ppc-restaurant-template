import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
`;

export const HeroMainTitle = styled.h1`
  font-family: "Italiana", sans-serif;
  color: #fff;
  font-size: 130px;
  line-height: 1.3;
  font-weight: 400;
  width: 60%;
  @media screen and (max-width: 479px) {
    font-size: 55px;
    width: 100%;
  }
`;

export const HeroCTAS = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 130px;
  @media screen and (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const HeroDiscoverButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 210px;
  height: 63px;
  background-color: #222e3b;
  padding: 16px 32px;
  border: 2px solid white;
  font-family: "Outfit", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  white-space: nowrap;
  margin-right: 20px;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    margin-bottom: 40px;
    margin-right: 0px;
  }
`;

export const HeroPhoneNumber = styled.p`
  font-family: "Outfit", sans-serif;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;

  span {
    transition: all 200ms ease;
    margin-left: 20px;
    cursor: pointer;
    :hover {
      opacity: 0.5;
    }
  }
`;

export const HeroRestaurantAward = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .hero_award {
    -webkit-animation: rotating 7s linear infinite;
    -moz-animation: rotating 7s linear infinite;
    -ms-animation: rotating 7s linear infinite;
    -o-animation: rotating 7s linear infinite;
    animation: rotating 7s linear infinite;
  }
`;

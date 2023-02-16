import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: 400px;
  position: relative;
  img {
    margin-bottom: 80px;
  }
`;

export const ContactUs = styled.h1`
  font-family: "Outfit", sans-serif;
  color: #875f20;
  font-size: 30px;
  line-height: 1.5;
  font-weight: 300;
  margin-bottom: 20px;
`;

export const ContactMainTitle = styled.h1`
  font-family: "Outfit", sans-serif;
  color: #fff;
  font-size: 50px;
  line-height: 1.5;
  font-weight: 300;
`;

export const Details = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Detail = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-family: "Outfit", sans-serif;
    font-size: 24px;
    font-weight: 400;
    text-decoration: none;
    color: #b98529;
    margin-bottom: 20px;
  }
  p {
    font-family: "Outfit", sans-serif;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    text-decoration: none;
    @media screen and (max-width: 640px) {
      margin-bottom: 20px;
    }
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 60px;
  flex-wrap: wrap;
  p {
    font-family: Outfit, sans-serif;
    color: #b98529;
    font-size: 18px;
    font-weight: 400;
    text-decoration: none;
    padding: 15px 15px 15px 0px;
    cursor: pointer;
  }
`;

export const CopyrightAndSocials = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  .restaurant_award {
    position: absolute;
    top: 0;
    .contact_award {
      -webkit-animation: rotating 7s linear infinite;
      -moz-animation: rotating 7s linear infinite;
      -ms-animation: rotating 7s linear infinite;
      -o-animation: rotating 7s linear infinite;
      animation: rotating 7s linear infinite;
      position: absolute;
      top: 0;
    }
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;
    .restaurant_award {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-top: 20px;
      .contact_award {
        -webkit-animation: rotating 7s linear infinite;
        -moz-animation: rotating 7s linear infinite;
        -ms-animation: rotating 7s linear infinite;
        -o-animation: rotating 7s linear infinite;
        animation: rotating 7s linear infinite;
        position: absolute;
        top: 0;
      }
      img {
        top: 75px;
        position: static;
      }
    }
  }
`;

export const Copyright = styled.p`
  font-family: "Outfit", sans-serif;
  color: #b98529;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 640px) {
    justify-content: space-between;
    width: 100%;
  }
  img {
    margin-right: 20px;
    margin-left: 10px;
  }
`;

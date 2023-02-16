import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 300px;
  @media screen and (max-width: 1180px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 100px;
  }
`;

export const AboutLeft = styled.div`
  width: 50%;
  position: relative;
  margin-top: 160px;

  .first_image {
    width: 230px;
    height: 346px;
    left: 0px;
    top: 120px;
    position: absolute;
    @media screen and (max-width: 1180px) {
      width: 170px;
      height: 270px;
    }
  }
  .second_image {
    width: 362px;
    height: 430px;
    left: 170px;
    top: -20px;
    position: absolute;
    @media screen and (max-width: 1180px) {
      left: 100px;
      width: 250px;
      height: 303px;
    }
  }
  .since {
    font-family: "Italiana", sans-serif;
    color: #b98529;
    font-size: 85px;
    font-weight: 400;
    line-height: 1.3%;
    position: absolute;
    left: 170px;
    top: 470px;
    display: block;
    @media screen and (max-width: 1180px) {
      left: 120px;
      font-size: 60px;
      width: 350px;
      top: 330px;
      overflow-wrap: initial;
      display: none;
    }
  }
  .since_mobile {
    font-family: "Italiana", sans-serif;
    color: #b98529;
    font-size: 85px;
    font-weight: 400;
    line-height: 1.3%;
    position: absolute;
    left: 170px;
    top: 470px;
    display: none;

    @media screen and (max-width: 1180px) {
      left: 120px;
      font-size: 60px;
      width: 350px;
      top: 330px;
      display: block;
      .year {
        position: absolute;
        margin-top: 50px;
      }
    }
  }
`;

export const AboutRight = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-top: 130px;

  @media screen and (max-width: 1180px) {
    margin-top: 400px;
    align-items: flex-start;
    width: 100%;
    justify-content: center;
  }
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
  p {
    font-family: "Outfit", sans-serif;
    color: #fff;
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 30px;
    line-height: 1.5;
    @media screen and (max-width: 1180px) {
      font-size: 18px;
    }
  }
  img {
    margin-bottom: 30px;
  }
`;

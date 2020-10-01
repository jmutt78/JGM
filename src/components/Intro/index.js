import React from "react";

import Profile from "../Images/Profile.js";
import Purple from "../../../assets/city.svg";
import justin from "../../images/JustinM.png";

import {
  Root,
  Container,
  Column,
  ImageContainer,
  SVGContainer
} from "./styles";

export default () => (
  <SVGContainer>
    <Root>
      <Container>
        <Column>
          <h1>Your Trusted Partner in Software Development</h1>
          <h2>
            I build beautiful, functional websites and applications for
            businesses because I love them.
          </h2>
          <ImageContainer>
            <img src={justin} alt="Justin McIntosh profile" />
          </ImageContainer>
        </Column>
      </Container>
    </Root>
    <Purple />
  </SVGContainer>
);

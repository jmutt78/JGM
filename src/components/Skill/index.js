import React from "react";

import WebCoding from "../../../assets/web-coding.svg";
import Concept from "../../../assets/processor.svg";

import { Root, Column, BoxLeft, BoxRight, BoxContainer } from "./styles";

export default () => (
  <Root>
    <Column>
      <BoxContainer>
        <BoxLeft>
          <WebCoding
            style={{ height: "80px", width: "auto", marginBottom: "20px" }}
          />
          <h3>Web Development</h3>
          <p>
            I create scalable web applications with a range of technologies,
            including React and Node, to utilize the best tools for your
            application.
          </p>
        </BoxLeft>
        <BoxRight>
          <Concept
            style={{ height: "80px", width: "auto", marginBottom: "20px" }}
          />
          <h3>Mobile Development</h3>
          <p>
            I design and build iOS, Android, and cross-platform React Native
            apps for startups and established businesses.
          </p>
        </BoxRight>
      </BoxContainer>
    </Column>
  </Root>
);

//
// <p className="p-title">Industries:</p>
// <p>Tech, Retail, Construction</p>
//
// <p className="p-title">Languages:</p>
// <p>React, Javascript, HTML/CSS, React Native</p>

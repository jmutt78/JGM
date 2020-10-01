import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import Shopify from "../../../assets/shopify.svg";
import MVP from "../../../assets/mvp.svg";
import Web from "../../../assets/web-coding.svg";
import Rech from "../../../assets/rech.svg";
import No from "../../../assets/node.svg";
import Graph from "../../../assets/graphql.svg";

import {
  Root,
  TitleContainer,
  ServiceContainer,
  BoxContainer,
  InnerContainer,
  ImageContainer,
  ServiceCard
} from "./styles";

const Work = () => {
  const skillsData = [
    {
      image: <Shopify />,
      title: "Shopify Service",
      body: `The design and functionality of your Shopify store could make or break conversions and affect your bottom line. My approach means you get a website that's built to convert, scale, and thrive.`
    },
    {
      image: <MVP />,
      title: "Minimum Viable Product (MVP)",
      body: `Do you have a fantastic idea for an app or software but don’t know where to start? I will help you turn your idea into reality. Save time, money and risk with a streamlined version of your product featuring just the core features, so you can test it with your target audience or pitch it directly to investors.`
    },
    {
      image: <Web />,
      title: "Web Development",
      body: `I build websites that will help your business find a competitive edge, attract new customers, and increase your profit.`
    },
    {
      image: <Rech />,
      title: "React.Js",
      body: `I build web-based applications, static websites, and mobile applications using the largest ecosystem of open source components and libraries.`
    },
    {
      image: <No />,
      title: "Node.js",
      body: `I build modern, scalable, real-time, APIs using Express and easy to set up fully-featured Node.js server platform.`
    },
    {
      image: <Graph />,
      title: "GraphQL",
      body: `I build scalable, real-time GraphQL APIs. Adopt GraphQL on top of your existing tech stack. Access, process, and serve data from your enterprise systems via APIs with GraphQL as a gateway.`
    }
  ];

  return (
    <Root>
      <TitleContainer>
        <h2>Services</h2>
      </TitleContainer>
      <Container fluid>
        <Row>
          {skillsData.map(({ image, title, body }) => (
            <ServiceContainer key={title} lg={4} md={6} sm={12}>
              <ServiceCard>
                <Card.Body>
                  {image}
                  <Card.Title>{title}</Card.Title>

                  <Card.Text>{body}</Card.Text>
                </Card.Body>
              </ServiceCard>
            </ServiceContainer>
          ))}
        </Row>
      </Container>
    </Root>
  );
};

export default Work;

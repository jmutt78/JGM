import React from "react";
import styled from "styled-components";

import { Image } from "react-bootstrap";
import justin from "../../images/JustinM.png";

export const Root = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  img {
  }
`;

export const Inner = styled.div`
  max-width: 1000px !important;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

export const Body = styled.div`
  padding-bottom: 30px;
`;

export const Listing = styled.div`
  display: table;
  width: 100%;
  border-color: #e6e6e6;
  border-style: solid;
  border-width: 2px 0 0;
`;

export const ListingUser = styled.div`
  display: table;
  width: 100%;
`;

export const ListingText = styled.div`
  display: table-cell;
  width: 60%;
  overflow: hidden;
  vertical-align: top;
`;

const Oval = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  border-radius: 50%;
  margin: 0 auto;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(${props => props.image});

  @media (max-width: 1200px) {
    width: 100px;
    height: 100px;
    background-size: ${props => props.mobileImageSize};
  }
`;

export default () => (
  <Root>
    <Container>
      <Inner>
        <Listing>
          <ListingUser>
            <Oval image={justin} />
          </ListingUser>
          <ListingText></ListingText>
        </Listing>
      </Inner>
    </Container>
  </Root>
);

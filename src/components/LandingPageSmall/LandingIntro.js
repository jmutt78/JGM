import React from 'react';
import styled from 'styled-components';

import Work from '../../components/Work';

import Idea from '../../../assets/idea.svg';
import System from '../../../assets/innovation.svg';
import Problem from '../../../assets/workflow.svg';
import Organize from '../../../assets/man.svg';

import Profile from '../Images/Profile.js';
import Purple from '../../../assets/city.svg';
import website from '../../images/website.png';
import bubble from '../../images/bubble.png';

import { Container, Col, Row, Image, Accordion, Card } from 'react-bootstrap';

export const About = styled(Col)`
  p {

    font-size: 20px;
    font-style: italic;
  }
  h2 {

    font-size: 56px;
    font-weight: 300;
    line-height: 1.3em;
    letter-spacing: 1.7px;
  }



  @media (max-width: 575px) {
    width: 100%
    text-align: center;
    h2 {
      font-size: 30px;
    }
  }
`;

export const AboutRow = styled(Row)`
  padding: 25px 0 0 0;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  max-width: 1140px;
  @media (max-width: 575px) {
    width: 100%;
  }
`;

export const AboutContent = styled(Col)`
h3 {
  padding-top: 5rem;
  font-weight: strong;
}

li {
  font-size: 22px;
}



  @media (max-width: 575px) {
    min-width: 90%;
    margin: 0px 25px 0px 25px;
    p {
    font-size: 15px;
  }
`;

export const SVGContainer = styled.div`
overflow-x: hidden;

svg {
  display: flex;
  height: auto;
  width: 1300px;
  margin-left auto;
  margin-right: auto;

}
@media (max-width: 500px) {
  margin-bottom: -30px;
}
`;

export const Root = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;

  .title {
    font-size: 50px;
    font-weight: 300;
    line-height: 1.3em;
    letter-spacing: 1.7px;
    text-align: center;
  }
`;

export const TextWRapper = styled(Col)`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
`;

export const Column = styled.div`
  display: block;
  text-align: center;
  justify-content: center;
  h1 {
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.125;
    font-size: 3rem !important;
  }

  h2 {
    font-weight: 300;
    line-height: 1.5;
    font-size: 1.25rem !important;

    margin-bottom: 1.5rem;
  }

  @media (max-width: 500px) {
    h1 {
      font-weight: 800;
      margin-bottom: 1.5rem;
      line-height: 1.125;
      font-size: 2rem !important;
    }

    h2 {
      font-weight: 300;
      line-height: 1.5;
      font-size: 1rem !important;

      margin-bottom: 1.5rem;
    }
  }
`;

export const LandingImageContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 800px;
    object-fit: cover;
  }
  @media (max-width: 500px) {
  }
`;

export default () => (
  <SVGContainer>
    <Root>
      <Container>
        <Column>
          <h1>New customers are visiting your website and leaving</h1>
          <h2>Get a free website analysis video!</h2>
        </Column>
      </Container>
      <AboutRow>
        <About>
          <Image src={website} fluid />
        </About>
        <AboutContent>
          <h3>Do you feel like your website is failing you?</h3>

          <ul>
            <li>Outdated design and content?</li>
            <li>Not showing up in Google?</li>
            <li>Lots of traffic but no conversions</li>
          </ul>
        </AboutContent>
      </AboutRow>
      <div className='title'>
        <h3>We got your back!</h3>
      </div>
    </Root>
    <Purple />
  </SVGContainer>
);

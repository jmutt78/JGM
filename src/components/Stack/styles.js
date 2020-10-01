import styled from "styled-components";
import { Col, Card } from "react-bootstrap";

export const Root = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  padding: 0rem 1.5rem;
  padding-top: 30px;
  padding-bottom: 30px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  padding-bottom: 3rem !important;
  display: block;
  text-align: center;
  justify-content: center;

  h2 {
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.125;
    font-size: 2rem !important;
  }
`;

export const ServiceContainer = styled(Col)`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 80%;

  @media (max-width: 800px) {
    width: 90%;
    display: block;
    margin: 0 auto;
  }
`;

export const ServiceCard = styled(Card)`
  margin-bottom: 30px;
  svg {
    height: 50px;
    width: auto;
    margin-bottom: 20px;
  }
`;

import styled from 'styled-components';

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
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;
`;

export const Container = styled.div`
  -webkit-box-flex: 1;
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

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 25px;
  img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
  @media (max-width: 500px) {
    img {
      border-radius: 50%;
      width: 150px;
      height: 150px;
      object-fit: cover;
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
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: -80px;
`;

import styled from 'styled-components';

export const Gallery = styled.div`
  margin: 0rem 5%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;
  h2 {
    font-weight: 400;
  }
  h3 {
    font-weight: 300;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 1rem;
  }
  @media (max-width: 425px) {
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    grid-gap: 1rem;
    h2 {
      font-size: 0.8rem;
    }
    h3 {
      font-size: 0.7rem;
      font-weight: 300;
    }
  }
`;

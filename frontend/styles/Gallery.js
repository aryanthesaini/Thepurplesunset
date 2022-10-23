import styled from 'styled-components';

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 1rem;
  }
  @media (max-width: 425px) {
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    grid-gap: 1rem;
  }
`;

import styled from 'styled-components';

export const DetailsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  img {
    width: 40%;
  }

  @media (max-width: 768px) {
    display: inline;
    img {
      width: 100%;
    }
  }
  @media (max-width: 425px) {
  }
`;

export const ProductInfo = styled.div`
  width: 40%;
  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: inline;
    width: 100%;
    h2 {
      margin-top: 2rem;
    }
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;
  button {
    cursor: pointer;
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
  }
  p {
    width: 1rem;
    text-align: center;
  }

  span {
    color: var(--secondary);
  }
  svg {
    color: #494949;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Buy = styled.button`
  width: 100%;
  background: var(--primary);
  color: white;
  font-weight: lighter;
  border: none;
`;

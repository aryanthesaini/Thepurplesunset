import styled from 'styled-components';

export const DetailsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  font-weight: 300;
  img {
    width: 40%;
    margin: 0rem 5%;
  }

  @media (max-width: 1024px) {
    display: inline;

    img {
      width: 90%;
    }
  }
`;

export const ProductInfo = styled.div`
  font-weight: 300;
  width: 40%;
  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    display: inline;
    width: 90%;
    h2 {
      font-weight: 400;
      margin: 0rem 5%;
      margin-top: 2rem;
    }
    p {
      margin: 0rem 5%;
    }
    h4 {
      font-weight: 300;
      margin: 0rem 5%;
    }
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0.1rem;
  button {
    cursor: pointer;
    background: transparent;
    border: none;
    display: flex;
    font-size: 1rem;
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

  @media (max-width: 1024px) {
    text-align: center;
    margin-left: 1.5rem;
    button {
      cursor: pointer;
      background: transparent;
      border: none;
      display: flex;
      font-size: 1rem;
      padding: 0.5rem 0.5rem;
    }
  }
`;

export const Buy = styled.button`
  width: 100%;
  background: var(--primary);
  color: white;
  font-weight: lighter;
  border: none;
`;

import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  width: 50%;

  @media (max-width: 1028px) {
    width: 100%;
  }
`;

export const DetailsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  margin-bottom: 4rem;
  font-weight: 300;

  img {
    margin: 0rem 5%;
  }

  @media (max-width: 1028px) {
    display: inline;

    img {
      width: 90%;
      margin: 0rem;
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
      font-weight: 700;
      margin: 0rem 5%;
      margin-top: 2rem;
      font-size: 1rem;
    }
    p {
      margin: 0rem 5%;
    }
    h4 {
      font-weight: 500;
      margin: 0rem 5%;
      font-size: 2rem;
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
  margin-left: 2rem;
  margin-right: 1rem;
  margin-top: 3rem;
  width: 80%;
  background: var(--primary);
  color: white;
  font-weight: lighter;
  border: none;
  border-radius: 4px;
`;

export const CustomName = styled.input`
  font-size: 1.2rem;
  border: none;
  background: none;
  border-bottom: 1px solid black;
  font-weight: 300;
  margin-right: 5%;
  @media (max-width: 1024px) {
    font-size: 1rem;
    height: 40px;
    transform: translateY(25px);
  }
`;

export const NameDiv = styled.div`
  display: flex;

  margin-bottom: 2rem;

  h2 {
    font-weight: 300;
    margin-right: 2rem;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: medium;
      font-weight: 300;
      margin-right: 1.4rem;
    }
  }
`;

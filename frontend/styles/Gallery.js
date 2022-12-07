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
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 1rem;
    h2 {
      font-size: 1.2rem;
    }
    h3 {
      font-size: 0.8rem;
      font-weight: 600;
    }
  }
`;

export const Categories = styled.div`
  display: flex;
  justify-content: center;
  margin: 0rem 20%;
  margin-bottom: 4rem;
  background: linear-gradient(
    90deg,
    hsla(197, 14%, 57%, 1) 0%,
    hsla(192, 17%, 94%, 1) 100%
  );

  border-radius: 4rem;
  .button-86 {
    all: unset;
    width: 10%;
    height: 30px;
    font-size: 16px;
    font-weight: 500;
    background: transparent;
    border: none;
    position: relative;
    color: black;
    cursor: pointer;
    z-index: 1;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin: 0rem 1rem;
  }

  .button-86::after,
  .button-86::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -99999;
    transition: all 0.4s;
  }

  .button-86::before {
    transform: translate(0%, 0%);
    width: 100%;
    height: 100%;

    border-radius: 10px;
  }

  .button-86::after {
    transform: translate(10px, 10px);
    width: 0px;
    height: 0px;
    background: #ffffff15;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 50px;
  }

  .button-86:hover::before {
    transform: translate(5%, 20%);
    width: 110%;
    height: 110%;
  }

  .button-86:hover::after {
    border-radius: 10px;
    transform: translate(0, 0);
    width: 100%;
    height: 100%;
  }

  .button-86:active::after {
    transition: 0s;
    transform: translate(0, 5%);
  }

  @media (max-width: 768px) {
    margin: 0rem 5%;
    margin-bottom: 2rem;

    .button-86 {
      all: unset;
      width: 5%;
      height: 20px;
      font-size: 12px;

      background: transparent;
      border: none;
      position: relative;
      color: black;
      cursor: pointer;
      z-index: 1;
      padding: 5px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      margin: 0rem 0.2rem;
    }

    .button-86::after {
      transform: translate(10px, 10px);
      width: 0px;
      height: 0px;
      background: #ffffff15;
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border-radius: 50px;
    }
  }
`;

import styled from 'styled-components';

export const Footer = styled.div`
  margin-top: 20rem;
  background: linear-gradient(
    90deg,
    hsla(332, 53%, 82%, 1) 0%,
    hsla(176, 57%, 89%, 1) 100%
  );
`;

export const Container = styled.div`
  margin: auto;
  .instaPic {
    cursor: pointer;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80');
    background-size: cover;
    background-position: center;

    height: 30vh;
  }

  .instaDetail {
    color: white;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    padding-top: 3rem;
    font-size: xx-large;
    font-weight: 200;
  }
  .instaLogo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }

  @media (max-width: 1024px) {
    .instaPic {
      cursor: pointer;
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80');
      background-size: cover;
      background-position: center;

      height: 25vh;
    }
    .instaDetail {
      color: white;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: auto;
      padding-top: 3rem;
      font-size: large;
      font-weight: 200;
    }
  }
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ColFooter = styled.div`
  width: 50%;
  text-align: center;
  h1 {
    font-weight: 400;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
  p {
    display: flex;
    justify-content: center;
    font-weight: 300;
    padding: 2rem 2rem;
  }
  h4 {
    font-size: 18px;
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 35px;
    font-weight: 300;
    position: relative;
  }

  ul li:not(:last-child) {
    margin-bottom: 10px;
  }
  ul li a {
    font-size: 16px;
    text-transform: capitalize;
    color: #ffffff;
    text-decoration: none;
    font-weight: 300;
    color: #bbbbbb;
    display: block;
    transition: all 0.3s ease;
  }
  ul li a:hover {
    color: #ffffff;
    padding-left: 8px;
  }
  .social-links a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #ffffff;
    font-size: 2.5rem;
    transition: all 0.5s ease;
  }
  .social-links a:hover {
    color: #24262b;
    background-color: #ffffff;
  }
  @media (max-width: 1024px) {
    h1 {
      font-weight: 400;
      margin-bottom: 0.5rem;
      margin-top: 1rem;
    }
    p {
      display: flex;
      justify-content: center;
      font-weight: 300;
      padding: 1rem 1rem;
    }
    width: 100%;
    margin-bottom: 30px;

    .social-links a {
      display: inline-block;
      height: 30px;
      width: 30px;
      background-color: rgba(255, 255, 255, 0.2);
      margin: 0 10px 10px 0;
      text-align: center;
      line-height: 40px;
      border-radius: 50%;
      color: #ffffff;
      font-size: 2rem;
      transition: all 0.5s ease;
    }
  }

  @media (max-width: 574px) {
    width: 100%;
  }
`;

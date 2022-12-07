import styled from 'styled-components';

export const PageContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80');
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

export const Heading = styled.div`
  padding: 5rem 5rem;
  padding-top: 10rem;

  h1 {
    font-size: 6rem;
    color: white;
    font-weight: 400;
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 1rem;
    color: #ffbfbf;
    font-weight: 200;
    margin-top: 2rem;
  }

  h2 {
    font-size: 2rem;
    color: #ffbfbf;
    font-weight: 300;
    margin-top: 2rem;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 3rem 3rem;

  button {
    padding: 1rem 2rem;
    cursor: pointer;
    border: none;
    border-radius: 4rem;
  }

  @media (max-width: 1024px) {
    button {
      padding: 1rem 0.2rem;
      width: 100%;
      cursor: pointer;
      border: none;
    }
  }
`;

import styled from 'styled-components';

export const NavStyles = styled.nav`
  font-weight: 300;
  margin: 0rem 5%;
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;

  a {
    font-size: 1.2rem;
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;

  div {
    margin-left: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    font-size: 1rem;
    font-weight: 300;
    padding: 0.25rem;
  }

  svg {
    font-size: 1.5rem;
  }

  span {
    background: #ff2626;
    color: white;
    height: 1.3rem;
    width: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 0.75rem;
    position: absolute;
    right: -10%;
    top: -20%;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 0.7rem;
      padding: 0.25rem;
    }
    span {
      background: #ff2626;
      color: white;
      height: 1.3rem;
      width: 1.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-size: 0.75rem;
      position: absolute;
      right: -10%;
      top: -20%;
      pointer-events: none;
    }
  }
`;

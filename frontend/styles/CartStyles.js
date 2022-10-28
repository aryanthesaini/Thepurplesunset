import styled from 'styled-components';
//anitmationssss

const { motion } = require('framer-motion');

export const CartWrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`;

export const CartStyle = styled(motion.div)`
  width: 40%;
  background: #f1f1f1;
  padding: 2rem 5rem;
  overflow-y: scroll;
  position: relative;

  @media (max-width: 1024px) {
    width: 85%;
    padding: 2rem 2rem;
  }
`;

export const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  padding: 2rem;
  margin: 1rem 0rem;
  img {
    width: 8rem;
    border-radius: 5%;
  }
  @media (max-width: 1024px) {
    padding: 1rem;
    img {
      width: 8rem;
      border-radius: 5%;
    }
  }
`;

export const CardInfo = styled(motion.div)`
  width: 40%;
  div {
    display: flex;
    flex-direction: space-between;
  }
  h3 {
    margin-left: 0.6rem;
  }

  @media (max-width: 1024px) {
    width: 40%;
    h3 {
      font-weight: 400;
      font-size: 12px;
    }
  }
`;

export const EmptyStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  h1 {
    font-weight: 300;
    padding: 2rem;
  }

  svg {
    font-size: 8rem;
    color: var(--secondary);
  }
`;

export const Checkout = styled(motion.div)`
  button {
    background: var(--primary);
    padding: 1rem 2rem;
    width: 100%;
    color: white;
    margin-top: 2rem;
    cursor: pointer;
    border: none;
  }
`;

export const Cards = styled(motion.div)``;

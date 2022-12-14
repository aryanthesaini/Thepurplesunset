import styled from 'styled-components';
const { motion } = require('framer-motion');

export const ProductStyle = styled(motion.div)`
  background: #ffffff33;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 5%;

  img {
    width: 100%;
    cursor: pointer;
  }
  h2 {
    padding: 0.5rem 0rem;
  }
`;

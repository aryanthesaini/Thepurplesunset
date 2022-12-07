import styled from 'styled-components';
const { motion } = require('framer-motion');
import { BsWhatsapp } from 'react-icons/bs';
import { useRouter } from 'next/router';
export default function Nav() {
  const route = useRouter();
  return (
    <HeaderStyle
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: '0.2' }}>
      <HeaderData>
        Customise your gift hamper by reaching out to us{' '}
        <LogoSpan>
          <BsWhatsapp
            onClick={() => {
              route.push('https://wa.me/919582875455');
            }}
          />
        </LogoSpan>
      </HeaderData>
    </HeaderStyle>
  );
}

const HeaderStyle = styled(motion.div)`
  height: 15vh;
  background: linear-gradient(
    180deg,
    hsla(197, 14%, 57%, 1) 0%,
    hsla(192, 17%, 94%, 1) 100%
  );

  font-weight: 300;

  @media (max-width: 768px) {
    height: 10vh;
  }
`;

const HeaderData = styled(motion.div)`
  margin: 0rem 1rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem 0rem;
  }
`;

const LogoSpan = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0rem 2rem;
  @media (max-width: 768px) {
    padding: 0rem 1.5rem;
  }
`;

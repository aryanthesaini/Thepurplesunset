import styled from 'styled-components';

import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoWhatsapp,
  IoMailOutline,
} from 'react-icons/io5';
import { useRouter } from 'next/router';
export default function FooterMain() {
  const route = useRouter();

  return (
    <Footer>
      <Container>
        <Row>
          <ColFooter>
            <h4>Reach out to us</h4>
            <div className='social-links'>
              <a href='#'>
                <IoLogoInstagram
                  onClick={() => {
                    route.push(
                      'https://www.instagram.com/thepurplesunset.in/?hl=en'
                    );
                  }}
                />
              </a>
              <a href='#'>
                <IoLogoFacebook
                  onClick={() => {
                    route.push('https://www.facebook.com/thepurplesunset.in/');
                  }}
                />
              </a>
              <a href='#'>
                <IoLogoWhatsapp
                  onClick={() => {
                    route.push('https://wa.me/9582875455');
                  }}
                />
              </a>
              <a href='#'>
                <IoMailOutline
                  onClick={() => {
                    route.push('mailto:thepurplesunsetbusiness@gmail.com');
                  }}
                />
              </a>
            </div>
          </ColFooter>
        </Row>
      </Container>
    </Footer>
  );
}

const Footer = styled.div`
  margin-top: 30rem;
  background-color: #24262b;
  padding: 30px 0;
`;

const Container = styled.div`
  max-width: 1170px;
  margin: auto;
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ColFooter = styled.div`
  width: 25%;
  padding: 0 15px;
  h4 {
    font-size: 18px;
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 35px;
    font-weight: 300;
    position: relative;
  }
  h4::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #e91e63;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
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
  @media (max-width: 767px) {
    width: 50%;
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

import { Footer, Container, Row, ColFooter } from '../styles/Footer';
import Image from 'next/image';
import purple2 from '../public/purple2.jpg';
import purple3 from '../public/purple3.jpg';
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
            <Image src={purple2} />
          </ColFooter>
          <ColFooter>
            <h1>THE PURPLE SUNSET</h1>
            <p>
              The Purple Sunset is a story of a girl who coloured her skies
              purple, no matter how many times people told her not to, told her
              that purple doesn&apos;t belong to evening sky falls. Art has
              always been her way to rebel, revolt, and her way to love. It is
              through art that she realised that sunsets aren&apos;t supposed to
              be the sad endings to dying skies as her childhood self imagined
              them to be, so she made them her beginnings.{' '}
            </p>
          </ColFooter>
        </Row>
        <Row
          className='instaPic'
          onClick={() => {
            route.push('https://www.instagram.com/thepurplesunset.in/?hl=en');
          }}>
          <div className='instaDetail'>
            FIND US ON INSTAGRAM <br />
            <div className='instaLogo'>
              {' '}
              <IoLogoInstagram />
            </div>
          </div>
          <br />
        </Row>
        <Row>
          <ColFooter
            style={{ width: '100%', marginTop: '2rem', marginBottom: '2rem' }}>
            <h4 style={{ color: 'black' }}>Or reach out to us on</h4>
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
                    route.push('https://wa.me/919582875455');
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

import { PageContainer, Heading, ButtonDiv } from '../styles/LandingPage';
import Typewriter from 'typewriter-effect';
import { useStateContext } from '../lib/context';

export default function LandingPage() {
  const { showItems, setShowItems } = useStateContext();
  const handleClick = () => {
    setShowItems(false);
  };
  return (
    showItems && (
      <PageContainer>
        <Heading>
          <h1>THE PURPLE SUNSET</h1>
          <h3>By Gunveen Kaur</h3>
          <h2>
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString('GET THEM YOUR CUSTOMISED ')
                  .pauseFor(300)

                  .typeString('LETTER')
                  .deleteChars(6)
                  .typeString('PHOTO FRAME')
                  .deleteChars(11)
                  .typeString('CUP')
                  .deleteChars(3)
                  .typeString('SPOTIFY PLAGUE')
                  .deleteChars(14)
                  .typeString('LOVE')
                  .pauseFor(1000)
                  .start();
              }}
            />
          </h2>
        </Heading>
        <ButtonDiv>
          <button
            onClick={() => {
              handleClick();
            }}>
            GO SHOPPING
          </button>
        </ButtonDiv>
      </PageContainer>
    )
  );
}

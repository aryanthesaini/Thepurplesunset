import { useRouter } from 'next/router';
import Image from 'next/image';
import purple from '../public/purple.jpg';
import styled from 'styled-components';
const { motion } = require('framer-motion');

const stripe = require('stripe')(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export async function getServerSideProps(params) {
  //   console.log(params.query);
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ['line_items'],
    }
  );
  return { props: { order } };
}

export default function Success({ order }) {
  const route = useRouter();
  // console.log(order);
  return (
    <Wrapper>
      <Card
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.75 }}>
        <Image height={'1000px'} src={purple} alt='Purple sunset'></Image>
        <h1>
          We will reach out to you at your given contact for your customisations
        </h1>

        <h2>
          Check {order.customer_details.email} for your order confirmation
        </h2>
        <InfoWrapper>
          <Address>
            <h3>Address</h3>

            {Object.entries(order.customer_details.address).map(
              ([key, val]) => (
                <p key={key}>
                  {key}:{val}
                </p>
              )
            )}
          </Address>
          <OrderInfo>
            <h3>Products</h3>
            {order.line_items.data.map((item) => (
              <div key={item.id}>
                <p>Product: {item.description}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Name: {item.name}</p>
                <p>Price: ₹ {item.price.unit_amount / 100}</p>
              </div>
            ))}
          </OrderInfo>
        </InfoWrapper>
        <button onClick={() => route.push('/')}>Continue Shopping</button>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 5rem 15rem;

  @media (max-width: 1024px) {
    margin: 0rem;
  }
`;

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 2rem;
  padding: 2rem 3rem;
  button {
    color: white;
    background: var(--primary);
    font-size: 1.2rem;
    font-weight: 300;
    padding: 1rem 2rem;
    border: none;
    cursor: pointer;
    margin-bottom: 0.5rem;
  }
  h2 {
    margin-bottom: 0.5rem;
    color: gray;
  }
  h1 {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 1024px) {
    h2 {
      margin-bottom: 0.5rem;
      font-size: 0.7rem;
    }
    h1 {
      font-size: 1rem;
    }
    button {
      color: white;
      background: var(--primary);
      font-size: 0.7rem;
      font-weight: 300;
      padding: 1rem 1rem;
      border: none;
      cursor: pointer;
      margin-bottom: 0.5rem;
    }
  }
`;

const Address = styled.div`
  font-size: 1rem;
  width: 100%;
  margin-right: 2rem;
  @media (max-width: 1024px) {
    h2 {
      margin-bottom: 2rem;
      font-size: 1rem;
    }
    font-size: 0.5rem;
  }
`;

const OrderInfo = styled.div`
  font-size: 1rem;
  width: 100%;

  div {
    padding-bottom: 1rem;
  }
  @media (max-width: 1024px) {
    h2 {
      margin-bottom: 2rem;
      font-size: 1rem;
    }
    font-size: 0.5rem;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  margin: 2rem 0rem;
`;

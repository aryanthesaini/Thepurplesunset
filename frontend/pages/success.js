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
  console.log(order);
  return (
    <Wrapper>
      <Card
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.75 }}>
        <Image height={'900px'} src={purple} alt='Purple sunset'></Image>
        <h2>A conformation e-mail has been sent to</h2>
        <h2>{order.customer_details.email}</h2>
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
`;

const Address = styled.div`
  font-size: 1rem;
  width: 100%;
`;

const OrderInfo = styled.div`
  font-size: 1rem;
  width: 100%;

  div {
    padding-bottom: 1rem;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  margin: 2rem 0rem;
`;

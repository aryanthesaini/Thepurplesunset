import { useRouter } from 'next/router';
const stripe = require('stripe')(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);
import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';
import styled from 'styled-components';

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res);
    const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
    const paymentIntents = await stripe.paymentIntents.list({
      customer: stripeId,
    });
    return { props: { orders: paymentIntents.data } };
  },
});

export default function Profile({ user, orders }) {
  const route = useRouter();
  console.log(orders);
  return (
    user && (
      <div>
        <h2 style={{ margin: '0rem 5%', fontWeight: '400' }}>{user.name}</h2>
        <p style={{ margin: '0rem 5%', fontWeight: '300' }}>{user.email}</p>
        <div>
          {orders.map((order) => (
            <Order key={order.id}>
              <h1>Order Number: {order.id}</h1>
              <h2>Amount: ₹ {order.amount / 100}</h2>
              <h2>Receipt Email: {user.email}</h2>
            </Order>
          ))}
        </div>
        <Logout onClick={() => route.push('/api/auth/logout')}>LOGOUT</Logout>
      </div>
    )
  );
}

const Order = styled.div`
  background: white;
  margin: 2rem 5rem;
  padding: 3rem;
  display: flex;
  justify-content: space-between;

  h1 {
    font-weight: 400;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    margin: 1rem 0rem;
    padding: 1rem;
    display: inline-block;
    justify-content: space-between;

    h1 {
      font-size: 0.5rem;
    }
    h2 {
      font-weight: 400;
      font-size: 0.5rem;
    }
  }
`;

const Logout = styled.button`
  margin: 0rem 5%;
  color: white;
  background: var(--primary);
  font-size: 1.2rem;
  font-weight: 300;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 1rem 1rem;
  }
`;

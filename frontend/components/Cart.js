import { useStateContext } from '../lib/context';
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyStyle,
  Checkout,
  Cards,
} from '../styles/CartStyles';
import { Quantity } from '../styles/ProductDetails';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import getStripe from '../lib/getStripe';

//animation varients

const card = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const cards = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export default function Cart() {
  const { cartItems, setShowCart, onAdd, onRemove, totalPrice } =
    useStateContext();

  //payments

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cartItems),
    });

    const data = await response.json();

    await stripe.redirectToCheckout({
      sessionId: data.id,
    });
    // console.log(data);
  };

  return (
    <CartWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: '0.1' }}
      exit={{ opacity: 0 }}
      onClick={() => setShowCart(false)}>
      <CartStyle
        initial={{ x: '50%' }}
        animate={{ x: '0%' }}
        exit={{ x: '50%' }}
        transition={{ type: 'tween' }}
        onClick={(e) => e.stopPropagation()}>
        {cartItems.length < 1 && (
          <EmptyStyle
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: '0.2' }}>
            <h1>Empty Cart. Do you hate me? 😔</h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        <Cards layout variants={cards} initial='hidden' animate='show'>
          {cartItems.length >= 1 &&
            cartItems.map((item) => {
              // console.log(item);
              return (
                <Card layout variants={card} key={item.slug}>
                  <img
                    src={item.image.data[0].attributes.formats.thumbnail.url}
                    alt={item.title}
                  />
                  <CardInfo>
                    <h3>{item.title}</h3>
                    <h3>₹ {item.price}</h3>
                    <Quantity>
                      <button
                        onClick={() => {
                          onRemove(item);
                        }}>
                        <AiFillMinusCircle />
                      </button>
                      <p> {item.quantity} </p>
                      {/* <p> {item.name} </p> */}
                      <button
                        onClick={() => {
                          onAdd(item, 1);
                        }}>
                        <AiFillPlusCircle />
                      </button>
                    </Quantity>
                  </CardInfo>
                </Card>
              );
            })}
        </Cards>
        {cartItems.length >= 1 && (
          <Checkout layout>
            <h3>Subtotal: ₹ {totalPrice}</h3>
            <button onClick={handleCheckout}>Purchase</button>
          </Checkout>
        )}
      </CartStyle>
    </CartWrapper>
  );
}

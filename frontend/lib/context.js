import React, { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  //add our state
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);

  //increase the number of products

  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  //decrease the numnber of products
  const decreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) {
        return 1;
      } else {
        return prevQty - 1;
      }
    });
  };

  //add product to cart
  const onAdd = (product, quantity) => {
    //check if the product is already in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  return (
    <ShopContext.Provider
      value={{
        qty,
        increaseQty,
        decreaseQty,
        showCart,
        setShowCart,
        cartItems,
        onAdd,
      }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);

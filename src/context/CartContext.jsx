import { useState, createContext, useContext, useEffect } from 'react';

const Context = createContext();

const initialCart = () => {
  const cartFromLocalStorage = localStorage.getItem('cart');
  if (cartFromLocalStorage !== undefined && cartFromLocalStorage === null) {
    return JSON.parse(cartFromLocalStorage);
  }
  return [];
};

export function CartContext({ children }) {
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    const productIndexInCart = cart.findIndex(
      (cartItem) => cartItem.id === product.id
    );
    const productIsInCart = productIndexInCart !== -1;

    if (productIsInCart) {
      const updatedCart = cart.map((cartItem, index) => {
        if (index === productIndexInCart) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCart(updatedCart);
      return;
    }

    setCart([...cart, { ...product, quantity: 1 }]);
  }

  function removeFromCart(product) {
    const updatedCartItems = cart.filter(
      (cartItem) => cartItem.id !== product.id
    );

    setCart(updatedCartItems);
  }

  function increaseQuantity(product) {
    const productIndex = cart.findIndex(
      (cartItem) => cartItem.id === product.id
    );

    const updatedCart = cart.map((cartItem, index) => {
      if (index === productIndex) {
        const newQuantity = cartItem.quantity + 1;
        if (newQuantity < 1) {
          return cartItem;
        }
        return { ...cartItem, quantity: newQuantity };
      }
      return cartItem;
    });

    setCart(updatedCart);
  }

  function decreaseQuantity(product) {
    const productIndex = cart.findIndex(
      (cartItem) => cartItem.id === product.id
    );

    const updatedCart = cart.map((cartItem, index) => {
      if (index === productIndex) {
        const newQuantity = cartItem.quantity - 1;
        if (newQuantity < 1) {
          return cartItem;
        }
        return { ...cartItem, quantity: newQuantity };
      }
      return cartItem;
    });

    setCart(updatedCart);
  }

  return (
    <Context.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useCartContext() {
  return useContext(Context);
}

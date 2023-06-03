'use client';

import { createContext, useState, useContext, useEffect } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const cartLocal = window.localStorage.getItem('cart');
    if (cartLocal) {
      setCart(JSON.parse(cartLocal));
    }
  }, []);

  const addToCart = (product: any) => {
    setCart((old) => {
      let quantity: number = 0;

      if (old[product.id as keyof typeof old]) {
        const existingProduct = old[product.id as keyof typeof old] as {
          quantity: number;
        };
        quantity = existingProduct.quantity;
      }

      const newCart = {
        ...old,
        [product.id]: {
          quantity: quantity + 1,
          ...product,
        },
      };

      window.localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((old: Record<string, any>) => {
      const newCart: Record<string, any> = {};
      Object.keys(old).forEach((id: string) => {
        if (id !== productId) {
          newCart[id] = old[id];
        }
      });
      window.localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const cart: any = useContext(CartContext);
  return cart;
};

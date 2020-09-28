import { CartProduct } from '../types';

export const formatPrice = (price: number): string => `$${Number(price).toFixed(2)}`;

export const getCartFromLocalStorage = (): Array<CartProduct> => {
  return JSON.parse(localStorage.getItem('cartProducts')) || [];
};

export const setCartToLocalStorage = (cartProducts: CartProduct): void => {
  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
};

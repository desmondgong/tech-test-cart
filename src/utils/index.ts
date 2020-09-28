export const formatPrice = (price: number): string => `$${price.toFixed(2)}`;

export const getCartFromLocalStorage = (): any => {
  return JSON.parse(localStorage.getItem('cartProducts')) || [];
};

export const setCartToLocalStorage = (cartProducts: any): void => {
  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
};

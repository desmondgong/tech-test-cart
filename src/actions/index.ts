import 'isomorphic-fetch';
import { Dispatch } from 'redux';
import { AppAction, ActionType } from '../constants';
import { Product, CartProduct } from '../types';

export const loadProducts = (products: Array<Product>): AppAction => ({
  type: ActionType.PRODUCTS_LOAD_DATA,
  data: products,
});

export const fetchProducts = () => (dispatch: Dispatch): AppAction =>
  fetch('/api/mock/products')
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then(
      (data) => {
        dispatch(loadProducts(data));
      },
      () => {},
    );

export const addProductToCart = (product: Array<Product>): AppAction => ({
  type: ActionType.CART_ADD_PRODUCT,
  data: product,
});

export const removeProductFromCart = (product: Array<CartProduct>): AppAction => ({
  type: ActionType.CART_REMOVE_PRODUCT,
  data: product,
});

import 'isomorphic-fetch';
import { Dispatch } from 'redux';
import { AppAction, ActionType } from '../constants';

export const loadProducts = (products: []): AppAction => ({
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

export const addProductToCart = (product): AppAction => ({
  type: ActionType.CART_ADD_PRODUCT,
  data: product,
});

export const removeProductFromCart = (product): AppAction => ({
  type: ActionType.CART_REMOVE_PRODUCT,
  data: product,
});

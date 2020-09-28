import { Action } from 'redux';

export enum ActionType {
  PRODUCTS_LOAD_DATA = 'PRODUCTS_LOAD_DATA',
  CART_ADD_PRODUCT = 'CART_ADD_PRODUCT',
  CART_REMOVE_PRODUCT = 'CART_REMOVE_PRODUCT',
}

export interface AppAction extends Action<ActionType> {
  data?: any;
}

import { AppAction, ActionType } from '../constants';
import { getCartFromLocalStorage } from '../utils';

interface State {
  products: [];
  cartProducts: [];
}
export const INITIAL_STATE: State = {
  products: [],
  cartProducts: getCartFromLocalStorage() || [],
};
export default (state = INITIAL_STATE, action: AppAction): State => {
  switch (action.type) {
    case ActionType.PRODUCTS_LOAD_DATA: {
      return {
        ...state,
        products: action.data.map(({ id, name, price }) => ({
          id,
          name,
          price,
        })),
      };
    }
    case ActionType.CART_ADD_PRODUCT: {
      let productExists = false;
      const newCartProducts = state.cartProducts.map((product) => {
        if (product.id === action.data.id) {
          productExists = true;
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      if (!productExists) {
        newCartProducts.push({ ...action.data, quantity: 1 });
      }
      return {
        ...state,
        cartProducts: newCartProducts,
      };
    }
    case ActionType.CART_REMOVE_PRODUCT: {
      return {
        ...state,
        cartProducts: state.cartProducts.filter(({ id }) => id !== action.data.id),
      };
    }
    default:
      return state;
  }
};

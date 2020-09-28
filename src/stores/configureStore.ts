import { createStore, applyMiddleware, compose, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';
import { setCartToLocalStorage } from '../utils';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeFactory = (): Store => {
  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
  store.subscribe(() => {
    const { cartProducts } = store.getState();
    setCartToLocalStorage(cartProducts);
  });
  return store;
};

export default storeFactory;

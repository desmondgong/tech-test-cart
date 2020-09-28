import 'isomorphic-fetch';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { INITIAL_STATE } from '../../../reducers';
import * as actions from '../../../actions';
import { ActionType } from '../../../constants';
import TEST_PRODUCTS_DATA from '../../test-data/products';

describe('actions', () => {
  const initialState = INITIAL_STATE;
  const mockStore = configureStore([thunk]);
  afterEach(() => {
    fetchMock.restore();
  });

  it('should load products when fetch successfully', () => {
    const store = mockStore(initialState);
    fetchMock.mock('/api/mock/products', {
      headers: { 'content-type': 'json' },
      body: JSON.stringify(TEST_PRODUCTS_DATA),
    });
    return store.dispatch(actions.fetchProducts()).then(() => {
      const expectedActions = [
        {
          type: ActionType.PRODUCTS_LOAD_DATA,
          data: TEST_PRODUCTS_DATA,
        },
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

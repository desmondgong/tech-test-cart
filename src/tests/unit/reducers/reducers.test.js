import { ActionType } from '../../../constants';
import Reducer, { INITIAL_STATE } from '../../../reducers';
import TEST_PRODUCTS_DATA from '../../test-data/products';

describe('reducers', () => {
  const initialState = INITIAL_STATE;

  it('handles action PRODUCTS_LOAD_DATA', () => {
    const action = {
      type: ActionType.PRODUCTS_LOAD_DATA,
      data: TEST_PRODUCTS_DATA,
    };
    const state = Reducer(initialState, action);
    expect(state.products.length).toEqual(TEST_PRODUCTS_DATA.length);
  });
});

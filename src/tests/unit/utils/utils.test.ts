import { formatPrice } from '../../../utils';

describe('Format price value', () => {
  test('Get correct value', () => {
    expect(formatPrice(0)).toEqual('$0.00');
    expect(formatPrice('0')).toEqual('$0.00');
    expect(formatPrice('0.0')).toEqual('$0.00');
    expect(formatPrice(1.234)).toEqual('$1.23');
    expect(formatPrice('1.234')).toEqual('$1.23');
    expect(formatPrice('a')).toEqual('$NaN');
  });
});

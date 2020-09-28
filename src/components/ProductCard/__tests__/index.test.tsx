import React from 'react';
import renderer from 'react-test-renderer';
import { renderWithTheme } from '../../../tests/testUtils';
import ProductCard from '..';

const props = {
  id: '1',
  name: 'Sledgehammer',
  price: 125.75,
};

it('Matches the snapshots', () => {
  const component = renderer.create(<ProductCard {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly', () => {
  const { getByText } = renderWithTheme(<ProductCard {...props} />);

  expect(getByText(props.name)).toBeInTheDocument();
});

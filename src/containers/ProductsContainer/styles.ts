import { Theme } from '@material-ui/core';
import { BaseCSSProperties } from '@material-ui/styles';

export interface StyleProps {
  root: BaseCSSProperties;
  title: BaseCSSProperties;
  productsContainer: BaseCSSProperties;
}

const styles = (theme: Theme): StyleProps => ({
  root: {},
  title: {
    margin: theme.spacing(2),
  },
  productsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});
export default styles;

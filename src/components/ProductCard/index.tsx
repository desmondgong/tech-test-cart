import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import { formatPrice } from '../../utils';
import { Product } from '../../types';
import styles from './styles';

export interface Props extends Product {
  onAdd?: () => void;
}

const useStyles = makeStyles(styles);

const ProductCard = (props: Props): JSX.Element => {
  const { name, price, onAdd } = props;
  const classes = useStyles(props);
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography variant="body1">{name}</Typography>
        <Typography variant="body1">{formatPrice(price)}</Typography>
        <Tooltip title="add to cart">
          <IconButton color="primary" onClick={onAdd}>
            <AddShoppingCartIcon />
          </IconButton>
        </Tooltip>
      </CardContent>
    </Card>
  );
};

ProductCard.defaultProps = {
  onAdd: () => {},
};

export default ProductCard;

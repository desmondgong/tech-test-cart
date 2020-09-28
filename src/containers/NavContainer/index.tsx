import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

interface Props {
  cartProducts: ProductCardInfo[];
}

const useStyles = makeStyles(styles);

const NavContainer = (props: Props): JSX.Element => {
  const { cartProducts } = props;
  const count = cartProducts.reduce((total, { quantity }) => total + quantity, 0);
  const classes = useStyles(props);
  return (
    <AppBar position="static" className={classes.root}>
      <Link to="/">
        <Typography variant="h6">All Products</Typography>
      </Link>
      <Tooltip title="Cart">
        <IconButton component={Link} to="/cart">
          <Badge badgeContent={count} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Tooltip>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  cartProducts: state.cartProducts,
});

export default connect(mapStateToProps)(NavContainer);

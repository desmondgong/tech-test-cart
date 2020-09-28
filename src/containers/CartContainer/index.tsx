import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import { removeProductFromCart } from '../../actions';
import { formatPrice } from '../../utils';
import { CartProduct } from '../../types';

import styles from './styles';

interface Props {
  cartProducts: Array<CartProduct>;
  removeProductFromCart: () => void;
}

const useStyles = makeStyles(styles);

const CartContainer = (props: Props): JSX.Element => {
  const { cartProducts } = props;
  const classes = useStyles(props);
  const totalAmount = cartProducts.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0,
  );
  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Cart
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="right">{formatPrice(product.price)}</TableCell>
              <TableCell align="right">{product.quantity}</TableCell>
              <TableCell align="right">{formatPrice(product.price * product.quantity)}</TableCell>
              <TableCell align="right">
                <Tooltip title="Remove">
                  <IconButton
                    color="primary"
                    onClick={() => {
                      props.removeProductFromCart(product);
                    }}
                  >
                    <RemoveShoppingCartIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={3} align="right">
              Total
            </TableCell>
            <TableCell align="right">{formatPrice(totalAmount)}</TableCell>
            <TableCell align="right" />
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartProducts: state.cartProducts,
});

const mapDispatchToProps = (dispatch) => ({
  removeProductFromCart(product) {
    dispatch(removeProductFromCart(product));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);

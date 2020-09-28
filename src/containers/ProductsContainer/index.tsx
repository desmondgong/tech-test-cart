import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { fetchProducts, addProductToCart } from '../../actions';
import ProductCard, { Props as ProductCardInfo } from '../../components/ProductCard';

import styles from './styles';

interface Props {
  products: ProductCardInfo[];
  fetchProducts: () => void;
  addProductToCart: () => void;
}

const useStyles = makeStyles(styles);

const CartContainer = (props: Props): JSX.Element => {
  const { products } = props;
  const classes = useStyles(props);
  useEffect(() => {
    props.fetchProducts();
  }, []);
  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Products
      </Typography>
      <div className={classes.productsContainer}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            onAdd={() => {
              props.addProductToCart(product);
            }}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts() {
    dispatch(fetchProducts());
  },
  addProductToCart(product) {
    dispatch(addProductToCart(product));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);

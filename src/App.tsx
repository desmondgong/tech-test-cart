import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import NavContainer from './containers/NavContainer';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';

const App = (): JSX.Element => (
  <Grid container justify="center">
    <Grid item xs={8}>
      <NavContainer />
      <Switch>
        <Route path="/cart">
          <CartContainer />
        </Route>
        <Route path="/">
          <ProductsContainer />
        </Route>
      </Switch>
    </Grid>
  </Grid>
);
export default App;

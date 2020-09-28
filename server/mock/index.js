import DATA_PRODUCTS from './data/products';

module.exports = (app) => {
  app.get('/api/mock/products', (req, res) => {
    setTimeout(() => {
      res.json(DATA_PRODUCTS);
    }, 500);
  });
};

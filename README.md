# Shopping Cart

Tech test for buliding a basic shopping cart in React and Redux.

## Requirement

- The cart will need to keep it’s state during page loads / refreshes
- List Products – these should be listed at all times to allow adding of
  products
- Products should be listed in this format: product name, price, link to add
  product
- Must be able to add a product to the cart
- Must be able to view current products in the cart
- Cart products should be listed in this format: product name, price, quantity,
  total, remove link
- Product totals should be tallied to give an overall total
- Must be able to remove a product from the cart
- Adding an existing product will only update existing cart product quantity
  (e.g. adding the same product twice will NOT create two cart items)
- All prices should be displayed to 2 decimal places
- Error checking will be set to strict for viewing completed code
- Project will work as expected with the latest version of React
- Use best practices
- This task should take 1-2 hours max.

---

## Getting started

### Tech Stack

This application is based on the following tools/libraries:

- Progarmming Language: **TypeScript**.
- UI Render: **React/Redux, Material UI**.
- Bundler: **Webpack**.
- Lint check: **ESlint, eslint-config-airbnb-typescript**.
- Unit Testing: **Jest**.
- Web Server: **Express**.

### Setup

1. Clone the project from Git repo.
2. Make sure you have [Yarn](https://yarnpkg.com/) and node(Node.js LTS v12.X.X, NPM 6.X) installed.
3. Switch to top level directory.
4. `yarn` (Install necessary npm packages).

---

## Development Mode:

### Run dev mode

Dev mode enables [webpack-dev-middleware](https://webpack.js.org/guides/development/#using-webpack-dev-middleware), will cause `Webpack` to compile files in-memory - code changes are saved and updated when refreshing page in browser.

1. Switch to top level directory.
2. `yarn start:dev` to start web server.
3. Go to browser and hit http://localhost:3000/home to launch.

#### Static Analysis (Eslint)

All projects are covered with `eslint` rules to ESS standard in `eslint-config-airbnb-typescript`, [details](https://github.com/iamturns/eslint-config-airbnb-typescript).

1. Switch to top level directory.
2. Run `npm run check:lint` to do the lint check.
3. Review `src/tests/out/lint-report.html` for lint report.

### Unit tests

Specs for Unit Test all locate `src/tests/unit` and all the test files like `__tests__/*.test.tsx`.

1. Switch to top level directory.
2. Run `yarn test` to start the Unit Test.
3. Review `src/tests/out` for the reports.

---

## Production Mode:

### Run prod mode

1. Switch to top level directory.
2. Run `yarn build` (to pack web files via Webpack and convert JS into ES5 via Babel).
3. Run `yarn start` (to start web server in prod mode).
4. Go to browser and hit http://localhost:3000/home to launch.

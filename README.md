# My Playwright Learning

E2E test suite for SauceDemo built with Playwright and TypeScript.

## Setup

```bash
npm install
npx playwright install
```

## Run tests

```bash
# Run all tests
npx playwright test

# Run specific file
npx playwright test tests/login.spec.ts

# Run with HTML report
npx playwright test && npx playwright show-report
```

## Project structure

- `tests/` — test files (login, cart, checkout)
- `pages/` — Page Object classes
- `test-data/` — test credentials and inputs

## Test coverage

- Login: valid user, locked user
- Cart: add products, remove product, badge count
- Checkout: complete purchase flow
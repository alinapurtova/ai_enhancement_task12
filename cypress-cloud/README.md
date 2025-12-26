# Cypress E2E Testing Project

## Summary

This project contains end-to-end (E2E) tests for the Demoblaze e-commerce website using Cypress. The test suite includes:

- **Cart Tests**: Testing product addition, removal, and empty cart scenarios
- **Contact Form Tests**: Testing the contact form submission with dynamically generated test data using Faker.js

The tests utilize Cypress experimental `cy.prompt()` command for AI-powered test execution, allowing for natural language test scenarios.

## Requirements

Before installing and running the tests, ensure you have the following installed:

- **Node.js**: Version 14.x or higher (recommended: 16.x or 18.x)
- **npm**: Version 6.x or higher (comes with Node.js)
- **Git**: For cloning the repository (if applicable)

## Installation Steps

1. **Clone or navigate to the project directory**:
   ```bash
   cd cypress-claude
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

   This will install the following packages:
   - `cypress` (^15.8.1) - Testing framework
   - `@faker-js/faker` (^9.5.0) - Test data generation
   - `@cypress/webpack-dev-server` (^5.4.1) - Webpack dev server for Cypress

3. **Verify installation**:
   ```bash
   npx cypress verify
   ```

## How to Run Tests

### Run Tests in Headed Mode (Interactive)

Open Cypress Test Runner with a GUI:

```bash
npx cypress open
```

This will open the Cypress Test Runner where you can:
- Select a browser (Chrome, Edge, Electron, Firefox)
- Click on test files to run them individually
- Watch tests execute in real-time

### Run Tests in Headless Mode (CLI)

Run all tests in headless mode:

```bash
npx cypress run
```

Run a specific test file:

```bash
npx cypress run --spec "cypress/e2e/contact.cy.js"
```

```bash
npx cypress run --spec "cypress/e2e/cart.cy.js"
```

### Run Tests in a Specific Browser

```bash
npx cypress run --browser chrome
npx cypress run --browser firefox
npx cypress run --browser edge
npx cypress run --browser electron
```
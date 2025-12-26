# Playwright Automation Test Suite

## Summary

This project is an end-to-end test automation framework built with Playwright and TypeScript. It follows the Page Object Model (POM) pattern to test the DemoBlaze e-commerce website. The framework includes tests for user registration and shopping cart functionality.

**Key Features:**
- Page Object Model architecture for maintainable test code
- Cross-browser testing (Chromium, Firefox, WebKit)
- Random test data generation using Faker.js
- HTML test reports with detailed execution results
- TypeScript for type-safe test development

**Test Coverage:**
- **Add to Cart Test**: Validates product selection, adding items to cart, and cart verification
- **Sign Up Test**: Tests user registration with random credentials generation

## Requirements

Before installing and running the tests, ensure you have the following installed:

- **Node.js**: Version 16 or higher ([Download Node.js](https://nodejs.org/))
- **npm**: Usually comes with Node.js (verify with `npm --version`)
- **Git**: For cloning the repository (optional)

## Installation Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd playwright-cursor
   ```

2. **Install project dependencies**
   ```bash
   npm install
   ```
   This will install:
   - Playwright test framework
   - TypeScript and type definitions
   - Faker.js for test data generation
   - Playwright MCP server

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```
   This downloads the required browser binaries (Chromium, Firefox, WebKit).

4. **Verify installation**
   ```bash
   npx playwright --version
   ```

## How to Run Tests

### Run All Tests

Run all test files across all configured browsers:
```bash
npx playwright test
```

### Run Specific Test File

Run a single test file:
```bash
npx playwright test tests/add-to-cart.spec.ts
npx playwright test tests/sign-up.spec.ts
```

### Run Tests in Specific Browser

Run tests only in a specific browser:
```bash
# Chromium only
npx playwright test --project=chromium

# Firefox only
npx playwright test --project=firefox

# WebKit only
npx playwright test --project=webkit
```

### Run Tests in UI Mode

Run tests with interactive UI mode (recommended for debugging):
```bash
npx playwright test --ui
```

### Run Tests in Headed Mode

Run tests with visible browser (not headless):
```bash
npx playwright test --headed
```

### Run Tests with Debug Mode

Run tests with Playwright Inspector for step-by-step debugging:
```bash
npx playwright test --debug
```

## How to Generate Reports

### HTML Report (Default)

The project is configured to generate HTML reports automatically after test execution.

**View the latest report:**
```bash
npx playwright show-report
```

This opens the HTML report in your default browser showing:
- Test execution summary
- Pass/fail status for each test
- Execution time
- Screenshots and videos (if configured)
- Error details and stack traces

**Report location:**
- Reports are stored in the `playwright-report/` directory
- Each test run generates a new timestamped report

### Generate Report After Test Run

If you want to explicitly generate and view the report:
```bash
# Run tests and generate report
npx playwright test

# View the generated report
npx playwright show-report
```

---

## Project Structure

```
playwright-cursor/
├── pages/              # Page Object Model classes
│   ├── BasePage.ts
│   ├── HomePage.ts
│   ├── ProductPage.ts
│   ├── CartPage.ts
│   └── SignUpModalPage.ts
├── tests/              # Test specification files
│   ├── add-to-cart.spec.ts
│   └── sign-up.spec.ts
├── playwright.config.ts # Playwright configuration
├── package.json        # Project dependencies
└── README.md          # This file
```

## Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Faker.js Documentation](https://fakerjs.dev/)


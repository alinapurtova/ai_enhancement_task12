# Playwright Test Automation Framework

## Summary

This is a Page Object Model (POM) based test automation framework built with Playwright and TypeScript. The framework tests the demoblaze.com e-commerce website with a focus on maintainability, reusability, and scalability.

### Key Features:
- **Page Object Model (POM)** architecture with BasePage inheritance
- **TypeScript** for type safety and better IDE support
- **Cross-browser testing** (Chromium, Firefox, WebKit)
- **MCP-validated selectors** for reliability
- **Faker.js integration** for dynamic test data generation
- **Comprehensive test coverage** for login and video playback functionality

### Test Coverage:
- Negative login scenarios with validation
- Video playback functionality testing
- Modal interactions and state verification
- Alert handling and validation

## Requirements

### System Requirements:
- **Node.js**: v18 or higher
- **npm**: v9 or higher
- **Operating System**: Windows, macOS, or Linux

### Supported Browsers:
- Chromium
- Firefox
- WebKit (Safari)

## Installation Steps

### 1. Clone or Navigate to the Project
```bash
cd playwright-claude
```

### 2. Install Dependencies
```bash
npm install
```

This will install:
- `@playwright/test` - Playwright testing framework
- `@faker-js/faker` - Fake data generation library
- `@types/node` - TypeScript definitions for Node.js

### 3. Install Playwright Browsers
```bash
npx playwright install
```

This downloads the required browser binaries for Chromium, Firefox, and WebKit.

### 4. Verify Installation
```bash
npx playwright --version
```

You should see the Playwright version number displayed.

## How to Run Tests

### Run All Tests
Execute all test specs across all configured browsers:
```bash
npx playwright test
```

### Run Tests in Headed Mode
See the browser while tests are running:
```bash
npx playwright test --headed
```

### Run Specific Test File
Execute a single test spec:
```bash
npx playwright test negative-login.spec.ts
```

```bash
npx playwright test about-us-video.spec.ts
```

### Run Tests on Specific Browser
Run tests on a single browser:
```bash
npx playwright test --project=chromium
```

```bash
npx playwright test --project=firefox
```

```bash
npx playwright test --project=webkit
```

### Run Tests in Debug Mode
Step through tests with Playwright Inspector:
```bash
npx playwright test --debug
```

### Run Tests with UI Mode
Interactive UI for running and debugging tests:
```bash
npx playwright test --ui
```

### Run Tests in Parallel
Execute tests in parallel (default behavior):
```bash
npx playwright test --workers=4
```

### Run Tests Sequentially
Execute tests one at a time:
```bash
npx playwright test --workers=1
```

## How to Generate Reports

### HTML Report (Default)
Playwright automatically generates an HTML report after test execution.

#### View Last Report
```bash
npx playwright show-report
```

This opens the HTML report in your default browser.

#### Generate Report Manually
If you need to regenerate the report:
```bash
npx playwright test --reporter=html
```

### Report Location
The HTML report is saved in:
```
playwright-report/
├── index.html
└── data/
```

#### List Reporter
Simple console output:
```bash
npx playwright test --reporter=list
```

### Multiple Reporters
Use multiple reporters simultaneously:
```bash
npx playwright test --reporter=html,json,junit
```

### View Test Results
Test results and artifacts are stored in:
```
test-results/
├── negative-login-chromium/
├── about-us-video-firefox/
└── ...
```

Each folder contains:
- Screenshots (on failure)
- Videos (if configured)
- Traces (on retry)

### View Trace Files
Open trace viewer for debugging:
```bash
npx playwright show-trace test-results/[test-folder]/trace.zip
```

## Project Structure

```
playwright-claude/
├── pageObjects/
│   ├── BasePage.ts          # Base page with common methods
│   ├── LoginPage.ts          # Login functionality
│   └── AboutUsPage.ts        # About Us video functionality
├── specs/
│   ├── negative-login.spec.ts     # Negative login tests
│   └── about-us-video.spec.ts     # Video playback tests
├── playwright.config.ts      # Playwright configuration
├── package.json              # Dependencies
└── README.md                 # This file
```

## Test Scenarios

### Negative Login Test
**File**: `negative-login.spec.ts`

Tests unsuccessful login attempts with fake credentials:
1. Navigates to demoblaze.com
2. Opens login modal
3. Generates random fake credentials using Faker
4. Attempts login with invalid credentials
5. Verifies error message is displayed
6. Validates user remains logged out

**Browsers**: ✅ Chromium | ✅ Firefox | ✅ WebKit

### About Us Video Test
**File**: `about-us-video.spec.ts`

Tests video playback functionality:
1. Navigates to demoblaze.com
2. Opens About Us modal
3. Verifies video player is visible
4. Starts video playback
5. Validates video is playing
6. Verifies time progression
7. Closes modal

**Browsers**: ✅ Chromium | ✅ Firefox | ⏭️ WebKit (skipped - HLS format not supported)

## Configuration

### Browser Configuration
Edit `playwright.config.ts` to modify browser settings:
```typescript
projects: [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },
]
```

### Test Directory
Tests are located in the `specs/` directory by default.

### Parallel Execution
By default, tests run in parallel. Adjust in `playwright.config.ts`:
```typescript
fullyParallel: true,
workers: process.env.CI ? 1 : undefined,
```

### Retries
Configure retry behavior for failed tests:
```typescript
retries: process.env.CI ? 2 : 0,
```

## Troubleshooting

### Issue: Tests Fail in WebKit
**Solution**: The About Us video test is expected to skip on WebKit due to HLS video format compatibility. This is normal behavior.

### Issue: Browser Not Found
**Solution**: Run `npx playwright install` to download browser binaries.

### Issue: Module Not Found
**Solution**: Ensure all dependencies are installed with `npm install`.

### Issue: Port Already in Use
**Solution**: No local server is required. Tests run against https://demoblaze.com directly.

## Best Practices

1. **Always extend BasePage** when creating new page objects
2. **Use MCP to validate selectors** before implementing
3. **Keep test data in page objects** (like expectedLoginErrorMessages)
4. **Use meaningful test descriptions** for better reporting
5. **Run tests locally** before committing changes

## Contributing

When adding new tests:
1. Create page object in `pageObjects/` extending BasePage
2. Create test spec in `specs/`
3. Validate selectors using MCP tools
4. Follow existing naming conventions
5. Ensure tests pass on all browsers (or document skip reasons)

## Documentation

Additional documentation available in the project:
- `ai-instructions-claude.md` - Coding guidelines
- `BASEPAGE-REFACTORING.md` - Architecture details
- `MCP-VALIDATION-REPORT.md` - Selector validation for login tests
- `MCP-VALIDATION-REPORT-ABOUT-US.md` - Selector validation for video tests
# 1. Playwright-Cursor

## Rules (playwright-cursor/.cursor/rules.mdc)
```bash
# Playwright-MCP Coding Guidelines
---
description: Rules for AI agent working in Playwright MCP automation project
alwaysApply: true
globs:
  - "**/*.ts"
  - "playwright-cursor/**"
  - "**/*.spec.ts"
---

## 1. File Structure
- All code must live in `playwright-claude`:
  - Pages - `playwright-claude/pages`
  - Tests/Specs - `playwright-claude/tests`
  - Utils - `playwright-claude/utils`
- Do **not** create files outside these folders.

## 2. Page Object Model (POM)
- **MANDATORY**: Every spec MUST have a corresponding page object.
- Page objects define **all selectors and interactions**; specs contain **only test logic**.
- All page objects must extend a **BasePage** with reusable methods(like `click`, `type`, `waitForVisible`, `getText`, etc.)
- One page per file; export a single class.
- **Do not** include assertions or test data in page objects.

## 3. Locators
- Declare selectors as constants before the constructor and use the UPPERCASE for them.

const SAMSUNG_GALAXY_S6_LINK = 'a.hrefch:has-text("Samsung galaxy s6")';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async clickSamsungGalaxyS6(): Promise<void> {
    await this.page.click(SAMSUNG_GALAXY_S6_LINK);
  }
}


- Validate all selectors via MCP inspector; do not guess.
- Selector priority:
  1. `testId` / data attributes
  2. Accessibility roles / labels
  3. CSS
  4. XPath only if no alternative exists

## 4. Spec Files
- Must live in `playwright-claude/tests`.
- Follow AAA principle: **Arrange - Act - Assert**.
- Use explicit Playwright `expect` assertions.
- No hard-coded waits; use Playwright smart waits only.

## 5. MCP Usage
- Use MCP tools for UI inspection, locator validation, and navigation.
- Do **not** create random or auto-generated spec names/files.

## 6. Stability & Quality
- Tests must be independent; no shared state.
- Use `beforeEach` only for navigation.
- Avoid flaky waits and race conditions.
- Code must compile and run without manual fixes.
```

## Promts

'Verify user can add product to the cart' test

```bash
Create the new 'add-to-cart' test spec using Playwright MCP with the following steps:
1) Visit 'https://demoblaze.com/';
2) Scroll page to make products visible;
3) Click on the product 'Samsung galaxy s6';
4) Verify product page is opened and product title is visible;
5) Click on the 'Add to cart' button;
6) Verify alert appears with success message;
7) Accept the alert;
8) Open the Cart page;
9) Verify that 'Samsung galaxy s6' exists in the cart.

Use the rules provided.
```

'Verify successful sign up with random credentials' test
```bash
Create the new 'sign-up' test spec using Playwright MCP with the following steps:
1) Visit https://demoblaze.com/;
2) Click on the "Sign up" button in the navbar;
3) Generate random username and password using faker.js;
4) Enter generated username into the "username" field;
5) Enter generated password into the "password" field;
6) Click the "Sign up" button in the modal;
7) Verify successful sign up confirmation alert is displayed with text "Sign up successful.";
8) Accept alert;
```

# 2. Playwright-Claude

## Rules (playwright-claude/ai-instructions-claude.md)
```bash
# Coding Guidelines for Playwright-MCP Project

## 1. File Interaction
- Always interact only with files located in the `playwright-claude` folder.
- Do not read or modify files outside this folder.

## 2. Page Object Model (POM)
- **MANDATORY**: Every test spec MUST have corresponding page object files.
- Always use the **Page Object Model (POM)** pattern for structuring UI automation code.
- Store all page object files in:  `playwright-claude/pageObjects`
- **NEVER create spec files without creating their corresponding page objects first**.
- All locators and page interactions must be defined in page objects, not in spec files.
- All page objects must extend a BasePage class which contains common reusable methods (e.g., click, type, waitForVisible, getText ot other common).

## 3. Spec Files
- Always create spec/test files in:  `playwright-claude/specs`.
- Do not place spec files outside this folder.

## 4. MCP Usage
- All navigation, assertion, AND LOCATOR DISCOVERY must be performed via playwright-mcp.
- Use MCP browser/inspector to derive selectors, do not guess or hardcode without MCP validation.
- For every new/changed locator:
  - Validate via MCP;
  - Prefer role/name, label, placeholder, accessible names, or test IDs exposed in DOM.

## 5. Prevent Auto-Generated / Random Spec Files
- Do not allow LLM or MCP to create random spec files like `urltest_<uuid>.spec`.
- Ensure AI-generated spec files are only created in `playwright-claude/specs`.

## 6. General Notes
- Follow consistent naming conventions for pages and specs.
- Keep code modular and reusable within the defined folder structure.
- Review MCP logs to debug test execution if necessary.
```

## Promts

'Verify “About Us” video plays correctly' test

```bash
Create a new test spec for testing the About Us video playback with the following steps:
1. Visit https://demoblaze.com/;
2. Click on the "About us" link in the navbar;
3. Verify the “About us” modal is displayed;
4. Verify the video player is visible inside the modal;
5. Click the Play button to start the video;
6. Verify the video starts playing (video currentTime is increasing and paused is false);
7. Wait a few seconds;
8. Verify the video continues playing;
9. Click the Close button in the modal;
10. Verify the modal is closed and not visible anymore.

Use the rules provided.
```

'Verify login fails with fake credentials' test
```bash
Create the new 'negative-login' test spec using playwright MCP with following steps:
1. Visit https://demoblaze.com/;
2. Click on the "Log in" button in the navbar;
3. Generate a random fake username using faker.internet.userName();
4. Generate a random fake password using faker.internet.password();
5. Type generated fake username into the username field;
6. Type generated fake password into the password field;
7. Click "Log in" button inside the modal;
8. Verify login is unsuccessful;
9. Verify alert popup is displayed;
10. Verify alert message text contains either "User does not exist." or "Wrong password.";
11. Accept the alert;

Use the rules provided.
```
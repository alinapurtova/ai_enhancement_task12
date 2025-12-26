# Page Object Refactoring - BasePage Implementation

## Date: 2025-12-25

## Overview
Refactored the page object model to implement inheritance using a BasePage class. This reduces code duplication and provides a consistent interface across all page objects.

## Structure

```
pageObjects/
├── BasePage.ts          (Base class with common methods)
├── LoginPage.ts         (Extends BasePage)
└── AboutUsPage.ts       (Extends BasePage)
```

## BasePage Class

The `BasePage` class provides common functionality that all page objects can inherit:

### Navigation Methods
- `goto()` - Navigate to base URL
- `gotoPath(path)` - Navigate to specific path
- `getCurrentUrl()` - Get current page URL
- `getTitle()` - Get page title
- `reload()` - Reload page
- `goBack()` - Browser back navigation
- `goForward()` - Browser forward navigation

### Element Interaction Methods
- `click(locator)` - Click an element
- `fill(locator, text)` - Fill an input field
- `getText(locator)` - Get element text content
- `getAttribute(locator, name)` - Get element attribute

### Visibility & State Methods
- `isVisible(locator)` - Check if element is visible
- `isEnabled(locator)` - Check if element is enabled
- `isDisabled(locator)` - Check if element is disabled
- `waitForVisible(locator)` - Wait for element to be visible
- `waitForHidden(locator)` - Wait for element to be hidden

### Utility Methods
- `waitForSeconds(seconds)` - Wait for specific duration
- `handleAlert()` - Handle and accept JavaScript alert
- `dismissAlert()` - Handle and dismiss JavaScript alert

## Benefits

### 1. Code Reusability
Common methods like `click()`, `fill()`, `waitForVisible()` are defined once in BasePage and reused by all child pages.

**Before:**
```typescript
// In LoginPage
async clickLoginNav() {
  await this.loginNavButton.click();
  await this.loginModal.waitFor({ state: 'visible' });
}

// In AboutUsPage  
async clickAboutUsNav() {
  await this.aboutUsNavLink.click();
  await this.aboutUsModal.waitFor({ state: 'visible' });
}
```

**After:**
```typescript
// In LoginPage
async clickLoginNav() {
  await this.click(this.loginNavButton);
  await this.waitForVisible(this.loginModal);
}

// In AboutUsPage
async clickAboutUsNav() {
  await this.click(this.aboutUsNavLink);
  await this.waitForVisible(this.aboutUsModal);
}
```

### 2. Consistency
All page objects use the same methods for common operations, ensuring consistent behavior across the test suite.

### 3. Maintainability
Changes to common functionality only need to be made in one place (BasePage), automatically benefiting all child page objects.

### 4. Extensibility
New page objects can easily extend BasePage and immediately have access to all common methods.

### 5. Centralized Configuration
Base URL and other common configurations are defined in BasePage, making them easy to update.

## Usage Example

### Creating a New Page Object

```typescript
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ContactPage extends BasePage {
  readonly contactNavLink: Locator;
  readonly emailInput: Locator;
  readonly messageInput: Locator;
  readonly sendButton: Locator;

  constructor(page: Page) {
    super(page);
    
    this.contactNavLink = page.locator('#contact-link');
    this.emailInput = page.locator('#email');
    this.messageInput = page.locator('#message');
    this.sendButton = page.locator('#send-message');
  }

  async openContactForm() {
    await this.click(this.contactNavLink);
    await this.waitForSeconds(1);
  }

  async fillContactForm(email: string, message: string) {
    await this.fill(this.emailInput, email);
    await this.fill(this.messageInput, message);
  }

  async submitForm() {
    await this.click(this.sendButton);
  }
}
```

## Changes Made to Existing Pages

### LoginPage
- Now extends `BasePage`
- Uses `this.click()` instead of direct `locator.click()`
- Uses `this.fill()` instead of direct `locator.fill()`
- Uses `this.waitForVisible()` instead of `locator.waitFor()`
- Uses `this.isVisible()` instead of `locator.isVisible()`
- Inherits `handleAlert()` from BasePage

### AboutUsPage
- Now extends `BasePage`
- Uses `this.click()` instead of direct `locator.click()`
- Uses `this.waitForVisible()` instead of `locator.waitFor()`
- Uses `this.isVisible()` instead of `locator.isVisible()`
- Inherits `waitForSeconds()` from BasePage

## Backward Compatibility

The refactoring maintains backward compatibility:
- All existing test specs continue to work without modification
- The public API of page objects remains unchanged
- Only the internal implementation has been improved

## Best Practices

1. **Always extend BasePage** when creating new page objects
2. **Use BasePage methods** for common operations instead of direct Playwright calls
3. **Add page-specific methods** to child classes for unique functionality
4. **Keep locators as readonly properties** in child classes
5. **Call super(page)** in child class constructors

## Future Enhancements

Potential additions to BasePage:
- Screenshot capture methods
- Cookie management
- Local storage operations
- Network request interception
- Custom wait conditions
- Retry logic for flaky operations

import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { LoginPage } from '../pageObjects/LoginPage';

test.describe('Negative Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Verify login fails with fake credentials', async ({ page }) => {
    await loginPage.clickLoginNav();

    const fakeUsername = faker.internet.username();
    const fakePassword = faker.internet.password();

    await loginPage.fillUsername(fakeUsername);
    await loginPage.fillPassword(fakePassword);

    const alertPromise = loginPage.handleAlert();
    await loginPage.clickLoginButton();
    const alertMessage = await alertPromise;

    expect(alertMessage).toBeTruthy();

    expect(loginPage.isValidLoginErrorMessage(alertMessage)).toBe(true);

    await expect(loginPage.loginNavButton).toBeVisible();
    
    await expect(loginPage.logoutButton).not.toBeVisible();
  });
});

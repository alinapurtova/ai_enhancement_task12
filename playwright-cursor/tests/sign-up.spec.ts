import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { HomePage } from '../pages/HomePage';
import { SignUpModalPage } from '../pages/SignUpModalPage';

test('Verify successful sign up with random credentials', async ({ page }) => {
  const homePage = new HomePage(page);
  const signUpModalPage = new SignUpModalPage(page);
  const username = faker.internet.username();
  const password = faker.internet.password();

  await homePage.openHomePage();
  await signUpModalPage.clickSignUpButton();

  await signUpModalPage.enterUsername(username);
  await signUpModalPage.enterPassword(password);
  await signUpModalPage.clickSignUpButtonInModal();
});


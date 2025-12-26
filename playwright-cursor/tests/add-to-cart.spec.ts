import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';

test('Verify user can add product to the cart', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  await homePage.openHomePage();
  await homePage.scrollToProducts();
  await homePage.clickSamsungGalaxyS6();

  await productPage.verifyProductPageOpened();
  await productPage.verifyProductTitle();

  await productPage.clickAddToCart();

  await cartPage.openCart();

  await cartPage.verifyCartPageOpened();
  await cartPage.verifyProductInCart(productPage.getProductName());
});


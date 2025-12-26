import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

const CART_LINK = '#cartur';
const CART_TABLE = 'table tbody';
const PRODUCT_NAME = 'Samsung galaxy s6';
const PRODUCT_IN_CART = `tbody td:has-text("${PRODUCT_NAME}")`;
const CART_PAGE_URL_PATTERN = /.*cart\.html/;

export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async openCart(): Promise<void> {
    await this.page.click(CART_LINK);
    await this.verifyCartPageOpened();
    await this.page.waitForSelector(CART_TABLE, { state: 'attached' });
  }

  async verifyCartPageOpened(): Promise<void> {
    await this.verifyUrl(CART_PAGE_URL_PATTERN);
  }

  async verifyProductInCart(productName: string): Promise<void> {
    const productSelector = `tbody td:has-text("${productName}")`;
    const productLocator = this.page.locator(productSelector);
    await expect(productLocator).toBeVisible({ timeout: 10000 });
    const productText = await productLocator.textContent();
    expect(productText).toContain(productName);
  }
}


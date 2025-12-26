import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

const PRODUCT_TITLE = 'h2.name';
const ADD_TO_CART_BUTTON = 'a.btn-success:has-text("Add to cart")';
const PRODUCT_PAGE_URL_PATTERN = /.*prod\.html/;
const PRODUCT_NAME = 'Samsung galaxy s6';
const ALERT_SUCCESS_MESSAGE = 'Product added';

export class ProductPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async verifyProductPageOpened(): Promise<void> {
    await this.verifyUrl(PRODUCT_PAGE_URL_PATTERN);
  }

  async verifyProductTitle(): Promise<void> {
    const title = await this.getProductTitle();
    expect(title).toBe(PRODUCT_NAME);
  }

  async getProductTitle(): Promise<string | null> {
    return await this.page.locator(PRODUCT_TITLE).textContent();
  }

  async clickAddToCart(): Promise<void> {
    this.page.once('dialog', async (dialog) => {
      expect(dialog.message()).toContain(ALERT_SUCCESS_MESSAGE);
      await dialog.accept();
    });
    await this.page.click(ADD_TO_CART_BUTTON);
  }

  getProductName(): string {
    return PRODUCT_NAME;
  }
}


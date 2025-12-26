import { Page, expect } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async waitForVisible(selector: string): Promise<void> {
    await this.page.waitForSelector(selector, { state: 'visible' });
  }

  async verifyUrl(urlPattern: RegExp): Promise<void> {
    await expect(this.page).toHaveURL(urlPattern);
  }
}


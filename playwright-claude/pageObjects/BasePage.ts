import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  protected readonly baseUrl: string = 'https://demoblaze.com/';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(this.baseUrl);
  }

  async gotoPath(path: string) {
    await this.page.goto(`${this.baseUrl}${path}`);
  }

  async click(locator: Locator) {
    await locator.click();
  }

  async fill(locator: Locator, text: string) {
    await locator.fill(text);
  }

  async isVisible(locator: Locator): Promise<boolean> {
    return await locator.isVisible();
  }

  async waitForVisible(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
  }

  async waitForHidden(locator: Locator) {
    await locator.waitFor({ state: 'hidden' });
  }

  async waitForSeconds(seconds: number) {
    await this.page.waitForTimeout(seconds * 1000);
  }

  async handleAlert(): Promise<string> {
    return new Promise<string>((resolve) => {
      this.page.once('dialog', async (dialog) => {
        const message = dialog.message();
        resolve(message);
        await dialog.accept();
      });
    });
  }

  async dismissAlert(): Promise<string> {
    return new Promise<string>((resolve) => {
      this.page.once('dialog', async (dialog) => {
        const message = dialog.message();
        resolve(message);
        await dialog.dismiss();
      });
    });
  }

  async getText(locator: Locator): Promise<string | null> {
    return await locator.textContent();
  }

  async getAttribute(locator: Locator, attributeName: string): Promise<string | null> {
    return await locator.getAttribute(attributeName);
  }

  async isEnabled(locator: Locator): Promise<boolean> {
    return await locator.isEnabled();
  }

  async isDisabled(locator: Locator): Promise<boolean> {
    return await locator.isDisabled();
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async reload() {
    await this.page.reload();
  }

  async goBack() {
    await this.page.goBack();
  }

  async goForward() {
    await this.page.goForward();
  }
}

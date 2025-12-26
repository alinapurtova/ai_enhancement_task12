import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

const BASE_URL = 'https://demoblaze.com/';
const SAMSUNG_GALAXY_S6_LINK = 'a.hrefch:has-text("Samsung galaxy s6")';
const SCROLL_POSITION = 500;

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async openHomePage(): Promise<void> {
    await this.open(BASE_URL);
  }

  async scrollToProducts(): Promise<void> {
    await this.page.evaluate((position) => window.scrollTo(0, position), SCROLL_POSITION);
  }

  async clickSamsungGalaxyS6(): Promise<void> {
    await this.page.click(SAMSUNG_GALAXY_S6_LINK);
  }
}


import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

const SIGN_UP_BUTTON_NAVBAR = '#signin2';
const USERNAME_FIELD = '#sign-username';
const PASSWORD_FIELD = '#sign-password';
const SIGN_UP_BUTTON_MODAL = 'button[onclick="register()"]';
const ALERT_SUCCESS_MESSAGE = 'Sign up successful.';

export class SignUpModalPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async clickSignUpButton(): Promise<void> {
    await this.page.click(SIGN_UP_BUTTON_NAVBAR);
  }

  async enterUsername(username: string): Promise<void> {
    await this.page.fill(USERNAME_FIELD, username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.page.fill(PASSWORD_FIELD, password);
  }

  async clickSignUpButtonInModal(): Promise<void> {
    this.page.once('dialog', async (dialog) => {
      expect(dialog.message()).toBe(ALERT_SUCCESS_MESSAGE);
      await dialog.accept();
    });
    await this.page.click(SIGN_UP_BUTTON_MODAL);
  }

  getSuccessMessage(): string {
    return ALERT_SUCCESS_MESSAGE;
  }
}


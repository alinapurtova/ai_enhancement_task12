import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly loginNavButton: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginModalButton: Locator;
  readonly logoutButton: Locator;
  readonly loginModal: Locator;
  
  readonly expectedLoginErrorMessages = [
    'User does not exist.',
    'Wrong password.'
  ];

  constructor(page: Page) {
    super(page);
    
    this.loginNavButton = page.locator('#login2');
    this.loginModal = page.locator('#logInModal');
    this.usernameInput = page.locator('#loginusername');
    this.passwordInput = page.locator('#loginpassword');
    this.loginModalButton = page.locator('#logInModal button.btn-primary:has-text("Log in")');
    this.logoutButton = page.locator('#logout2');
  }

  async clickLoginNav() {
    await this.click(this.loginNavButton);
    await this.waitForVisible(this.loginModal);
  }

  async fillUsername(username: string) {
    await this.fill(this.usernameInput, username);
  }

  async fillPassword(password: string) {
    await this.fill(this.passwordInput, password);
  }

  async clickLoginButton() {
    await this.click(this.loginModalButton);
  }

  async isLoginButtonVisible() {
    return await this.isVisible(this.loginNavButton);
  }

  async isLogoutButtonVisible() {
    return await this.isVisible(this.logoutButton);
  }

  isValidLoginErrorMessage(message: string): boolean {
    return this.expectedLoginErrorMessages.some(expectedMsg => 
      message.includes(expectedMsg)
    );
  }
}

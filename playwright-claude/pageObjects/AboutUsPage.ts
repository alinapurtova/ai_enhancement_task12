import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class AboutUsPage extends BasePage {
  readonly aboutUsNavLink: Locator;
  readonly aboutUsModal: Locator;
  readonly videoElement: Locator;
  readonly playButton: Locator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    super(page);
    
    this.aboutUsNavLink = page.locator('a[data-target="#videoModal"]');
    this.aboutUsModal = page.locator('#videoModal');
    this.videoElement = page.locator('#example-video_html5_api');
    this.playButton = page.locator('.vjs-big-play-button');
    this.closeButton = this.aboutUsModal.locator('button.close');
  }

  async clickAboutUsNav() {
    await this.click(this.aboutUsNavLink);
    await this.waitForVisible(this.aboutUsModal);
  }

  async isModalVisible() {
    return await this.isVisible(this.aboutUsModal);
  }

  async isVideoVisible() {
    return await this.isVisible(this.videoElement);
  }

  async clickPlayButton() {
    await this.click(this.playButton);
  }

  async getVideoCurrentTime(): Promise<number> {
    return await this.videoElement.evaluate((video: HTMLVideoElement) => video.currentTime);
  }

  async isVideoPaused(): Promise<boolean> {
    return await this.videoElement.evaluate((video: HTMLVideoElement) => video.paused);
  }

  async clickCloseButton() {
    await this.click(this.closeButton);
  }
}

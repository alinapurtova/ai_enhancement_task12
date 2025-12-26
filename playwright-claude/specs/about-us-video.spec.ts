import { test, expect } from '@playwright/test';
import { AboutUsPage } from '../pageObjects/AboutUsPage';

test.describe('About Us Video Playback Tests', () => {
  let aboutUsPage: AboutUsPage;

  test.beforeEach(async ({ page }) => {
    aboutUsPage = new AboutUsPage(page);
    await aboutUsPage.goto();
  });

  test('Verify “About Us” video plays correctly', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit', 'HLS video format (.m3u8) is not supported in WebKit');

    await aboutUsPage.clickAboutUsNav();

    await expect(aboutUsPage.aboutUsModal).toBeVisible();

    await expect(aboutUsPage.videoElement).toBeVisible();

    await aboutUsPage.clickPlayButton();

    await aboutUsPage.waitForSeconds(2);
    
    const initialTime = await aboutUsPage.getVideoCurrentTime();
    const isPaused = await aboutUsPage.isVideoPaused();
    
    expect(isPaused).toBe(false);
    expect(initialTime).toBeGreaterThan(0);

    await aboutUsPage.waitForSeconds(3);

    const laterTime = await aboutUsPage.getVideoCurrentTime();
    expect(laterTime).toBeGreaterThan(initialTime);
    
    const stillPaused = await aboutUsPage.isVideoPaused();
    expect(stillPaused).toBe(false);

    await aboutUsPage.clickCloseButton();

    await expect(aboutUsPage.aboutUsModal).not.toBeVisible();
  });
});

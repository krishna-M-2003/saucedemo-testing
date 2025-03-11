import { test, expect, Page } from '@playwright/test';

test.describe('checkout process Tests', () => {
    test('should complete checkout successfully', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="login-button"]').click();
        // await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="firstName"]').click();
        await page.locator('[data-test="firstName"]').fill('raja');
        await page.locator('[data-test="lastName"]').click();
        await page.locator('[data-test="lastName"]').fill('m');
        await page.locator('[data-test="postalCode"]').click();
        await page.locator('[data-test="postalCode"]').fill('345232');
        await expect(page.locator('[data-test="continue"]')).toBeVisible();
        await page.locator('[data-test="continue"]').click();
        await expect(page.locator('[data-test="inventory-item"]')).toBeVisible();
        await expect(page.locator('[data-test="finish"]')).toBeVisible();
        await page.locator('[data-test="finish"]').click();
        await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
        await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
        await page.locator('[data-test="back-to-products"]').click();
    });

});
import { test, expect } from '@playwright/test';
import { afterEach, describe } from 'node:test';


describe('Authentication Tests', () => {
    
    test.beforeEach(async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    });

    test('should navigate to the homepage', async ({ page }) => {
        // await page.goto('https://www.saucedemo.com/');
        await expect(page).toHaveURL('https://www.saucedemo.com/');
        });

    test('should login successfully with valid user name and password', async ({ page }) => {
        // await page.goto('https://www.saucedemo.com/');
        await expect(page.locator('[data-test="username"]')).toBeVisible();
        await expect(page.locator('[data-test="password"]')).toBeVisible();
        await expect(page.locator('[data-test="login-button"]')).toBeVisible();
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
    });

    test('should not login successfully with Invalid user name and password', async ({ page }) => {
        // await page.goto('https://www.saucedemo.com/');
        await expect(page.locator('[data-test="username"]')).toBeVisible();
        await expect(page.locator('[data-test="password"]')).toBeVisible();
        await expect(page.locator('[data-test="login-button"]')).toBeVisible();
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standarduser');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secretsacue');
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="error"]')).toBeVisible();
        await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
        await expect(page.locator('[data-test="error"]')).toMatchAriaSnapshot(`
          - 'heading "Epic sadface: Username and password do not match any user in this service" [level=3]':
            - button
          `);
    });

    test('should not login successfully with Invalid user name and valid password', async ({ page }) => {
        // await page.goto('https://www.saucedemo.com/');
        await expect(page.locator('[data-test="username"]')).toBeVisible();
        await expect(page.locator('[data-test="password"]')).toBeVisible();
        await expect(page.locator('[data-test="login-button"]')).toBeVisible();
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="username"]').press('ArrowLeft');
        await page.locator('[data-test="username"]').press('ArrowLeft');
        await page.locator('[data-test="username"]').press('ArrowLeft');
        await page.locator('[data-test="username"]').press('ArrowLeft');
        await page.locator('[data-test="username"]').fill('standarduuser');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="error"]')).toBeVisible();
        await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
        await page.locator('[data-test="login-button"]').click();
        await page.locator('[data-test="login-button"]').click();
    });

    test('should not login successfully with valid user name and Invalid password', async ({ page }) => {
        // await page.goto('https://www.saucedemo.com/');
        await expect(page.locator('[data-test="username"]')).toBeVisible();
        await expect(page.locator('[data-test="password"]')).toBeVisible();
        await expect(page.locator('[data-test="login-button"]')).toBeVisible();
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secrt__sattce');
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });

});

describe('after login functionality', () => {
    test('should filter product works', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await expect(page.locator('[data-test="username"]')).toBeVisible();
        await expect(page.locator('[data-test="password"]')).toBeVisible();
        await expect(page.locator('[data-test="login-button"]')).toBeVisible();
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="product-sort-container"]')).toBeVisible();
        await page.locator('[data-test="product-sort-container"]').selectOption('az');
        await page.locator('[data-test="product-sort-container"]').selectOption('za');
        await expect(page.locator('[data-test="item-3-title-link"]')).toBeVisible();
        await expect(page.locator('[data-test="item-3-title-link"] [data-test="inventory-item-name"]')).toContainText('Test.allTheThings() T-Shirt (Red)');
        await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
        await expect(page.getByText('$7.99')).toBeVisible();
        await expect(page.getByText('$9.99')).toBeVisible();
        await expect(page.getByText('$15.99').first()).toBeVisible();
        await expect(page.getByText('$15.99').nth(1)).toBeVisible();
        await expect(page.getByText('$29.99')).toBeVisible();
        await expect(page.getByText('$49.99')).toBeVisible();
        await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
        await expect(page.getByText('$49.99')).toBeVisible();
        await expect(page.getByText('$29.99')).toBeVisible();
        await expect(page.getByText('$15.99').first()).toBeVisible();
        await expect(page.getByText('$15.99').nth(1)).toBeVisible();
        await expect(page.getByText('$9.99')).toBeVisible();
        await expect(page.getByText('$7.99')).toBeVisible();
    });
});

// describe('addToCart functionality', () => {
    
// });


import { test, expect, Page } from '@playwright/test';
import { afterEach, describe } from 'node:test';

describe('cart tests', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        });

    test('should add items to the cart', async({ page }) => {
        await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
        await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await expect(page.locator('[data-test="cart-list"]')).toBeVisible();
    });

    // const addItemToCart = async (page: Page) => {
    //     await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
    //     await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    //     await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    //   };

    //   const removeItemFromCart = async (page: Page) => {
    //     await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    //     await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).not.toBeVisible();
    //   };

    
    test('should remove product from cart', async ({ page }) => {
        await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
        await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await expect(page.locator('[data-test="cart-list"]')).toBeVisible();
        await expect(page.locator('[data-test="cart-list"]')).toBeVisible();
        await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
        await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
        await expect(page.locator('[data-test="cart-list"]')).toBeVisible();
        await expect(page.locator('[data-test="continue-shopping"]')).toBeVisible();
        await page.locator('[data-test="continue-shopping"]').click();
      });
});

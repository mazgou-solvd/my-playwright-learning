import { test, expect } from '@playwright/test';

test.describe('Checkout tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
  });

  test('user can complete checkout and see success message', async ({ page }) => {
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill('John');
    await page.locator('[data-test="lastName"]').fill('Doe');
    await page.locator('[data-test="postalCode"]').fill('12345');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
  });

});
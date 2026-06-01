import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test-data/users';

test.describe('Sorting tests', () => {

  test('user can sort products by price low to high', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(users.standard.username, users.standard.password);

    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');

    const prices = await page.locator('[data-test="inventory-item-price"]').allTextContents();
    const numbers = prices.map(p => parseFloat(p.replace('$', '')));

    for (let i = 0; i < numbers.length - 1; i++) {
      expect(numbers[i]).toBeLessThanOrEqual(numbers[i + 1]);
    }
  });

});
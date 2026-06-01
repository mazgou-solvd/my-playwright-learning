import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { users } from '../test-data/users';

test.describe('Checkout tests', () => {

  test('user can complete checkout and see success message', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.open();
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.addToCart('sauce-labs-backpack');
    await inventoryPage.goToCart();
    await cartPage.checkout();
    await checkoutPage.fillInfo('John', 'Doe', '12345');
    await checkoutPage.finish();
    await expect(checkoutPage.successHeader).toHaveText('Thank you for your order!');
  });

});
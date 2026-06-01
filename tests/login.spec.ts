import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test-data/users';

test.describe('Login tests', () => {

  test('valid user can log in and see inventory page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(page).toHaveURL(/inventory/);
  });

  test('locked user cannot log in and sees correct error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(users.locked.username, users.locked.password);
    await expect(loginPage.errorMessage).toContainText('locked out');
  });

});
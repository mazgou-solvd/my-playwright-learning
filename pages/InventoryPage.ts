import { type Locator, type Page } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async addToCart(productId: string) {
    await this.page.locator(`[data-test="add-to-cart-${productId}"]`).click();
  }

  async goToCart() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }
}
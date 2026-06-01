import { type Locator, type Page } from "@playwright/test";

export class CheckoutPage {
  readonly page: Page;
  readonly successHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.successHeader = page.locator('[data-test="complete-header"]');
  }

  async fillInfo(firstName: string, lastName: string, zip: string) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(zip);
    await this.page.locator('[data-test="continue"]').click();
  }

  async finish() {
    await this.page.locator('[data-test="finish"]').click();
  }
}
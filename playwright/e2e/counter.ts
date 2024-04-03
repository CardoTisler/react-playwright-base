import {createBdd} from "playwright-bdd";
import {expect} from "@playwright/test";

const { Given, Then, When } = createBdd();

Given('user is in app', async ({ page }) => {
  await page.goto('/');
})
When('user clicks on counter 3 times', async ({ page }) => {
  await page.getByRole('button', { name: 'count is' }).click();
  await page.getByRole('button', { name: 'count is' }).click();
  await page.getByRole('button', { name: 'count is' }).click();
})

Then('user can see {string}', async ({ page }, value) => {
  await expect(page.getByRole('button')).toContainText(value);
})

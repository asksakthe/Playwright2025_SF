// tests/leads.spec.ts
import { test, expect } from '@playwright/test';

test('Access Leads page directly and validate', async ({ page }) => {
  await page.goto('/lightning/o/Lead/list');

  await expect(page.locator('h1')).toContainText('Leads');

  // Do something on the leads table
  await page.locator('input[placeholder*="Search"]').fill('Test Lead');
  await page.keyboard.press('Enter');

  await expect(page.locator('a:has-text("Test Lead")')).toBeVisible();
});

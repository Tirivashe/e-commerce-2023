import { test, expect } from "@playwright/test";

test.describe("home", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  test("has title", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("My Mantine app");

    const heading = page.getByRole("heading", { name: "Home" });
    await expect(heading).toBeVisible();
  });
});

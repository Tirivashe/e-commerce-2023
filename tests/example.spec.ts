import { test, expect } from "@playwright/test";

const url = process.env.APP_URL;

test.describe("home", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url ?? "");
  });

  test("has title", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("My Mantine app");

    const heading = page.getByRole("heading", { name: "Home" });
    await expect(heading).toBeVisible();
  });
});

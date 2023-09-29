import { test, expect } from "@playwright/test";

const url = process.env.APP_URL;

test.describe("home", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url ?? "");
  });

  test("Hello world to show on the screen", async ({ page }) => {
    const heading = page.getByRole("heading", { name: "Hello World" });
    await expect(heading).toBeVisible();
  });
});

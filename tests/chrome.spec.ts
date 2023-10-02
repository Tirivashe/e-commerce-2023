import { test, devices } from "@playwright/test";
//import lighthouseDesktopConfig from "lighthouse/lighthouse-core/config/lr-desktop-config";
const url = process.env.APP_URL || "http://localhost:3000";

test.describe("chrome performance", () => {
  test.skip(({ browserName }) => browserName !== "chromium", "Chromium only!");
  test.skip(() => url === "http://localhost:3000");

  test("should reach the threshold", async ({ playwright }) => {
    let { playAudit } = await import("playwright-lighthouse");
    const browser = await playwright["chromium"].launch({
      args: ["--remote-debugging-port=9222"],
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(url);

    await playAudit({
      page,
      thresholds: {
        performance: 90,
        accessibility: 95,
        "best-practices": 95,
        seo: 100,
      },
      port: 9222,
      reports: {
        formats: { html: true, json: true },
        name: `lighthouse-report-home: ${Date.now().toString()}`,
        directory: "lighthouse-report",
      },
    });

    await page.close();
    await context.close();
    await browser.close();
  });
});

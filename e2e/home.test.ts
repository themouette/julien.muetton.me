import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { startE2eTest, type App } from "./helpers/start-e2e-test";
import "./helpers/to-match-image-snapshot";

describe("Home test", () => {
  let app: App;
  beforeAll(async () => {
    app = await startE2eTest();
  });

  afterAll(async () => {
    await app?.stop();
  });

  const viewports = [
    { width: 320, height: 568 },
    { width: 1024, height: 768 },
  ];
  const urls = ["/", "/credits", "/resume"];

  describe.each(viewports)("viewport %j", (viewport) => {
    beforeAll(async () => {
      await app.page.setViewport(viewport);
    });

    it.each(urls)("url %s", async (url) => {
      const page = await app.navigate(url);
      expect(await page.screenshot({ fullPage: true })).toMatchImageSnapshot();
    });
  });
});

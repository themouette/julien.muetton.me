import type { Page } from "puppeteer";
import { startProcess } from "./start-process";
import { Browser, launch } from "puppeteer";

export type App = {
  navigate(path: string): Promise<Page>;
  stop(): Promise<void>;
  browser: Browser;
  page: Page;
};

export interface StartE2eTestOptions {
  /**
   * start the browser in headless mode
   * default to true
   */
  headless?: boolean;
  defaultViewport?: {
    width: number;
    height: number;
  } | null;
}

async function openBrowser({
  headless = true,
  defaultViewport = null,
}: StartE2eTestOptions) {
  let browser = await launch({
    headless,
    defaultViewport,
    // Enable to see the browser logs
    // dumpio: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  let page = await browser.newPage();
  return { browser, page };
}

export async function startE2eTest(
  options: StartE2eTestOptions = {}
): Promise<App> {
  // then start the process and open the browser
  let [{ port, stop }, { browser, page }] = await Promise.all([
    startProcess(),
    openBrowser(options),
  ]);

  return {
    browser,
    page,
    // this function, will navigate to the given path using the correct port
    // and it will return the Puppeteer Testing Library's document object
    async navigate(path: string) {
      let url = new URL(path, `http://localhost:${port}`);
      await page.goto(url.toString(), { waitUntil: "networkidle2" });
      return page;
    },
    async stop() {
      await stop();
      await browser.close();
    },
  };
}

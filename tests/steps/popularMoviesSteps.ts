import {
  expect,
  Page,
  Browser,
  chromium,
  Locator,
  test,
} from "@playwright/test";
import { createBdd, DataTable } from "playwright-bdd";
import BasePage from "../pages/basePage";
import { Given, When, Then, Fixture } from "playwright-bdd/decorators";
import GlobalFunctions from "../utils/globalFunctions";

export default
@Fixture<typeof test>("popularMoviesSteps")
class popularMoviesSteps {
  constructor(page: Page) {
    this.page = page;
  }

  // -------------------------------------------------- variables --------------------------------------------------------------------

  private page: Page;
  private browser: Browser;
  public basePage: BasePage;
  private storedElementsTexts: Record<string, string> = {};

  //---------------------------------------------------- functions -------------------------------------------------------------------

  @Given(/^User navigate to (.+)$/)
  async navigateToPage(urlString: string): Promise<void> {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
    await this.page.goto(urlString);
    this.basePage = new BasePage(this.page);
  }

  @Then(/^page element (.+) text is (.+)$/)
  async checkPageElementText(element: string, txtParameter: string) {
    let elementLocator: Locator = await this.basePage[element];
    let textContent = await elementLocator.textContent();
    await expect(textContent?.trim().toLowerCase()).toBe(
      this.basePage[txtParameter].trim().toLowerCase()
    );
  }

  @When(/^User click on (.+)$/)
  async userClick(buttonElement: string) {
    let button = await this.basePage[buttonElement];

    await button.click();
  }

  @Then(/^page to have title (.+)$/)
  async checkPageTitle(title: string) {
    let titleReturned: string = await this.page.title();
    await expect(titleReturned).toBe(title);
  }

  @Given(/^user hover on (.+)$/)
  async hoverElement(element: string) {
    let hoverElement: Locator = await this.basePage[element];
    await hoverElement.hover();
  }

  @Then(/^check container (.+) childrens$/)
  async checkContainerChildrens(containerEelement: string, table: DataTable) {
    let container: Locator = await this.basePage[containerEelement];

    await container.waitFor({ state: "visible" });
    let childrens: string[] = await container.allInnerTexts();
    let values: string[] = childrens[0]
      .split("\n")
      .filter((str) => str.trim() !== "");
    let count: number = 0;
    let status: boolean = true;

    let t: string[][] = table.raw();

    values.forEach((e) => {
      if (t[count][0].trim().toLowerCase() != e.trim().toLowerCase()) {
        status = false;
      }
      count++;
    });

    await expect(status).toBeTruthy();
  }

  @Then(/^User waits for (.+) to be visible$/)
  async checkVisiblity(element: string) {
    const visibleElement: Locator = this.basePage[element];
    const maxRetries = 10; // Number of retries
    const retryInterval = 100; // Milliseconds between retries
    let isVisible = false;

    for (let count = 0; count < maxRetries; count++) {
      isVisible = await visibleElement.isVisible();
      if (isVisible) break;
      await new Promise((resolve) => setTimeout(resolve, retryInterval));
    }

    // Assert visibility
    await expect(isVisible).toBeTruthy();
  }

  @Given(/^User fill (.+) by (.+)$/)
  async fillElement(element: string, txtParameter: string) {
    let elementLocator: Locator = this.basePage[element];
    await elementLocator.fill(this.basePage[txtParameter]);
  }

  @When(/^User press (.+) key$/)
  async pressKey(key: string) {
    await this.page.keyboard.press(key);
  }

  @Then(/^User to wait for url (.+)$/)
  async waitForUrl(url: string) {
    let count: number = 0;
    let result: boolean = true;
    let pageUrl = this.page.url();

    while (pageUrl.indexOf(this.basePage[url]) == -1) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      if (count == 20) {
        result = false;
        break;
      }

      pageUrl = this.page.url();

      count++;
    }
    await expect(result).toBeTruthy();
  }


  @Then(/^Page element (.+) attribute (.+) equal (.+)$/)
  async checkPropertyValue(element: string, property: string, value: string) {
    const elementLocator = this.basePage[element];
    const data = await elementLocator.getAttribute(property);
    await expect(data).toBe(value);
  }
}

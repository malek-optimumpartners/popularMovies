import { expect, Page, Browser, chromium, Locator } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import BasePage from "../pages/basePage";
const { Given, When, Then } = createBdd();
let page: Page;
let browser: Browser;
let basePage:BasePage;

Given('User navigate to {string}', async ({}, urlString: string) => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto(urlString);
    basePage=new BasePage(page);
    //await expect(await page.title).toBe('Popular Movies — The Movie Database (TMDB)');
});

Given('User click on {string}', async ({},buttonElement:string) => {
    let button = await basePage[buttonElement];
    
    await button.click();

  });
  
  Then('page element {string} text is {string}', async ({},element:string,txt:string) => {
    let elementLocator:Locator=await basePage[element];
    let textContent=await elementLocator.textContent();
    await expect(textContent).toBe(txt);
    expect(elementLocator).
  });
  


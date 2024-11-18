import { expect, Page, Browser, chromium, Locator } from '@playwright/test';
import { createBdd, DataTable } from 'playwright-bdd';
import BasePage from "../pages/basePage";
import GlobalFunctions from "../utils/globalFunctions";

const { Given, When, Then } = createBdd();

// -------------------------------------------------- variables --------------------------------------------------------------------

let page: Page;
let browser: Browser;
let basePage:BasePage;
let storedElementsTexts: Record<string, string> = {};

//---------------------------------------------------- functions -------------------------------------------------------------------

Given('User navigate to {string}', async ({}, urlString: string) => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto(urlString);
    basePage=new BasePage(page);
});

Given('User click on {string}', async ({},buttonElement:string) => {
    let button = await basePage[buttonElement];
    
    await button.click();

  });
  
  Then('page element {string} text is {string}', async ({},element:string,txt:string) => {
    let elementLocator:Locator=await basePage[element];
    let textContent=await elementLocator.textContent();
    await expect(textContent).toBe(txt);
    
  });
  
  Then('page to have title {string}',async ({},title:string) => {
    let titleReturned:string = await page.title();
    await expect(titleReturned).toBe(title);
  });

  Given('user hover on {string}',async ({},element:string) => {
    let hoverElement:Locator=await basePage[element];
    await hoverElement.hover();
  });

  Then('check container {string} childrens',async ({},containerEelement:string, table: DataTable) => {
    let container:Locator=await basePage[containerEelement];

    await container.waitFor({ state: 'visible' });
    let childrens:string[]=await container.allInnerTexts();
    let values:string[]=childrens[0].split('\n');
    let count:number=0;
    let status:boolean=true;

    // for (const row of table.raw()) {
    //     selectors.push(modelPage[row[1]]);
    //   }
    let t:string[][]=table.raw();

    values.forEach((e)=>{
        if (t[count][0]!=e) {
            status=false;
            console.log("xxxx ",t[count][0],e);
        }
        count++;
    })

    await expect(status).toBeTruthy();
  });

  Given('User wait for {string} to be visible',async ({},element:string) => {
    let visibleElement:Locator=basePage[element];
    while (!visibleElement.isVisible) {
        await new Promise(resolve => setTimeout(resolve, 100));;
    }
  });

  Given('test',async ({}) => {
    

    
  });

/**check the functionality of any thing in the page like:
- search 
- sort 
- visibility
-  click and check 
-  check if the url link changed or not
 */
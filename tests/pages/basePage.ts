import { Page,Locator } from '@playwright/test';

export default class BasePage {
    private basePage:Page;

    //Locators ------------
    sortTap:Locator;
    sortLable:Locator;
    header:Locator;

    constructor(page:Page) {
        this.basePage=page;
        //initialize locators ---------------
        this.sortTap=page.locator("//h2[normalize-space(text())='Sort']");
        this.sortLable=page.locator("(//div[@class='filter']//h3)[1]");
        this.header=page.locator("//div[@class='title']//h2[1]");
    }
}
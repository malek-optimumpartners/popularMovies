import { Page,Locator } from '@playwright/test';

export default class BasePage {
    private basePage:Page;

    //Locators ------------
    sortTap:Locator;
    sortLable:Locator;
    header:Locator;
    movieMenuButton:Locator;
    movieMenuContainer:Locator;
    tvShowButton:Locator;
    tvShowContainer:Locator;
    searchButton:Locator;
    firstElementTrending:Locator;

    constructor(page:Page) {
        this.basePage=page;
        //initialize locators ---------------
        this.sortTap=page.locator("//h2[normalize-space(text())='Sort']");
        this.sortLable=page.locator("(//div[@class='filter']//h3)[1]");
        this.header=page.locator("//div[@class='title']//h2[1]");
        this.movieMenuButton=page.locator("a[aria-label='Movies']");
        this.movieMenuContainer=page.locator("(//div[@data-role='popup'])[1]");
        this.tvShowButton=page.locator("a[aria-label='TV Shows']");
        this.tvShowContainer=page.locator("(//div[@data-role='popup'])[2]");
        this.searchButton=page.locator("a.search");
        this.firstElementTrending=page.locator("(//span[@data-media-type='/tv'])[1]");
    }
}
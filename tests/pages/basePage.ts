import { Page,Locator } from '@playwright/test';

export default class BasePage {
    private basePage:Page;

    //static identifier -----------------
    searchUrl:string="https://www.themoviedb.org/search";
    searchKeyExample:string="prison break";
    sortLabelText:string="Sort Results By";
    headerText:string="Popular Movies";

    //Locators ------------
    sortTap:Locator;
    sortLable:Locator;
    header:Locator;
    movieMenuButton:Locator;
    movieMenuContainer:Locator;
    tvShowButton:Locator;
    tvShowContainer:Locator;
    searchButton:Locator;
    searchTextBox:Locator;
    firstElementTrending:Locator;
    genersContainer:Locator;
    firstSearchResultTitle:Locator;

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
        this.searchTextBox=page.locator("#search_v4");
        this.firstElementTrending=page.locator("(//span[@data-media-type='/tv'])[1]");
        this.genersContainer=page.locator("#with_genres");
        this.firstSearchResultTitle=page.locator("(//a[@data-media-adult='false']//h2)[1]");
    }
}
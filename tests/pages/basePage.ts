import { Page,Locator } from '@playwright/test';

export default class BasePage {
    private basePage:Page;

    //static identifier -----------------
    searchUrl:string="https://www.themoviedb.org/search";
    searchKeyExample:string="prison break";
    sortLabelText:string="Sort Results By";
    headerText:string="Popular Movies";
    signUpUrl:string="https://www.themoviedb.org/signup";
    userName:string="maltub";
    passWord:string="Abcd-1234";
    email:string="malek.tubaishat@optimumpartners.co"
    humanConfirmationText:string="Let's confirm you are human";
    changeUserScoreProperty:string="style";
    changeUserScoreStyleToMax:string="left: 226.4px; z-index: 1;";
    iconPercentageAttributeDataPercent:string="data-percent";
    percentageValue:string="100";

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
    joinTheCommunity:Locator;
    signUpUserName:Locator;
    signUpPassWord:Locator;
    signUpPassWordConfirmation:Locator;
    signUpEmail:Locator;
    signUpButton:Locator;
    humanConfirmationTextElement:Locator;
    searchFilterButton:Locator;
    iconPercentageFirstResult:Locator;
    scoreMinimumValue:Locator;

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
        this.joinTheCommunity=page.locator("a.rounded");
        this.signUpUserName=page.locator("#username");
        this.signUpPassWord=page.locator("#password");
        this.signUpPassWordConfirmation=page.locator("#password_confirm");
        this.signUpEmail=page.locator("#email");
        this.signUpButton=page.locator("#sign_up_button");
        this.humanConfirmationTextElement=page.locator("div#root>div>div:nth-of-type(3)>h1");
        this.searchFilterButton=page.locator("(//a[@data-current-page='1'])[1]");
        this.iconPercentageFirstResult=page.locator("(//span[@class='icon icon-r100'])[1]");
        this.scoreMinimumValue=page.locator("(//span[@aria-valuemax='10'])[1]");
    }
}
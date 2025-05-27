import {Page, Locator} from "@playwright/test"

export class LoginPage{
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor (page:Page){
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator("#password");
        this.loginButton = page.locator("#Login");

    }

    async navigate() {
        await this.page.goto("https://orgfarm-3fe5b17d48-dev-ed.develop.my.salesforce.com/")

    }
    async login(username:string, password:string) {
        await this.username.fill(username);
        await this.password.fill(password)
        await this.loginButton.click()
    }

    async getPageTitle() {
    return this.page.title();
  }
}

import {Page, Locator, expect} from "@playwright/test"

export class targetMod {
    readonly page: Page
    readonly appLauncher: Locator
    readonly viewAll: Locator
    readonly appSearch: Locator
    readonly keysearch: Locator
    readonly saveButton: Locator


    constructor(page: Page){
        this.page = page
        this.appLauncher = page.locator("//button[@title='App Launcher']")
        this.viewAll = page.locator("//button[text()='View All']")
        this.appSearch = page.getByPlaceholder("Search apps or items...")    
    
    }
    
    async navigateTotarget(target:string){
        await this.appLauncher.click()
        await this.viewAll.click()
        await this.page.waitForLoadState('networkidle')
        await this.appSearch.fill(target)
        await this.page.locator("//mark[text()="+`${target}`+"]").click()
        
    }
}
import {Page, Locator, expect} from "@playwright/test"

export class LeadsPage {
    readonly page: Page
    readonly accountsTab: Locator
    readonly newLeadButton: Locator
    readonly leadNameInput: Locator
    readonly saveButton: Locator


    constructor(page: Page){
        this.page = page
        this.accountsTab = page.locator("//a/span[text()='Accounts']")
    
    }
    
    async navigateToAccounts(){
        await this.accountsTab.click()
        await this.page.waitForLoadState('networkidle')
    }

    async initiate_New(){
        await this.pas
    }
}
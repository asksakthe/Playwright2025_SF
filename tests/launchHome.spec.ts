import {expect, test} from "@playwright/test"
import {targetMod} from "../pages/common"

test("launch a browser with SF", async ({page}) => {
    await page.goto("https://orgfarm-3fe5b17d48-dev-ed.develop.my.salesforce.com/")
    await page.locator("#username").fill("asksakthe409@agentforce.com")
    await page.locator("#password").fill("Sakthi@123")
    await page.locator("#Login").click()
    await page.waitForTimeout(5000)
    //title
    // await expect(page).toHaveTitle("Home | Salesforce")

    // await page.locator("//span[text()='App Launcher']").click()
    // await page.getByPlaceholder("Search apps and items...").fill("accounts")
    // await page.locator("//p/b[text()='Accounts']").click()
    // //await page.locator("//p[text()='Marketing CRM Classic']").click()
    const s = new targetMod(page)
    await s.navigateTotarget('leads')
    await page.waitForTimeout(10000)
    
})
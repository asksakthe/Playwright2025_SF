import {Locator, test, expect} from "@playwright/test"

test.describe("ModuleTest Account", async () => {


    test("Account Module Test", async ({page}) => {

    await page.goto("../lightning/o/Account/list")  

    await page.locator("//div[text()='New']").click()

    await page.locator("//input[@name='Name']").fill('micSET04')

    await page.waitForTimeout(5000)


})

    test("account search and update", async ({page}) => {
        await page.goto("../lightning/o/Account/list")  

        await page.locator("//input[@name='Account-search-input']").fill("sak")
        await page.keyboard.press('Enter')
        await page.waitForTimeout(5000)
        await page.locator("//a[text()='sak']").click()
        await page.locator("//span[text()='Show more actions']").click()
        await page.locator("//runtime_platform_actions-action-renderer[@title='Edit']").click()
        await page.locator("//input[@name='Phone']").fill('9840040040')
        await page.locator("//button[@name='SaveEdit']").click()
        await page.waitForTimeout(6800)

        
    }
)
}
)
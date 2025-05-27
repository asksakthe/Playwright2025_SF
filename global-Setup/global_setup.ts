import { chromium, ChromiumBrowser } from "@playwright/test";
import fs from 'fs'

export default async function globalSetup() {
    const browser = await chromium.launch()
    const page = await browser.newPage()

    await page.goto("https://orgfarm-3fe5b17d48-dev-ed.develop.my.salesforce.com/")
    await page.locator("#username").fill('asksakthe409@agentforce.com')
    await page.locator('#password').fill('Sakthi@123')
    await page.locator("#Login").click()

    await page.waitForLoadState('networkidle')

    await page.context().storageState({path: './storage/state.json'})

    await browser.close()
    

    
}
import { test, expect} from "@playwright/test"

test("SalesForce Home", async ({page}) => {
    await page.goto("https://orgfarm-3fe5b17d48-dev-ed.develop.my.salesforce.com/")
    
}   
)
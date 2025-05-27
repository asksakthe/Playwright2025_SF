import {test, expect, page} from '../fixtures/baseTest'


test('login Check in', async({loginPage, page}) => {
    const pageTitle = await loginPage.getPageTitle();
    console.log(pageTitle)
    await page.waitForTimeout(8000)
    //expect(pageTitle).toContain('Home');
}
)
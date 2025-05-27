import {test as base} from "@playwright/test"

export const test = base
export {expect} from "@playwright/test"

// import {test as base} from "@playwright/test"
// import { LoginPage } from "../pages/LoginPage"

// type MyFixtures = {
//     loginPage: LoginPage
// }

// export const test = base.extend<MyFixtures>({
//     loginPage: async ({page}, use) =>{
//         const SFloginPage = new LoginPage(page)
//         await SFloginPage.navigate()
//         await SFloginPage.login('asksakthe409@agentforce.com','Sakthi@123')
//         await use(SFloginPage)
//     }
// })

// export {expect} from "@playwright/test"
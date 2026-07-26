//Playwright Home Assignment – Storage State (Skip Login)

import {test} from "@playwright/test"

test("Auth setup - HA", async ({page}) => {
    
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator('#username').fill('demoCSR2')
    await page.locator('//input[@id="password"]').fill('crmsfa')
    await page.locator('//input[@type="submit"]').click()
    await page.waitForTimeout(20000)

    await page.context().storageState({path:'playwright/.auth/user.json'})

})
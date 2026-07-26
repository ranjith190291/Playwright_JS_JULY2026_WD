import {expect, test} from "@playwright/test"

test.use(

    {
        storageState:'playwright/.auth/user.json'
    }
)

test('CRMFA Skip login',async ({page}) => {

    await page.goto("https://leaftaps.com/opentaps/control/login")
    await page.locator('.crmsfa').click()
    await page.waitForTimeout(3000)

    expect(page.url()).toContain('https://leaftaps.com/crmsfa/control/main?externalLoginKey=')
    
})
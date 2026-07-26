//Classroom Activity

import {expect, test} from "@playwright/test"

test('Assertions CA',async ({page}) => {
    
    //Navigate to the page
    await page.goto('https://leafground.com/input.xhtml')

    //Validate a Disabled Textbox
    await expect(page.getByRole("textbox", { name: "Disabled" })).toBeDisabled({timeout:2000})

    //Validate an Enabled Textbox
    await expect(page.locator('//input[@value="Can you clear me, please?"]')).toBeEditable()
    await page.locator('//input[@value="Can you clear me, please?"]').fill("Yes, it is cleared now")
    await page.waitForTimeout(2000)

    //Soft Assertion Practice
    await expect.soft(page.getByPlaceholder("About yourself",{exact:true})).toBeDisabled()

    //Fill Data
    await page.getByPlaceholder('About yourself',{exact:true}).fill('Playwright Learning')
    await page.waitForTimeout(2000)

    console.log("Assertion completed Successfully");
    


})


//Home Assignment - XPath

import {test} from "@playwright/test"

test("xPath - Home Assigment",async ({page}) => {

    await page.goto("https://login.salesforce.com/")
    await page.waitForTimeout(2000)

    await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('//label[text()="Password"]').fill('TestLeaf@2025')
    await page.locator('//input[@id="Login"]').click()
    await page.waitForTimeout(1000)

    await page.locator('//button[@title="App Launcher"]').click()
    await page.locator('(//button[@part="button"])[2]').click()
    await page.waitForTimeout(2000)

    await page.locator('//input[@placeholder="Search apps or items..."]').fill("Accounts")
    await page.waitForTimeout(2000)

    await page.locator('//mark[contains(text(),"Accounts")]').click()
    await page.waitForTimeout(2000)

    await page.locator('//div[@title="New"]').click()
    await page.waitForTimeout(2000)

    await page.locator('//input[@name="Name"]').fill("Mithran R L")
    await page.locator('//button[@aria-label="Type"]').click()
    await page.locator('//span[text()="Customer"]').click()
    await page.waitForTimeout(2000)

    await page.locator('//button[@aria-label="Industry"]').click()
    await page.locator('//span[@title="Apparel"]').click()
    await page.locator('(//textarea[@part="textarea"])[1]').fill("Not Applicable")

    
    await page.locator('//button[@name="SaveEdit"]').click()
    await page.waitForTimeout(2000)





})
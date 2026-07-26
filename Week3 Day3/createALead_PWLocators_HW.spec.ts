//Home Assignment => Create a Lead using Playwright Locators

import {test} from "@playwright/test"

test("Create a Lead using Playwright Locators - HA", async ({page}) => {

  //Login into Leaftaps site

  await page.goto("http://leaftaps.com/opentaps/control/main")
  
  await page.getByRole("textbox",{name:"Username"}).fill("Demosalesmanager")
  await page.getByRole("textbox",{name:"Password"}).fill("crmsfa")
  await page.getByRole("button",{name:"Login"}).click()
  await page.waitForTimeout(2000)

  await page.getByRole("link",{name:"CRM/SFA"}).click()
  await page.waitForTimeout(2000)

  //Lead Creation

  await page.getByRole("link",{name:"Leads"}).click()
  await page.getByRole("link",{name:"Create Lead"}).click()

  await page.locator('#createLeadForm_companyName').fill("Optimum Solutions")
  await page.locator('#createLeadForm_firstName').fill("Mithran")
  await page.locator('#createLeadForm_lastName').fill("R L")
  await page.locator('#createLeadForm_personalTitle').fill("MR")
  await page.locator('#createLeadForm_generalProfTitle').fill("QA")
  await page.locator('#createLeadForm_annualRevenue').fill("4200000")
  await page.locator('#createLeadForm_departmentName').fill("Banking")
  await page.locator('#createLeadForm_primaryPhoneNumber').fill("8978789932")

  //Submit the Lead

  await page.waitForTimeout(2000)
  //await page.getByRole('button',{name:"Create Lead"}).nth(5).click()
  await page.locator('.smallSubmit').click();

})
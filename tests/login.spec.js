const {test,expect} = require("@playwright/test")

test("Login Page Validation" , async function({page}){

  await page.goto("https://manmohankumar-trials719.orangehrmlive.com/")

  // fill ke sath delay work nahi krta h to instead of fill type use krna h
  await page.getByPlaceholder("Username").fill("admin", {delay:200})

  await page.locator("input[name='txtPassword']").fill("w1@s2bMVFO", {delay:100})

  await page.locator("//button[@type='submit']").click()

  

  await page.locator("div.picture").click();
  await expect(page).toHaveURL(/dashboard/) ;
  //or
  //await page.locator("//div[@class='picture']").click();

  //await page.getByText("Logout").click()

  await page.locator("a[href='/auth/logout']").click();

  await page.waitForTimeout(3000)

  await expect(page).toHaveURL(/auth/) ;
})
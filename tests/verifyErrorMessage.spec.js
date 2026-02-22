const {test, expect} = require("@playwright/test")

test.skip("Verify Error Message", async function ({page}){

    await page.goto("https://manmohankumar-trials719.orangehrmlive.com/")

    await page.getByPlaceholder("Username").type("admin", {delay:100})
  
    //await page.locator("input[name='txtPassword']").type("w1@s2bMVFO1", {delay:200})

    await page.getByPlaceholder("Password").type("w1@s2bMVFO1", {delay:200})
  
    await page.locator("//button[@type='submit']").click()

    const toast = page.locator("//div[@class='toast-message']")
    await expect(toast).toBeVisible();
    await expect(toast).toContainText("Please type the word exactly as it appears in the image.");
    const errorMesage = await page.locator("//div[@class='toast-message']").textContent()
   // const errorMesage = toast.textContent()

    console.log("Error message is : " +errorMesage );

    expect(errorMesage.includes("word")).toBeTruthy()

})
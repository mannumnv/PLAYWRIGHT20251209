const {test,expect} =require("@playwright/test") 

 test("Verify Title of the Page",async ({page})=>{

    await page.goto("https://copilot.microsoft.com/")

    const url = await page.url() 

    console.log("URL is " +url)

    const title = await page.title()
    console.log("Title is " +title )

   //await expect(page).toHaveTitle("Google")
   await expect(page).toHaveTitle("Microsoft Copilot: Your AI companion")

 

 })

 test('test', async ({ page }) => {
    await page.locator('body').click();
    await page.goto('https://www.google.com/');
    await expect(page.getByRole('button', { name: 'Google 検索' })).toBeVisible();
  });
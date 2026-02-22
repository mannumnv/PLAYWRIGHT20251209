const {test, expect} = require("@playwright/test")

test("Dropdown option selection", async function ({page}){
 
    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    await page.locator("#name").type("Mannu", {delay:200})

//    await page.getByTestId('name-input').type('Mannu', { delay: 200 });

     await page.locator("#email").type("Mannu7116@gmail.com", {delay:200})
    

    await page.locator("#state").selectOption({ label: 'Chhattisgarh'});
    await expect(page.locator('#state')).toBeVisible();
   await page.waitForTimeout(3000)
    await page.locator('#state').selectOption({value: 'Bihar'});
    await page.waitForTimeout(1000)
    await page.locator('#state').selectOption({index:11})
    await page.waitForTimeout(1000)

//  Label > value > index

// if the dropdown contain a particular value or not.
  const stateValue = await page.locator('#state').textContent()
  console.log(stateValue);
  await expect(stateValue.includes("Kerala")).toBeTruthy()
})
 
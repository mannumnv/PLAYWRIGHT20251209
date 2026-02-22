const {test,expect} =require("@playwright/test") 

 test("My first Test",async function({page}){
    expect(12).toBe(12)

 })

 // skip this test case and run above 
 test.skip("My second test", async function({page}){
    expect(11).toBe(12.0)
    
 })

test("My third test", async function({page}){
    expect(12.0).toBe(12.0)
})

// to run below test case only use test.only
// test.only("My forth test", async function({page}){
//     expect("Manmohan Kumar").toContain("Kumar")
//     expect(true).toBeTruthy()
// })

test("My forth test", async function({page}){
    expect("Manmohan Kumar").toContain("Kumar")
    expect(true).toBeTruthy()
})

test("My fifth test", async function({page}){
    expect(false).toBeFalsy()
})

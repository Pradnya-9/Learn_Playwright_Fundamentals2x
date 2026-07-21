import{test,expect} from "@playwright/test";
test("Verify two browser context open",async({browser})=>{

    let TTACartcontext=await browser.newContext();
    let TTACartPage=await TTACartcontext.newPage();
    await TTACartPage.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    console.log("TTACart: on login page: ",TTACartPage.url());
    
 let TTABankcontext=await browser.newContext();
    let TTABankPage=await TTABankcontext.newPage();
    await TTABankPage.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    console.log("TTABank: on login page:",TTABankPage.url() );

    await TTACartcontext.close();
    await TTABankcontext.close();
    await browser.close();
});



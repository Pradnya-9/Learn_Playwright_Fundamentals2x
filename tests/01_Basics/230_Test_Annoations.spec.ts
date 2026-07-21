import {test,expect} from'playwright/test';

test('has title',async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await expect(page).toHaveTitle("TTACart - Login");

});

//Skip Test 
test.skip('Skiiped test',async({page})=>{
    //The test will be skipped and not executed
});

//only run this test
test.only('focused test',async({page})=> {
// only this test will be executed and all other tests will be skipped
});

// Mark as failing
test.fail('Expected to fail',async({page})=>{
    //this is expeted to fail and will be marked as failed in the test report
});

//Slow test( 3x timeout )
test('Slow test',async({page})=>{
    test.slow();
    //has extemded time out 
     await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

//Conditional skip
test('Conditional',async({page, browserName})=>{
    test.skip(browserName==='firefox','Not supported in firefox');
});



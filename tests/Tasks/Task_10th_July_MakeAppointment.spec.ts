import{test,expect}from '@playwright/test';


test('TC#1:Verify the Make appoinment  ',async ({page}) =>{
await page.goto("https://katalon-demo-cura.herokuapp.com/");

let makeAppoinmentBtn= page.locator('//a[@id="btn-make-appointment"]');

await makeAppoinmentBtn.click();
console.log("done");

});
test('TC#2:Make appoinment  ',async ({page}) =>{
    await page.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login");
    let userName=page.locator('//input[@id="txt-username"]');
    let password=page.locator('//input[@id="txt-password"]');
    let loginBtn=page.locator('//button[@id="btn-login"]');
    await userName.fill("John Doe");
    await password.fill("ThisIsNotAPassword");
    await loginBtn.click();
    console.log("Title:",await page.title());
});


import {test,expect} from '@playwright/test';

test  ("TC#1-Verify the app.vwo is not working and gives you an error with lazy", async({page})=>{
await page.goto("https://app.vwo.com/#/login");
// deafult locator 
// id ,name ,class name , tag , Custom locator (via css selector )
// css selector - every browser - CSS Engine , help  ypu to find the element 
// by suing the deafult locators
// id => #id
// className=> .className
//name=>[name="value"]
//Tag=>[tag]

let userNameField=page.locator('#login-username');
let passwordFeild=page.locator('#login-password');
let loginButton=page.locator('#js-login-btn');
await userNameField.fill("admin@admin.com");
await passwordFeild.fill("pass123");
await loginButton.click();

console.log("All action completed");

let error_message =page.locator('#js-notification-box-msg');
await expect(error_message).toContainText("Your email, password, IP address or location did not match");







});


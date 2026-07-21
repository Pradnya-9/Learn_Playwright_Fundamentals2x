import {chromium,Browser,BrowserContext,Page} from 'playwright';
async function run(){

// level 1: Lauch broswer - heaviest operation do it once
let browser: Browser = await chromium.launch({headless: false});
console.log("Browser Launched ", browser);

//Level 2: Create Context = fresh session ,isolated cookies 

let context1: BrowserContext= await browser.newContext();
console.log("Context created",context1);

let context2: BrowserContext= await browser.newContext();
console.log("Context created",context2);

// level 3 open page 
let page: Page= await context1.newPage();
console.log("Page opened")

await page.goto("https://app.vwo.com");
console.log("Title:",await page.title());

//Cleanup reverse order 

await page.close();
await context1.close();
await context2.close();
await browser.close();

}
run();
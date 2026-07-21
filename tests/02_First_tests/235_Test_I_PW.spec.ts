import {test,expect} from"@playwright/test";

test("login Test",async({page})=>{

        await page.goto("https://app.vwo.com/#login");
           await page.waitForTimeout(6000);
         await page.fill('input[name="email"]', 'admin');

         await page.fill('input[name="password"]', 'pass123');
         await page.click('button[type="submit"]');
         await expect(page).toHaveURL("/dashboard");

    });

    test("another Test",async({page})=>{

        await page.goto("https://app.com/#signup");
        await expect(page).toHaveTitle("Sign up");

    });

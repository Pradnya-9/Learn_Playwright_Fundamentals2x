import{test,expect} from'@playwright/test'

    test('Verify our first TC ', async({page})=>{

    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");

    let username=page.locator('input[name=username]');
    let password = page.locator('input[name=password]');
    let loginBtn=page.locator('button[type=submit]')
     await username.fill("admin");
     await password.fill("Awesomeqa@4321")
     await loginBtn.click();

     await expect(page).toHaveTitle("OrangeHRM");

     await page.waitForTimeout(3000);

    const rows = await page.locator("//div[@role='table']/div[@role='rowgroup'][2]/div/div[@role='row']").count();
    const cols = await page.locator("(//div[@role='table']/div[@role='rowgroup'][2]/div/div[@role='row'])[1]/div").count();
    console.log(rows);
    console.log(cols);
    await page.waitForTimeout(3000);

    const firstPart = "(//div[@role='table']/div[@role='rowgroup'][2]/div/div[@role='row'])[";
    const secondPart = "]/div[";
    const thirdPart = "]";

     for (let i=2;i<=rows;i++){

           for(let j=1 ;j<=cols;j++){
            const dynamicPath =`${firstPart}${i}${secondPart}${j}${thirdPart}`;
            console.log(dynamicPath);
            const data= await page.locator(dynamicPath).innerText();
            console.log(data);
            if (data.includes('Terminated')) {
             // XPath for trash icon = (//div[@role='table']/div[@role='rowgroup'][2]/div/div[@role='row'])[6]/div[9]/div/button[1]/i
                // Dynamic XPath for Trash icon 
                const trashIconDynamicPath = `${firstPart}${i}${secondPart}${cols}${thirdPart}/div/button[1]/i`;
                // Clicking on the trash icon
                await page.locator(trashIconDynamicPath).click();
                // await page.waitForTimeout(5000);
                await page.screenshot({ path: "./tests/Playwright2xTasks/Orange-HRM.png" });
                // Wait for user visibility, not mandatory
                await page.waitForTimeout(3000);
                         
           }
        }
     }
    });


 
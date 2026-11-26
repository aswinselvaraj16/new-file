import { test } from '@playwright/test';

test('day1 ', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();  
    console.log("Changes Made")
    console.log("no changes") 
    console.log("Changes made for second time")
    console.log("Changes made for third time")
    console.log("Changes made for Fourth time")
    console.log("Changes made for fifth time")


})

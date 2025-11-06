import {test} from '@playwright/test';

test("Practice of Locator Method", async ({page}) => {
     await page.goto('https://www.saucedemo.com/');
     await page.locator("//input[@name='user-name']").fill('standard_user');
     await page.locator("#password").fill('secret_sauce');
     await page.locator(".submit-button").click();
     await page.locator("text='Sauce Labs Backpack'").click();
     await page.locator("#add-to-cart").click();
     await page.locator("data-test=remove").click();
});

test("Practice of Locator Method with Options",async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator((".form_group"), {has: page.locator("#user-name")}).click();
    await page.locator((".form_group"), {has: page.locator("#user-name")}).pressSequentially("standard_user");

    await page.locator((".form_group"), {hasNot: page.locator("#user-name")}).click();
    await page.locator((".form_group"), {hasNot: page.locator("#user-name")}).pressSequentially("secret_sauce");

    await page.locator(".submit-button").click();

    //await page.locator("//a", {hasText: "Sauce Labs Backpack"}).click();
    await page.locator(".inventory_item_name",{hasNotText : /Sauce.*/}).click();
});


test("Practice of getBy methods" , async ({page}) => {
    await page.goto('https://demo.nopcommerce.com/login');
    await page.getByLabel('Email:').fill("testcodeautomate@gmail.com");    
    console.log (await page.getByText("New Cust").textContent());
    await page.getByAltText('nopCommerce demo store').click();
    await page.getByTitle("Show products in category Electronics").first().click();
    await page.getByPlaceholder(('Search store')).fill("Apple MacBook Pro 13-inch");
    await page.getByRole('button', { name: 'Search' }).click();


});

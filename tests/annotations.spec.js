const { test, expect } = require('@playwright/test');

// ONLY 

test.only('Test 1', async ({ page }) => {
    console.log("This is Test 1..")
});

// SKIP

test.skip('Test 2', async ({ page }) => {
    console.log("This is Test 2..")
});

test('Test 3' , async ({page , browserName}) => {
    console.log("This is Test 3");
    if(browserName === 'firefox') {
        test.skip(); 
    }
});

// FIX ME

test('Test 4', async ({page}) => {
    test.fixme();
    console.log("This is Test 4");
});

// FAIL

test('Test 5' , async ({page}) => {
    test.fail(); // expected
    console.log("This is Test 5");
    // expect(1).toBe(1); // actual
    expected(1).toBe(2);
});

test('Test 6' , async ({page, browserName}) => {
    console.log("This is Test 6")
    if(browserName === 'firefox') {
        test.fail(); // expected
    }
});

// SLOW

test('Test 7', async ({ page }) => {
    test.slow();
    await page.goto('https://www.amazon.in/');
    console.log("This is Test 7");
});

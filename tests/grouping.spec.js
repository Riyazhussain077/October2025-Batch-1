const { test, expect } = require('@playwright/test')

test.beforeAll(async () => {
    console.log("This is BeforeAll Hook..")
});

test.afterAll(async () => {
    console.log("This is afterAll Hook..")
});

test.beforeEach(async () => {
    console.log("This is BeforeEach Hook..")
});

test.afterEach(async () => {
    console.log("This is afterEach Hook..")
});

test.describe('Group 1', () => {

    test('Test 1', async ({ page }) => {
        console.log('This is Group Test 1..')
    });

    test('Test 3', async ({ page }) => {
        console.log('This is Group Test 3..')
    });

});

test.describe('Group 2', () => {

    test('Test 2', async ({ page }) => {
        console.log('This is Group Test 2..')
    });

    test('Test 4', async ({ page }) => {
        console.log('This is Group Test 4..')
    });

});


const {test,expect} = require ('@playwright/test')

test('Test 1@Ama', async ({page}) => {
    console.log("This is Tag Concept 1..")
});

test('Test 2@Flip', async ({page}) => {
    console.log("This is Tag Concept 2..")
});

test('Test 3@Ama', async ({page}) => {
    console.log("This is Tag Concept 3..")
});

test('Test 4@Flip', async ({page}) => {
    console.log("This is Tag Concept 4..")
});

test('Test 5@Ama@Flip', async ({page}) => {
    console.log("This is Tag Concept 5..")
});
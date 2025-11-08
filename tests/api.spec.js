const { test, expect } = require('@playwright/test')

test('Mock GET response', async ({ page }) => {
    // 1) Mock the API

    await page.route('https://jsonplaceholder.typicode.com/posts', async route => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify([{ title: 'Mocked Post', id: 1 }]),
        });
    });

    // 2) Call the API
    await page.goto('https://jsonplaceholder.typicode.com/posts');

    // 3) Validate the fake data
    const text = await page.locator('body').innerText();
    await expect(text).toContain('Mocked Post');
});

// 1) GET   - Fetch all posts

test('GET - Fetch all posts', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts');
    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log("Total Posts fetched : ", body.length);
    expect(body.length).toBeGreaterThan(0);
});

// 2) POST  - Create a new Post with any data

test('POST - Create a post', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: "QA Automation with Playwright",
            body: "This post is created to use API Post request",
            userID: 777   // you can set any custom user ID
        }
    });

    expect(response.status()).toBe(201); // created
    const body = await response.json();
    console.log("Created Post ID : ", body.id);
    expect(body).toHaveProperty('id');
    expect(body.title).toBe("QA Automation with Playwright");
});

// 3) PUT  - Update an existing post
test('PUT - Update a post with new data', async ({ request }) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            id: 1,
            title: 'Using Playwright APIRequestContext',
            body: "This post was updated recently",
            userId: 777
        }
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log("updated Post Title: ", body.title);
    expect(body.title).toBe('Using Playwright APIRequestContext');
});

// 4) DELETE  - Delete a post

test('DELETE - Delete a created post', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200);
    console.log("Post deleted successfully");
});







import { test, expect } from '@playwright/test';

//AAA Pattern

// [Arrange]
// [Act]
// [Assert]

const password = process.env.PASSWORD;

test.beforeAll(async ({ playwright }) => {
    test.skip(
      !!process.env.PROD,
      'Test intentionally skipped in production due to data dependency.'
    );
    // start a server
    // create a db connection
    // reuse a sign in state
});
  
test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    // open a URL
    // clean up the DB
    // create a page object
    // dismiss a modal
    // load params
});

test.afterAll(async ({}, testInfo) => {
    console.log('Test file completed.');
    // close a DB connection
});

test.afterEach( async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

    if (testInfo.status !== testInfo.expectedStatus)
        console.log(`Did not run as expected, ended up at ${page.url()}`);
    // clean up all the data we created for this test through API calls
});

// test.describe('Test Case', () => {
// test.describe.only('Test Case', () => {
test.describe('Test Case', () => {
    test('Test Scenario One', async ({ page }) => {
        await test.step('Step One: Navigate to Playwright and verify initial state', async () => {
            await page.goto('https://playwright.dev/');
            await expect(page).toHaveTitle(/Playwright/);
            await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
        });

        await test.step('Step Two: Navigate to documentation and verify content', async () => {
            await page.getByRole('link', { name: 'Get started' }).click();
            await expect(page).toHaveURL(/.*docs\/intro/);
            await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
            
            // Hover over the language selector to make buttons visible
            await page.getByRole('button', { name: 'Node.js' }).hover();
            
            // Verify language selector buttons in the dropdown
            const languageButtons = [
                'Node.js',
                'Python',
                'Java',
                '.NET'
            ];
            
            // Get the dropdown menu
            const dropdownMenu = page.locator('.dropdown__menu');
            await expect(dropdownMenu).toBeVisible();
            
            for (const language of languageButtons) {
                await expect(dropdownMenu.getByRole('link', { name: language, exact: true })).toBeVisible();
            }
        });
    });
  
    test('Test Scenario Two', async ({ page }) => {
        // Arrange
        await page.goto('https://playwright.dev/');
        
        // Act
        const title = await page.title();
        
        // Assert, failure in purpose
        await expect(page).toHaveTitle(/bulk/);
        console.log('Page title:', title);
    });
/**
    test.only('Test Scenario Three', async ({ page }) => {
        // Arrange
        // Act
        // Assert
    });
 */  
/**
    test.skip('Test Scenario Four', async ({ page }) => {
        // Arrange
        // Act
        // Assert
    });
 */

  });
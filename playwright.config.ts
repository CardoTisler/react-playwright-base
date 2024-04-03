import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// require('dotenv').config();
// require('dotenv').config({ path: '.env.playwright' });

const testDir = defineBddConfig({
  paths: ['playwright/e2e/**/*.feature'],
  require: ['playwright/e2e/**/*.ts'],
});

export default defineConfig({
  testDir,
  reporter: [['junit', { outputFile: 'playwright/reports/test-results.xml' }]],
  // globalSetup: './playwright/global-setup',
  webServer: {
    command: 'yarn dev',
    url: 'http://localhost:5173',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:5173',
    bypassCSP: true,
    launchOptions: {
      args: ['--disable-web-security'],
    },
    actionTimeout: 0,
    // storageState: 'playwright/.auth/LoginAuth.json',
  },
  preserveOutput: 'never',
  outputDir: 'playwright/test-results',
  retries: process.env.CI ? 3 : 0,
  workers: process.env.CI ? 1 : undefined,
});
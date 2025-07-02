import { fileURLToPath } from 'node:url';
import { defineConfig, devices } from '@playwright/test';
import type { ConfigOptions } from '@nuxt/test-utils/playwright';

export default defineConfig<ConfigOptions>({
    testDir: './tests/e2e',
    outputDir: './tests/output/e2e/test-result',
    reporter: [['html', { outputFolder: './tests/output/e2e' }]],
    use: {
        baseURL: 'http://localhost:3000',
        trace: 'on-first-retry',
        nuxt: {
            rootDir: fileURLToPath(new URL('.', import.meta.url)),
        },
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});

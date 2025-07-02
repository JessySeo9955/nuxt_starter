import { defineConfig, devices } from '@playwright/test';
import type { ConfigOptions } from '@nuxt/test-utils/playwright';
import { fileURLToPath } from 'url';

export default defineConfig<ConfigOptions>({
    testDir: './tests/e2e',
    outputDir: './tests/output/e2e/test-result',
    reporter: [['html', { outputFolder: './tests/output/e2e' }]],
    use: {
        baseURL: 'http://localhost:3000',
        trace: 'on-first-retry',
        nuxt: {
            rootDir: fileURLToPath(new URL('.', import.meta.url)),
            dev: true,
            build: true, // Try with build: true
            port: 3001, // Use different port to avoid conflicts
        },
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});

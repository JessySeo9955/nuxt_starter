import { defineVitestConfig } from '@nuxt/test-utils/config';
import { fileURLToPath } from 'node:url';

export default defineVitestConfig({
    test: {
        environment: 'nuxt',
        include: ['tests/unit/**/*.spec.ts'],
        environmentOptions: {
            nuxt: {
                domEnvironment: 'happy-dom',
                rootDir: fileURLToPath(new URL('.', import.meta.url)),
            },
        },
        reporters: ['html'],
        outputFile: {
            html: fileURLToPath(new URL('./tests/output/unit/vitest-report.html', import.meta.url)),
        },
    },
});

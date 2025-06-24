// https://nuxt.com/docs/api/configuration/nuxt-config
import dev from './package/config/dev';
import live from './package/config/live';
import { fileURLToPath } from 'node:url'
const srcDir = 'application';
const RUN_TYPE = process.env.RUN_TYPE || 'live';

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    runtimeConfig: RUN_TYPE === 'live' ? live : dev,
    devtools: { enabled: true },
    modules: ['@nuxt/eslint', '@nuxt/test-utils'],
    serverDir: './server',
    srcDir: srcDir + '/',
    alias: {
        '@': '~/application',
        '@assets': fileURLToPath(new URL('./assets', import.meta.url)),
        '@package': fileURLToPath(new URL('./package', import.meta.url)),
    },
    components: [
        {
            path: '~/' + srcDir + '/components/global',
            global: true,
        },
    ],
});

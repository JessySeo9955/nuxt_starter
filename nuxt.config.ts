// https://nuxt.com/docs/api/configuration/nuxt-config
import dev from './package/config/runtime/dev';
import live from './package/config/runtime/live';
import i18n from './package/config/buildtime/i18n';
import { fileURLToPath } from 'node:url';
const srcDir = 'application';
const RUN_TYPE = process.env.RUN_TYPE || 'live';

export default defineNuxtConfig({
    imports: {
        autoImport: true,
    },
    compatibilityDate: '2025-05-15',
    runtimeConfig: RUN_TYPE === 'live' ? live : dev,
    devtools: { enabled: false },
    modules: ['@nuxt/eslint', '@nuxt/test-utils', `@/modules/global-loading/module.ts`, `@nuxtjs/i18n`],
    serverDir: './server',
    srcDir: srcDir + '/',
    alias: {
        '@': fileURLToPath(new URL(`./${srcDir}`, import.meta.url)),
        '@assets': fileURLToPath(new URL('./assets', import.meta.url)),
        '@package': fileURLToPath(new URL('./package', import.meta.url)),
    },
    components: [
        {
            path: `~/${srcDir}/components/global`,
            global: true,
        },
    ],
    css: ['@assets/styles/reset.css', '@assets/styles/global.css'],
    app: {
        pageTransition: {
            name: 'fade',
            mode: 'out-in', // default
        },
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
        },
    },
    i18n: { ...i18n(), langDir: fileURLToPath(new URL(`./package/locales`, import.meta.url)) },
});

import type { NuxtI18nOptions } from '@nuxtjs/i18n';

const i18n = (): NuxtI18nOptions => ({
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
        { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
        { code: 'fr', name: 'Français', iso: 'fr-FR', file: 'fr.json' },
        { code: 'ko', name: '한국어', iso: 'ko-KR', file: 'ko.json' },
    ],
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        redirectOn: 'root', // recommended
    },
    lazy: true,
    // vueI18n: './i18n.config.ts',
});

export default i18n;

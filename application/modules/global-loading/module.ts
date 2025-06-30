import { defineNuxtModule, addPlugin, addComponentsDir, addImportsDir } from '@nuxt/kit';
import { resolve } from 'pathe';

export default defineNuxtModule({
    meta: {
        name: 'global-loading',
        configKey: 'globalLoading',
    },
    setup(_, nuxt) {
        addPlugin(resolve(__dirname, './runtime/plugins/loading.plugin'));
        addComponentsDir({ path: resolve(__dirname, './runtime/components') });
        addImportsDir(resolve(__dirname, './runtime/composables'));
    },
});

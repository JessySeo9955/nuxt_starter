import { defineNuxtPlugin } from 'nuxt/app';

export default defineNuxtPlugin({
    parallel: true,
    setup() {
        const { start, finish } = useGlobalLoading();

        onNuxtReady(() => finish());

        const router = useRouter();
        router.beforeEach(() => start());
        router.afterEach(() => {
            nextTick(() => finish());
        });
    },
});

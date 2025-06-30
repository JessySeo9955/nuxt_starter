import { defineNuxtPlugin } from 'nuxt/app';

export default defineNuxtPlugin({
    parallel: true,
    setup() {
        const { start, finish } = useGlobalLoading();
        onNuxtReady(finish);

        const router = useRouter();
        router.beforeEach(() => {
            start();
        });
        router.afterEach(() => {
            nextTick(() => {
                // Waits until the DOM is updated, then hides spinner
                finish();
            });
        });
    },
});

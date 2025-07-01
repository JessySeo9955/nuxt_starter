// 02.init-loading.ts
export const setupGlobalLoading = () => {
    const { start, finish } = useGlobalLoading();
    start();

    onNuxtReady(() => {
        finish();
    });

    const router = useRouter();
    router.beforeEach(() => {
        start();
    });
    router.afterEach(() => {
        nextTick(() => finish());
    });
};

export default defineNuxtPlugin({
    parallel: true,
    setup: setupGlobalLoading,
});

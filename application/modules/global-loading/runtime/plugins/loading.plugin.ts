export default defineNuxtPlugin(() => {
    const indicator: ReturnType<typeof useLoadingIndicator> = useLoadingIndicator({
        duration: 5000,
        throttle: 200,
        hideDelay: 300,
    });
    return {
        provide: {
            globalLoading: indicator,
        },
    };
});

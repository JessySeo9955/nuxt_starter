export const useGlobalLoading = () => {
    const nuxtApp = useNuxtApp();
    const indicator = nuxtApp.$globalLoading;
    return indicator as ReturnType<typeof useLoadingIndicator>;
};

declare module '#app' {
    interface NuxtApp {
        $http: HttpClient;
    }
}

declare module 'vue' {
    interface ComponentCustomProperties {
        $http: HttpClient;
    }
}

export {};

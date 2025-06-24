import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app';
import HttpClient from '@package/network/HttpClient';

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();
    const httpClient: HttpClient = new HttpClient(config);
    provide('http', httpClient);
});

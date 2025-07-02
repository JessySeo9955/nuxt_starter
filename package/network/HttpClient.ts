import type { RuntimeConfig } from '@nuxt/schema';
import type { NitroFetchOptions } from 'nitropack';

export default class HttpClient {
    private baseUrl: string;

    constructor(config: RuntimeConfig) {
        this.baseUrl = config.public.API_URL;
    }

    private async request<T>(
        url: string,
        method: 'GET' | 'DELETE',
        options: NitroFetchOptions<'json'> = {}
    ): Promise<T> {
        return (await $fetch<T>(this.baseUrl + url, { ...options, method })) as T;
    }

    private async requestWithBody<T, R>(
        url: string,
        method: 'POST' | 'PUT' | 'PATCH',
        body: R,
        options: NitroFetchOptions<'json'> = {}
    ): Promise<T> {
        return (await $fetch<T>(this.baseUrl + url, {
            ...options,
            method,
            body: body as BodyInit, // cast R to BodyInit
        })) as T;
    }

    public get<T>(url: string, options: NitroFetchOptions<'json'> = {}): Promise<T> {
        return this.request<T>(url, 'GET', options);
    }

    public delete<T>(url: string, options: NitroFetchOptions<'json'> = {}): Promise<T> {
        return this.request<T>(url, 'DELETE', options);
    }

    public post<T, R>(url: string, body: R, options: NitroFetchOptions<'json'> = {}): Promise<T> {
        return this.requestWithBody<T, R>(url, 'POST', body, options);
    }

    public put<T, R>(url: string, body: R, options: NitroFetchOptions<'json'> = {}): Promise<T> {
        return this.requestWithBody<T, R>(url, 'PUT', body, options);
    }

    public patch<T, R>(url: string, body: R, options: NitroFetchOptions<'json'> = {}): Promise<T> {
        return this.requestWithBody<T, R>(url, 'PATCH', body, options);
    }
}

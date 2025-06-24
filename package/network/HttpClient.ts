import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';
import type { RuntimeConfig } from '@nuxt/schema';

export default class HttpClient {
    protected httpInstance: AxiosInstance = axios.create({});

    constructor(config: RuntimeConfig) {
        this.httpInstance = axios.create({
            baseURL: config.public.API_URL,
            timeout: 1000,
        });
    }

    public get http(): AxiosInstance {
        return this.httpInstance;
    }

    public get<T>(url: string, config: AxiosRequestConfig): Promise<T> {
        return this.http.get(url, config);
    }

    public delete<T>(url: string, config: AxiosRequestConfig): Promise<T> {
        return this.http.delete(url, config);
    }

    public post<T, R>(url: string, data: R, config: AxiosRequestConfig): Promise<T> {
        return this.http.post(url, data, config);
    }

    public put<T, R>(url: string, data: R, config: AxiosRequestConfig): Promise<T> {
        return this.http.put(url, config);
    }
}

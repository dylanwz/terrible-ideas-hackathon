import { API_KEY } from "@/env";

const request = async (
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    options?: Record<string, any>,
  ) => {
    
    const payload =
        method === "GET"
        ? {
            method,
            }
        : {
            method,
            headers: {
                "Content-type": "application/json",
                "Authorization": API_KEY,
            },
            body: JSON.stringify(options),
            };
    const res = await fetch(url, { ...payload, cache: "no-store" });
    if (!res.ok) {
        return { errorCode: res.status, errorMessage: res.statusText };
    }
    return await res.json();
};
  
export const get = (url: string, options?: Record<string, string>) =>
request(url, "GET", options);

export const post = (url: string, options?: Record<string, any>) =>
request(url, "POST", options);

export const put = (url: string, options?: Record<string, any>) =>
request(url, "PUT", options);

export const del = (url: string, options?: Record<string, any>) =>
request(url, "DELETE", options);
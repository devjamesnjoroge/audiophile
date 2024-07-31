// lib/fetcher.ts
export async function fetchFromApi(endpoint: string) {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!baseUrl) {
        throw new Error('API base URL is not defined');
    }
    const response = await fetch(`${baseUrl}/${endpoint}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    return response.json();
}

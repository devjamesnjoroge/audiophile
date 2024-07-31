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

export async function fetchSpeakers() {
    try {
      const data = await fetchFromApi('speakers');
      // Ensure the rows are an array
      return Array.isArray(data.rows) ? data.rows : [];
    } catch (error) {
      console.error('Error fetching speakers:', error);
      return [];
    }
  }

export async function fetchHeadphones() {
    try {
      const data = await fetchFromApi('headphones');
      // Ensure the rows are an array
      return Array.isArray(data.rows) ? data.rows : [];
    } catch (error) {
      console.error('Error fetching headphones:', error);
      return [];
    }
  }
  

export async function fetchEarphones() {
    try {
      const data = await fetchFromApi('earphones');
      // Ensure the rows are an array
      return Array.isArray(data.rows) ? data.rows : [];
    } catch (error) {
      console.error('Error fetching earphones:', error);
      return [];
    }
  }


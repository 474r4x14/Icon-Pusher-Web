const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN;

if (!API_DOMAIN) {
  throw new Error('Missing NEXT_PUBLIC_API_DOMAIN environment variable');
}

/**
 * A utility object for making API calls.
 */
export const apiClient = {
  /**
   * A helper for fetching data from our API.
   * @param path The path to fetch from
   * @param options The options for the fetch call
   * @returns The JSON response
   */
  async get<T>(path: string, options?: RequestInit): Promise<T> {
    const url = `${API_DOMAIN}${path}`;
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`);
    }

    return response.json();
  },
};


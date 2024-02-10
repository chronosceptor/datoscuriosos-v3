interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
  headers?: Record<string, string> | undefined; // Make headers optional
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @param headers - Headers to include in the request
 * @returns
 */
export default async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
  headers,
}: Props): Promise<T | T[]> {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const requestOptions: RequestInit = {
    method: 'GET',
    headers: {
      ...(headers || {}),
      ...(import.meta.env.STRAPI_TOKEN && { Authorization: `Bearer ${import.meta.env.STRAPI_TOKEN}` }),
    },
  };

  const res = await fetch(url.toString(), requestOptions);
  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  if (wrappedByList && Array.isArray(data)) {
    data = data[0]; // Take the first item if it's an array
  }

  return data as T | T[];
}
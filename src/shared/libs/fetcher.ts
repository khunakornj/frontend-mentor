/* eslint-disable @typescript-eslint/no-explicit-any */
import qs from 'qs';

import ENV from './env';

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type FetcherBaseOptions = {
  params?: Record<string, any>;
  headers?: Record<string, string>;
  version?: number;
};

type FetcherWriteOptions<T extends object> = FetcherBaseOptions & {
  body: T;
};

// overloads
export function fetcher(
  path: string,
  method: 'GET' | 'DELETE',
  options?: FetcherBaseOptions,
): Promise<Response>;

export function fetcher<T extends object>(
  path: string,
  method: 'POST' | 'PUT' | 'PATCH',
  options: FetcherWriteOptions<T>,
): Promise<Response>;

export async function fetcher(path: string, method: Method, options: any = {}) {
  const { params, body, headers, version } =
    options as FetcherWriteOptions<any>;

  // build URL
  const query = params ? qs.stringify(params) : '';

  let url = `${ENV.VITE_API_URL}${path}`;
  if (version) {
    url += `/${version}`;
  }
  if (query) {
    url += `?${query}`;
  }

  const defaultHeaders: Record<string, string> = {
    Accept: 'application/json',
  };

  // final request init
  const init: RequestInit = {
    method,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  };

  if (body) {
    init.headers = {
      ...init.headers,
      'Content-Type': 'application/json',
    };
    init.body = JSON.stringify(body);
  }

  return fetch(url, init);
}

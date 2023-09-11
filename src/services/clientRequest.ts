import { FetchType } from '@constants/index';

export const fetcher = async <T>(
  endPoint: string,
  method?: FetchType,
  tags?: string[]
): Promise<T> => {
  let res;
  switch (method) {
    case FetchType.ssr:
      // This request should be re-fetched on every request.
      res = await fetch(process.env.NEXT_PUBLIC_API_HOST + endPoint, {
        cache: 'no-store'
      });
      break;

    case FetchType.isr:
      // This request should be cached with a lifetime of 30 seconds.
      res = await fetch(process.env.NEXT_PUBLIC_API_HOST + endPoint, {
        next: { revalidate: 30 }
      });
      break;

    case FetchType.isrTag:
      if (!tags?.length) {
        throw new Error('tags at should not be empty or undefined');
      }
      res = await fetch(process.env.NEXT_PUBLIC_API_HOST + endPoint, {
        next: { tags: [...tags] }
      });
      break;

    default:
      // This request should be cached until manually invalidated.
      res = await fetch(process.env.NEXT_PUBLIC_API_HOST + endPoint, {
        cache: 'force-cache'
      });
      break;
  }

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

// TODO: should handle type for payload
export const POST = async (endPoint: string, payload: any = {}) =>
  await fetch(endPoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

export const PUT = async (endPoint: string, payload: any = {}) =>
  await fetch(process.env.NEXT_PUBLIC_API_HOST + endPoint, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

export const swrFetcher = async (...args: any) => {
  console.log('swrFetcher', args);

  return fetch(args).then((res) => res.json());
};

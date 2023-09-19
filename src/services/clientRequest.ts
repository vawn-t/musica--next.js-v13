import { notFound } from 'next/navigation';
import { FetchType, TagKey } from '@constants/index';

export const fetcher = async <T>(
  endPoint: string,
  method?: FetchType,
  tags?: TagKey[]
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
        next: { revalidate: 30, tags: [...(tags || [])] }
      });
      break;

    case FetchType.default:
    default:
      // This request should be cached until manually invalidated.
      res = await fetch(process.env.NEXT_PUBLIC_API_HOST + endPoint, {
        cache: 'force-cache',
        next: { tags: [...(tags || [])] }
      });
      break;
  }

  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    }

    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const PUT = async <T>(endPoint: string, payload: T) =>
  await fetch(process.env.NEXT_PUBLIC_API_HOST + endPoint, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

export const swrFetcher = async (...args: any) => {
  return fetch(args).then((res) => res.json());
};

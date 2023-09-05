export const fetcher = async <T>(
  endPoint: string,
  method?: 'ssr' | 'isr'
): Promise<T> => {
  let res;
  switch (method) {
    case 'ssr':
      // This request should be refetched on every request.
      res = await fetch(process.env.API_HOST + endPoint, {
        cache: 'no-store'
      });
      break;

    case 'isr':
      // This request should be cached with a lifetime of 30 seconds.
      res = await fetch(process.env.API_HOST + endPoint, {
        next: { revalidate: 30 }
      });
      break;

    default:
      // This request should be cached until manually invalidated.
      res = await fetch(process.env.API_HOST + endPoint, {
        cache: 'force-cache'
      });
      break;
  }

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

import { BANNER } from '@constants/index';
import { BannerResponse } from '@/types';
import { fetcher } from './clientRequest';

export const getFirstBanner = async () =>
  await fetcher<BannerResponse>(BANNER.getById(1));

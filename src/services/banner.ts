// Constants
import { BANNER } from '@constants/index';

// Types
import { BannerResponse } from '@/types';

// Services
import { fetcher } from './clientRequest';

// Models
import { Banner } from '@models/index';

export const getFirstBanner = async () => {
  const {
    data: {
      attributes: { description, title, url, background }
    }
  } = await fetcher<BannerResponse>(BANNER.getById(1));

  const banner = new Banner({
    description,
    title,
    url,
    imgHash: background.data.attributes.hash
  });

  return banner;
};

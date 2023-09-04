import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('@components/Banner'));

async function getData() {
  const res = await fetch(`${process.env.API_HOST}/banners/1?populate=*`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const BannerPage = async () => {
  const {
    data: {
      attributes: { description, title, url, background }
    }
  } = await getData();
  return (
    <Banner
      description={description}
      title={title}
      url={url}
      imgUrl={background.data.attributes.url}
    />
  );
};

export default BannerPage;

import Home, { HomeProps } from '../templates/Home';
import { loadPages } from '../api/load-pages';
import { GetStaticProps } from 'next';

export default function Index({ data }: HomeProps) {
  return <Home data={data} />;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  let data = null;
  try {
    data = await loadPages('landing-page');
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.error(err.message);
  }

  if (!data || data.length === 0) {
    return {
      notFound: true,
    };
  }
};

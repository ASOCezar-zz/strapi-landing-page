import PropTypes from 'prop-types';

import Home from '../templates/Home';
import { loadPages } from '../api/load-pages';

export default function Index({ data }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
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

Index.propTypes = {
  data: PropTypes.array,
};

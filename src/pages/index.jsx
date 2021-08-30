import PropTypes from 'prop-types';
import config from '../config';
import { mapData } from '../api/map-data';
import Home from '../templates/Home';

export default function Index({ data }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  try {
    const raw = await fetch(config.url + config.defaultSlug);
    const json = await raw.json();
    const data = mapData(json);
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.error(err.message);
  }
};

Index.propTypes = {
  data: PropTypes.array,
};

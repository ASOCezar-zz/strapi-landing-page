import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';

import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridSection } from '../../components/GridSection';
import { Gallery } from '../../components/Gallery';

import config from '../../config';

const Home = ({ data }) => {
  if (!data || !data.length) {
    return <PageNotFound />;
  }

  const { menu, sections, footerHtml, slug, title } = data[0];
  const { links, text, link, image } = menu;

  return (
    <>
      <Head>
        <title>
          {title} | {config.siteName}
        </title>
      </Head>
      <Base links={links} footerHtml={footerHtml} logoData={{ text, link, image }}>
        {sections.map((section, index) => {
          const key = `${slug}-${index}`;
          const { component } = section;
          switch (component) {
            case 'section.section-two-columns':
              return <GridTwoColumns key={key} {...section} />;
            case 'section.section-content':
              return <GridContent key={key} {...section} />;
            case 'section.section-grid-text':
              return <GridSection key={key} {...section} />;
            case 'section.section-grid-image':
              return <Gallery key={key} {...section} />;
          }
        })}
      </Base>
    </>
  );
};

export default Home;

Home.propTypes = {
  data: PropTypes.array,
};

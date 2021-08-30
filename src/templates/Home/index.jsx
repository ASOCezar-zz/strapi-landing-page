import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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

const Home = () => {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathName ? pathName : config.defaultSlug;

    const load = async () => {
      try {
        const data = await fetch(config.url + config.defaultSlug);
        const json = await data.json();
        const pageData = mapData(json);
        setData(pageData[0]);
      } catch (e) {
        console.error(e.message);
        setData(undefined);
      }
    };

    load();
  }, [location]);

  console.log(data);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }

    if (data && !data.slug) {
      document.title = `Carregando... | ${config.siteName}`;
    }

    if (data && data.title) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, image } = menu;

  return (
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
  );
};

export default Home;

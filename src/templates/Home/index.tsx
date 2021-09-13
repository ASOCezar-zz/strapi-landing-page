import Head from 'next/head';

import { Base } from '../Base';
import { GridTwoColumns, GridTwoColumnsProps } from '../../components/GridTwoColumns';
import { GridContent, GridContentProps } from '../../components/GridContent';
import { GridSection, GridSectionProps } from '../../components/GridSection';
import { Gallery, GalleryProps } from '../../components/Gallery';

import config from '../../config';

import { LogoLinkProps } from '../../components/LogoLink';
import { MenuLinkProps } from '../../components/MenuLink';

export type PageData = {
  title: string;
  slug: string;
  footerHtml: string;
  menu: LogoLinkProps & { links: MenuLinkProps[] };
  sections: SectionProps[];
};

export type SectionProps = (GalleryProps | GridTwoColumnsProps | GridContentProps | GridSectionProps) & {
  component: string;
};

export type HomeProps = {
  data: PageData[];
};

const Home = ({ data }: HomeProps) => {
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
              return <GridTwoColumns key={key} {...(section as GridTwoColumnsProps)} />;
            case 'section.section-content':
              return <GridContent key={key} {...(section as GridContentProps)} />;
            case 'section.section-grid-text':
              return <GridSection key={key} {...(section as GridSectionProps)} />;
            case 'section.section-grid-image':
              return <Gallery key={key} {...(section as GalleryProps)} />;
          }
        })}
      </Base>
    </>
  );
};

export default Home;

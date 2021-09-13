/* eslint-disable @typescript-eslint/no-explicit-any */
import { mapSections } from './map-sections';
import { mapMenu } from './map-menu';
import { PageData } from '../templates/Home';

export const mapData = (pagesData = [{}] as any): PageData[] => {
  return pagesData.map((data): PageData => {
    const { footer_text = '', slug = '', title = '', sections = [], menu = {} } = data;
    return {
      footerHtml: footer_text,
      slug: slug,
      title: title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};

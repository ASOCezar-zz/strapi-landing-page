import { mapSections } from './map-sections';
import { mapMenu } from './map-menu';

export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
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

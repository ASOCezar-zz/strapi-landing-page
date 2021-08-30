import { mapData } from './map-data';

describe('map-data', () => {
  it('should map data even if it have no data', () => {
    const pagesData = mapData()[0];
    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.slug).toBe('');
    expect(pagesData.title).toBe('');
  });

  it('should map data if have any data', () => {
    const pagesData = mapData([
      { footer_text: '<p>Oie</p>', slug: 'slug', title: 'title', sections: [1, 2, 3, 4], menu: { a: 'b' } },
    ])[0];

    expect(pagesData.footerHtml).toBe('<p>Oie</p>');
    expect(pagesData.slug).toBe('slug');
    expect(pagesData.title).toBe('title');
  });
});

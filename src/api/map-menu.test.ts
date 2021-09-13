import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  it('should return source object if there is no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.image).toBe('');
    expect(menu.link).toBe('');
  });

  it('should map menu links correctly', () => {
    const menu = mapMenu({
      open_new_tab: false,
      logo_text: 'Landing Page',
      logo_link: '#home',
      menu_link: [
        {
          open_new_tab: false,
          link_text: 'pricing',
          url: '#pricing',
        },
        {
          open_new_tab: false,
          link_text: 'contact',
          url: '#contact',
        },
      ],
      logo: {
        url: 'a.svg',
      },
    });
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Landing Page');
    expect(menu.image).toBe('a.svg');
    expect(menu.link).toBe('#home');
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe('pricing');
    expect(menu.links[0].link).toBe('#pricing');
  });

  it('should return an empty array if no links', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should return links correctly', () => {
    const links = mapMenuLinks([
      {
        open_new_tab: false,
        link_text: 'pricing',
        url: '#pricing',
      },
      {},
    ]);
    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('pricing');
    expect(links[0].link).toBe('#pricing');
  });
});

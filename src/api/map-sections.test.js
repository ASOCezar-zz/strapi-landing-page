import { mapImageGrid, mapSectionContent, mapSections, mapSectionTwoColumns, mapTextGrid } from './map-sections';
import pagesData from './data.json';

describe('map-sections', () => {
  it('Should render a source section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('Should render a section correctly', () => {
    const data = mapSections(pagesData[0].sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('Should map section two-columns without data', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.image).toBe('');
    expect(data.title).toBe('');
  });

  it('Should map section two-columns', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'JANUARY BRINGS US FIREFOX 85',
      description: 'abc',
      metadata: {
        background: true,
        name: 'Home',
        section_id: 'home',
      },
      image: {
        url: 'a.svg',
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.image).toBe('a.svg');
    expect(data.title).toBe('JANUARY BRINGS US FIREFOX 85');
    expect(data.text).toBe('abc');
  });

  it('Should map section content without data', () => {
    const data = mapSectionContent();

    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.html).toBe('');
    expect(data.title).toBe('');
  });

  it('Should map section content', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      title: 'NEWS COVERAGE AND SOME SURPRISES',
      content:
        '<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs. We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries. We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.</p>',
      metadata: {
        background: false,
        name: 'intro',
        section_id: 'intro',
      },
    });

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('intro');
    expect(data.html).toBe(
      '<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs. We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries. We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.</p>',
    );
    expect(data.title).toBe('NEWS COVERAGE AND SOME SURPRISES');
  });

  it('Should render a section grid without image or text', () => {
    const data = mapSections([
      {
        __component: 'section.section-grid',
        image_grid: [
          {
            title: '',
            text: '',
          },
        ],
      },
      {
        __component: 'section.section-grid',
        text_grid: [],
      },
      {
        __component: 'section.section-grid',
        image_grid: [],
        text_grid: [],
      },
    ]);
  });

  it('Should map grid text without data', () => {
    const data = mapTextGrid(undefined);

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('');
    expect(data.description).toBe('');
    expect(data.title).toBe('');
  });

  it('Should map grid text', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      title: 'My-grid',
      description: 'my-grid',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'Testando 1',
        },
        {
          title: undefined,
          description: undefined,
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        name: 'grid-one',
        section_id: 'grid-one',
      },
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('grid-one');
    expect(data.description).toBe('my-grid');
    expect(data.title).toBe('My-grid');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].text).toBe('Testando 1');
    expect(data.grid[1].title).toBe('');
    expect(data.grid[1].text).toBe('');
  });

  it('Should map grid image without data', () => {
    const data = mapImageGrid();

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('');
    expect(data.description).toBe('');
    expect(data.title).toBe('');
  });

  it('Should map grid image', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      title: 'Gallery',
      description: 'lorem ipsum',
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: 'Look at me',
            url: 'https://res.cloudinary.com/asocezar/image/upload/v1628294871/photo_2_ca79d1362f.jpg',
          },
        },
        {
          image: {
            alternativeText: undefined,
            url: undefined,
          },
        },
        {
          image: undefined,
        },
      ],
      metadata: {
        background: false,
        name: 'gallery',
        section_id: 'gallery',
      },
    });

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('gallery');
    expect(data.description).toBe('lorem ipsum');
    expect(data.title).toBe('Gallery');
    expect(data.grid[0].altText).toBe('Look at me');
    expect(data.grid[0].image).toBe(
      'https://res.cloudinary.com/asocezar/image/upload/v1628294871/photo_2_ca79d1362f.jpg',
    );
    expect(data.grid[1].altText).toBe('');
    expect(data.grid[1].image).toBe('');
    expect(data.grid[2]).toEqual({ altText: '', image: '' });
  });
});

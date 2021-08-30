export const mapSections = (sections = []) => {
  return sections.map((section) => {
    const { text_grid = [{}], image_grid = [{}] } = section;
    switch (section.__component) {
      case 'section.section-content':
        return mapSectionContent(section);

      case 'section.section-two-columns':
        return mapSectionTwoColumns(section);

      case 'section.section-grid':
        if (text_grid.length > 0) {
          return mapTextGrid(section);
        }
        if (image_grid.length > 0) {
          return mapImageGrid(section);
        }
        break;

      default:
        return section;
    }
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: image = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;
  return {
    component,
    title,
    text,
    image,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};

export const mapTextGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-text',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((txt) => {
      const { title = '', description: text = '' } = txt;
      return {
        title,
        text,
      };
    }),
  };
};

export const mapImageGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    image_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-image',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((img) => {
      const { image: { alternativeText: altText = '', url: image = '' } = [{ altText: '', image: '' }] } = img;
      return {
        altText,
        image,
      };
    }),
  };
};

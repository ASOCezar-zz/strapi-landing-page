import { screen } from '@testing-library/react';
import { GridContent } from '.';
import { renderTheme } from '../../styles/renderTheme';

import mock from './mock';

describe('<GridContent />', () => {
  it('Should render a grid content and match with a snapshot', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toBeInTheDocument;
    expect(container).toMatchSnapshot();
  });

  it('Should render a grid content with a white background and match with a snapshot', () => {
    const { container } = renderTheme(<GridContent {...mock} background={undefined} />);
    expect(container).toBeInTheDocument;
    expect(container).toMatchSnapshot();
  });
});

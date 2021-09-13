import { GridSection } from '.';
import { renderTheme } from '../../styles/renderTheme';

import mock from './mock';

describe('<GridSection />', () => {
  it('Should render a grid component and match with snapshot', () => {
    const { container } = renderTheme(<GridSection {...mock} />);
    expect(container).toBeInTheDocument;
    expect(container.firstChild).toMatchSnapshot();
  });
  it('Should render a grid component and match with snapshot', () => {
    const { container } = renderTheme(<GridSection {...mock} background={undefined} />);
    expect(container).toBeInTheDocument;
    expect(container.firstChild).toMatchSnapshot();
  });
});

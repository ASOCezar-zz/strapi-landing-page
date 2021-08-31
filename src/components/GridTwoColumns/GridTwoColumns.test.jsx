import { GridTwoColumns } from '.';
import { renderTheme } from '../../styles/renderTheme';

import mock from './mock';

describe('<GridTwoColumns />', () => {
  it('Should render two columns grid component and match with snapshot', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container).toBeInTheDocument;
    expect(container.firstChild).toMatchSnapshot();
  });
});

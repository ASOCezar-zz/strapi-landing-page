import { Gallery } from '.';
import { renderTheme } from '../../styles/renderTheme';

import mock from './mock';

describe('<Gallery />', () => {
  it('Should render a Gallery component and match with snapshot', () => {
    const { container } = renderTheme(<Gallery {...mock} />);
    expect(container).toBeInTheDocument;
    expect(container.firstChild).toMatchSnapshot();
  });
  it('Should render a Gallery component and match with snapshot', () => {
    const { container } = renderTheme(<Gallery {...mock} background={undefined} />);
    expect(container).toBeInTheDocument;
    expect(container.firstChild).toMatchSnapshot();
  });
});

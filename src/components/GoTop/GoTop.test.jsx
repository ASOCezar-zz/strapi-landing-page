import { screen } from '@testing-library/react';
import { GoTop } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<GoTop />', () => {
  it('Should render', () => {
    renderTheme(<GoTop />);
    expect(screen.getByLabelText('Go to top')).toBeInTheDocument;
    expect(screen.getByLabelText('Go to top')).toHaveAttribute('href', '#');
  });

  it('Should match with snapshot', () => {
    const { container } = renderTheme(<GoTop />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

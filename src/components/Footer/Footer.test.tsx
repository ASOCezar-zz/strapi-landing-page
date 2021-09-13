import { screen } from '@testing-library/react';
import { Footer } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<Footer />', () => {
  it('Should render a footer and match with a snapshot', () => {
    const { container } = renderTheme(<Footer html={'<h1>children</h1>'} />);
    expect(screen.getByRole('heading', { name: 'children' })).toBeInTheDocument;
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should render a footer witout a children and match with a snapshot', () => {
    const { container } = renderTheme(<Footer />);
    expect(screen.queryByRole('heading', { name: 'children' })).not.toBeInTheDocument;
    expect(container.firstChild).toMatchSnapshot();
  });
});

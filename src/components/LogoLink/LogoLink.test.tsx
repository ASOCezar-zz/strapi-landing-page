import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<LogoLink />', () => {
  it('Should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Testing" />);
    expect(screen.getByRole('heading').firstChild).toHaveAttribute('href', '#target');
  });

  it('Should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="Testing" image="image.jpg" />);
    expect(screen.getByAltText(/testing/i)).toHaveAttribute('src', 'image.jpg');
  });

  it('Should a link with target blank', () => {
    renderTheme(<LogoLink link="#target" text="Testing" image="image.jpg" newTab={true} />);
    expect(screen.getByAltText(/testing/i)).toHaveAttribute('src', 'image.jpg');
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(<LogoLink link="#target" text="Testing" image="image.jpg" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

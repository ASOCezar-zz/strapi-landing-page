import { screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<MenuLink />', () => {
  it('Should render a link', () => {
    renderTheme(
      <MenuLink link="https://google.com" newTab={false}>
        children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'children' })).toBeInTheDocument;
  });

  it('Should render a link', () => {
    renderTheme(
      <MenuLink link="https://google.com" newTab={true}>
        children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'children' })).toHaveAttribute('target', '_blank');
  });

  it('Should match with snapshot', () => {
    renderTheme(<MenuLink link="https://google.com">children</MenuLink>);
    expect(screen.getByRole('link', { name: 'children' })).toMatchSnapshot();
  });
});

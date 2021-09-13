import { fireEvent, screen } from '@testing-library/react';
import { Menu } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

import linksMock from '../NavLinks/mock';
const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu />', () => {
  it('Should render Logo and Main Menu', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument;
    expect(screen.getByRole('navigation', { name: 'main menu' })).toBeInTheDocument;
  });

  it('Should render a button to open a mobile menu to navigate thru page', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);

    const button = screen.getByLabelText('open/close menu');
    const menuContainer = button.nextSibling;
    const link = screen.getByRole('link', { name: 'Link 1' });

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('open menu')).toBeInTheDocument;

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('close menu')).toBeInTheDocument;

    fireEvent.click(link);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('open menu')).toBeInTheDocument;

    fireEvent.click(button);
    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('open menu')).toBeInTheDocument;
  });

  it('should not render links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);

    const navigationMenu = screen.getByRole('navigation', { name: 'main menu' });

    expect(navigationMenu.firstChild).not.toBeInTheDocument;
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should match with snapshot', () => {
    const { container } = renderTheme(<Menu links={linksMock} logoData={logoData} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

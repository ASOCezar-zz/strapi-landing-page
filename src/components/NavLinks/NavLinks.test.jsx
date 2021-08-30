import { screen } from '@testing-library/react';
import { NavLinks } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

import mock from './mock';

describe('<NavLinks />', () => {
  it('Should render a group of links', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('Should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('Should change style rules when screen width is lower than 768px', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getByText(/link 1/i).parentElement).toHaveStyleRule('flex-flow', 'column wrap', {
      media: theme.media.lteMedium,
    });
  });

  it('Should match with snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

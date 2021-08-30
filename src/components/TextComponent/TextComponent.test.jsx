import { screen } from '@testing-library/react';
import { TextComponent } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
  it('Should render a TextComponent', () => {
    renderTheme(<TextComponent>children</TextComponent>);
    expect(screen.getByText('children')).toBeInTheDocument;
  });

  it('Should render a TextComponent with correctly font-size', () => {
    renderTheme(<TextComponent>children</TextComponent>);
    const textComponent = screen.getByText('children');

    expect(textComponent).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>children</TextComponent>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

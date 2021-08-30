import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('Should render with default values', () => {
    renderTheme(<Heading> texto </Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.huge,
      'text-transform': 'none',
    });
  });

  it('Should render with white color', () => {
    renderTheme(<Heading colorDark={false}> texto </Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('Should render with font-size medium', () => {
    renderTheme(<Heading size="small"> texto </Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('Should render with font-size large', () => {
    renderTheme(<Heading size="medium"> texto </Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });
  });

  it('Should render with font-size xlarge', () => {
    renderTheme(<Heading size="big"> texto </Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });
  });

  it('Should render with font-size huge', () => {
    renderTheme(<Heading size="huge"> texto </Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.huge,
    });
  });

  it('Should render with correct font size when screen width is smaller than 768px', () => {
    renderTheme(<Heading size="huge"> texto </Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, { media: theme.media.lteMedium });
  });

  it('Should render with uppercase letters', () => {
    renderTheme(<Heading uppercase> texto </Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('Should match with snapshot', () => {
    const { container } = renderTheme(<Heading> texto </Heading>);

    expect(container.firstChild).toMatchSnapshot();
  });
});

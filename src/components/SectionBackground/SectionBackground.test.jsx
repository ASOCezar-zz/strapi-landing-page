import { SectionBackground } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

describe('<SectionBackground />', () => {
  it('Should render with background dark and match with snapshot', () => {
    const { container } = renderTheme(
      <SectionBackground background>
        <h1>children</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toHaveStyleRule('background-color', `${theme.colors.primaryColor}`);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should render with background white and match with snapshot', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>children</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toHaveStyleRule('background-color', `${theme.colors.white}`);
    expect(container.firstChild).toMatchSnapshot();
  });
});

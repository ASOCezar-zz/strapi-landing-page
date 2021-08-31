import { SectionContainer } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<SectionContainer />', () => {
  it('Should render content and match with a snapshot', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>children</h1>
      </SectionContainer>,
    );
    expect(container.firstChild).toBeInTheDocument;
    expect(container.firstChild).toMatchSnapshot();
  });
});

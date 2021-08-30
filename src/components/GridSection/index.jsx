import * as Styled from './styles';
import PropTypes from 'prop-types';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridSection = ({ title, description, grid, background = false, sectionId = '' }) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" colorDark={!background} uppercase as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((item) => {
            return (
              <Styled.GridElement key={item.title}>
                <Heading size="medium" colorDark={!background} as="h3">
                  {item.title}
                </Heading>
                <TextComponent>{item.text}</TextComponent>
              </Styled.GridElement>
            );
          })}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridSection.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  background: PropTypes.bool,
  sectionId: PropTypes.string,
  grid: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

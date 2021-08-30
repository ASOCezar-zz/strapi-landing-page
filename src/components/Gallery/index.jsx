import * as Styled from './styles';
import PropTypes from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const Gallery = ({ title, description, grid, background = false, sectionId = '' }) => {
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
              <Styled.GridElement key={item.image}>
                <Styled.Image src={item.image} alt={item.altText} />
              </Styled.GridElement>
            );
          })}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

Gallery.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  background: PropTypes.bool,
  sectionId: PropTypes.string,
  grid: PropTypes.arrayOf(
    PropTypes.shape({
      altText: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

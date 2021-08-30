import * as Styled from './styles';
import PropTypes from 'prop-types';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridTwoColumns = ({ title, text, image, background = false, sectionId = '' }) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container background={background}>
        <Styled.TextContainer>
          <Heading uppercase colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={image} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  title: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  background: PropTypes.bool,
  sectionId: PropTypes.string,
};

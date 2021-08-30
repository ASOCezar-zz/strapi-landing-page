import * as Styled from './styles';
import PropTypes from 'prop-types';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export const Footer = ({ html = '' }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{html}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  html: PropTypes.string,
};

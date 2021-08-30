import * as Styled from './styles';
import PropTypes from 'prop-types';
import { SectionContainer } from '../SectionContainer';

export const SectionBackground = ({ children, background = false, sectionId = '' }) => {
  return (
    <Styled.Container background={background} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.bool,
  sectionId: PropTypes.string,
};

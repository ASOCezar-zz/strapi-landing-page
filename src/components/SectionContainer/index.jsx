import * as Styled from './styles';
import PropTypes from 'prop-types';

export const SectionContainer = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

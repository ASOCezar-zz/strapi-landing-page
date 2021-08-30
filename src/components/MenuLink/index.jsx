import * as Styled from './styles';
import PropTypes from 'prop-types';

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
};

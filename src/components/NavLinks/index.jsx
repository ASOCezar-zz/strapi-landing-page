import * as Styled from './styles';
import PropTypes from 'prop-types';
import { MenuLink } from '../MenuLink';

export const NavLinks = ({ links = [] }) => {
  return (
    <Styled.Container aria-label="main menu">
      {links.map((link, index) => {
        return <MenuLink key={index} {...link} />;
      })}
    </Styled.Container>
  );
};

NavLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      newTab: PropTypes.bool,
    }),
  ),
};

import { useState } from 'react';

import * as Styled from './styles';
import PropTypes from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

export const Menu = ({ links = [], logoData }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <>
      <Styled.Button onClick={() => setIsMenuVisible(!isMenuVisible)} aria-label="open/close menu">
        {isMenuVisible ? <CloseIcon aria-label="close menu" /> : <MenuIcon aria-label="open menu" />}
      </Styled.Button>
      <Styled.Container isMenuVisible={isMenuVisible}>
        <SectionContainer>
          <Styled.MenuContainer onClick={() => setIsMenuVisible(false)}>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: PropTypes.shape(LogoLink.propTypes).isRequired,
};

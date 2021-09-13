import { useState } from 'react';

import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink, LogoLinkProps } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { MenuLinkProps } from '../MenuLink';

export type MenuProps = {
  links?: MenuLinkProps[];
  logoData: LogoLinkProps;
};

export const Menu = ({ links = [], logoData }: MenuProps) => {
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

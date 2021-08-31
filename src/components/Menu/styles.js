import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.header`
  ${({ theme, isMenuVisible }) => css`
    position: fixed;
    z-index: 5;
    left: 0;
    right: 0;
    top: 0;
    transition: all 0.3s ease-in-out;

    border-bottom: 0.1rem ${theme.colors.mediumGray};
    background: ${theme.colors.white};

    & ${SectionContainer} {
      padding-block: 0;
    }

    & ${Heading} {
      margin-block: 0;
    }

    @media ${theme.media.lteMedium} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;

      ${isMenuVisible && menuVisible(theme)}

      & ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        margin: 0;
        overflow-y: auto;
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.font.spacings.huge} 0;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    z-index: 6;
    position: fixed;
    top: 3rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: none;
    display: none;

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  `}
`;

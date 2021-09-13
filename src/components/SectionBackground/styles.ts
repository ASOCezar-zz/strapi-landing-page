import styled, { css } from 'styled-components';
import { Theme } from '../../../types/styled-components';

type Background = {
  background?: boolean;
};

const containerBackgroundChange = (theme: Theme) => css`
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div<Background>`
  ${({ theme, background }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${background && containerBackgroundChange(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;

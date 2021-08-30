import styled, { css } from 'styled-components';

const containerBackgroundChange = (theme) => css`
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${background && containerBackgroundChange(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;

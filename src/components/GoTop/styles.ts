import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;

    bottom: 3rem;
    right: 2rem;

    z-index: 5;
    opacity: 0.6;

    border-radius: 50%;
  `}
`;

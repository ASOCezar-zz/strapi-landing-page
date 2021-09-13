import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.font.spacings.small};
    color: ${theme.colors.primaryColor};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0.78rem;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.secondaryColor};
      left: 50%;
      transition: all 0.2s ease-in-out;
    }

    &:hover::after {
      width: 50%;
      left: 25%;
    }
  `}
`;

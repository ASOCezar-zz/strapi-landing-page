import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: inherit;

    > img {
      height: 2.8rem;
    }
  `}
`;

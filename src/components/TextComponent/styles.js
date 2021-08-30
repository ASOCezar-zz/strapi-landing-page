import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    @media ${theme.media.lteMedium} {
      font-size: ${theme.font.sizes.small};
    }
  `}
`;

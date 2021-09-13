import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    & ${TextComponent} {
      margin-bottom: ${theme.font.spacings.medium};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.font.spacings.large};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    & ${HeadingContainer} {
      position: relative;
      left: 5rem;

      @media ${theme.media.lteMedium} {
        left: 3.1rem;
      }
    }

    & ${HeadingContainer}:before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: ${theme.font.sizes.huge};
      top: -2rem;
      left: -5rem;
      transform: rotate(12deg);
    }
  `}
`;

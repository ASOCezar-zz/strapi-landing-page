import styled, { css, keyframes } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    > ${TextComponent} {
      margin-bottom: ${theme.font.spacings.huge};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.font.spacings.large};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

const bordersAnimation = keyframes`
  0%{border-radius: 100%; transform: scale(0)};
  50%{border-radius: 50%; transform: scale(1.5)}
  100%{border-radius: 0; transform: scale(1)};
`;

const animateElement = ({ number, show }) =>
  show &&
  css`
    animation: ${bordersAnimation} 500ms ${number}s ease forwards;
  `;

export const GridElement = styled.div`
  ${({ number, show }: GridType) => css`
    overflow: hidden;
      ${animateElement({ number, show })}
    }
  `}
`;

const showItem = keyframes`
  0% {transform: scale(0)};
  50% {transform: scale(1.5)};
  100% {transform: scale(1)}
`;

type GridType = {
  number: number;
  show: boolean;
};

const animateGrid = ({ number, show }: GridType) =>
  show &&
  css`
    animation: ${showItem} 350ms ${number}s ease forwards;
  `;

export const Image = styled.img<GridType>`
  ${({ number, show }) => css`
    transform: scale(0);
    width: 100%;

    ${animateGrid({ number, show })}
  `}
`;

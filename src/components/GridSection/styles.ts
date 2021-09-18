import styled, { css, keyframes } from 'styled-components';
import { ContainerType } from '../GridContent/styles';
import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';

const revealText = keyframes`
  from {transform: translateX(-101%)}
  to {transform: translateX(101%)}
`;

const fade = keyframes`
  to{opacity: 1};
`;

const revealTitle = ({ show }: ContainerType) =>
  show &&
  css`
    ::after {
      animation: ${revealText} 500ms ease-out forwards;
    }
    > ${HeadingContainer} {
      animation: ${fade} 320ms 600ms linear forwards;
    }
  `;

const revealDescription = ({ show }: ContainerType) =>
  show &&
  css`
    animation: ${fade} 320ms 600ms linear forwards;
  `;

export const Container = styled.div<ContainerType>`
  ${({ theme, show }) => css`
    position: relative;

    .reveal-container {
      position: relative;
      overflow: hidden;
      width: fit-content;
      ${revealTitle({ show })}
      ::after {
        content: '';
        position: absolute;
        background-color: white;
        inset: 0;
        display: block;
      }

      ${HeadingContainer} {
        opacity: 0;
      }
    }

    > ${TextComponent} {
      opacity: 0;
      ${revealDescription({ show })}
    }

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

const showItem = keyframes`
  from {transform: scale(0)}
  to {transform: scale(1)};
`;

type GridType = {
  number: number;
  show: boolean;
};

const animateGrid = ({ number, show }: GridType) =>
  show &&
  css`
    animation: ${showItem} 350ms ${number}s linear forwards;
  `;

export const GridElement = styled.div<GridType>`
  ${({ theme, number, show }) => css`
    transform: scale(0);
    ${animateGrid({ number, show })}
    & ${HeadingContainer} {
      position: relative;
      left: -7rem;

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

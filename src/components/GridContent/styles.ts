import styled, { css, keyframes } from 'styled-components';

import { Title } from '../Heading/styles';

export type ContainerType = {
  show: boolean;
};

const showTitle = keyframes`
  to {transform: translateY(0)};
`;

const presentContent = ({ show }: ContainerType) =>
  show &&
  css`
    ${Title} {
      animation: ${showTitle} 300ms 1s ease-in-out forwards;
    }
  `;

export const Container = styled.div<ContainerType>`
  ${({ show }) => css`
    text-align: center;
    max-width: 58rem;
    margin: 0 auto;
    overflow: hidden;
    transition: all 1s 1s ease-in-out;

    ${Title} {
      transform: translateY(-200%);
    }

    ${presentContent({ show })};
  `}
`;

const showText = keyframes`
  to {opacity: 1};
`;

const presentText = ({ show }: ContainerType) =>
  show &&
  css`
    animation: ${showText} 300ms 1500ms ease-in-out forwards;
  `;

export const Html = styled.div<ContainerType>`
  ${({ theme, show }) => css`
    margin-block: ${theme.font.spacings.huge};
    opacity: 0;

    ${presentText({ show })};
  `}
`;

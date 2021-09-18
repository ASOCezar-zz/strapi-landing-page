import styled, { css, keyframes } from 'styled-components';
import { Title } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';

const shownTitle = keyframes`
  to{transform: translateX(0)};
`;

const shownDescription = keyframes`
  to{opacity: 1};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.font.spacings.large};
    tr @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
    }

    ${Title} {
      margin-bottom: ${theme.font.spacings.xlarge};
      transform: translateX(-100vw);
      animation: ${shownTitle} 300ms linear forwards;
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    ${TextComponent} {
      opacity: 0;

      animation: ${shownDescription} 250ms 500ms linear forwards;
    }

    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.font.spacings.large};
    }
  `}
`;

export const ImageContainer = styled.div``;

const hasShown = keyframes`
  to {transform: scale(1)};
`;

export const Image = styled.img`
  ${() => css`
    width: 100%;
    transform: scale(0);
    animation: ${hasShown} 300ms 500ms ease-in-out forwards;
  `}
`;

import * as Styled from './styles';

import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export type FooterProps = {
  html?: string;
};

export const Footer = ({ html }: FooterProps) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{html}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

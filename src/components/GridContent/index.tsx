import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { useRef, useState } from 'react';
import { useSentinel } from '../../utils/useSentinel';

export type GridContentProps = {
  title: React.ReactNode;
  html: string;
  background?: boolean;
  sectionId?: string;
  component?: string;
};

export const GridContent = ({ title, html, background = false, sectionId = '' }: GridContentProps) => {
  const sentinel = useRef<HTMLDivElement>(null);

  const [hasShown, setHasShown] = useState<boolean>(false);

  useSentinel(sentinel, setHasShown);

  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container ref={sentinel} show={hasShown}>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Styled.Html show={hasShown}>
          <TextComponent>{html}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
};

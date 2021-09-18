import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { useSentinel } from '../../utils/useSentinel';
import { useRef, useState } from 'react';

export type GridSectionElementProps = {
  title: string;
  text: string;
};

export type GridSectionProps = {
  title: React.ReactNode;
  description: string;
  background?: boolean;
  sectionId?: string;
  grid: GridSectionElementProps[];
  component?: string;
};

export const GridSection = ({ title, description, grid, background = false, sectionId = '' }: GridSectionProps) => {
  const sentinel = useRef<HTMLDivElement>(null);

  const [hasShown, setHasShown] = useState<boolean>(false);

  useSentinel(sentinel, setHasShown);

  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container ref={sentinel} show={hasShown}>
        <div className="reveal-container">
          <Heading size="huge" colorDark={!background} uppercase as="h2">
            {title}
          </Heading>
        </div>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((item, index) => {
            return (
              <Styled.GridElement key={item.title} number={index} show={hasShown}>
                <Heading size="medium" colorDark={!background} as="h3">
                  {item.title}
                </Heading>
                <TextComponent>{item.text}</TextComponent>
              </Styled.GridElement>
            );
          })}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

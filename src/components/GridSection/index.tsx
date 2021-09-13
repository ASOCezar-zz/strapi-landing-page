import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

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
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" colorDark={!background} uppercase as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((item) => {
            return (
              <Styled.GridElement key={item.title}>
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

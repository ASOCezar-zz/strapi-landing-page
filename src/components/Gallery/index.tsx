import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { useRef, useState } from 'react';
import { useSentinel } from '../../utils/useSentinel';

export type GalleryProps = {
  title: React.ReactNode;
  description: string;
  background: boolean;
  sectionId: string;
  grid: Array<GridGalleryElementsProps>;
  component?: string;
};

export type GridGalleryElementsProps = {
  altText: string;
  image: string;
};

export const Gallery = ({ title, description, grid, background = false, sectionId = '' }: GalleryProps) => {
  const sentinel = useRef<HTMLDivElement>(null);

  const [hasShown, setHasShown] = useState<boolean>(false);

  useSentinel(sentinel, setHasShown);

  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container ref={sentinel}>
        <Heading size="huge" colorDark={!background} uppercase as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((item, index) => {
            return (
              <Styled.GridElement key={item.image} show={hasShown} number={index}>
                <Styled.Image src={item.image} alt={item.altText} show={hasShown} number={index} />
              </Styled.GridElement>
            );
          })}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

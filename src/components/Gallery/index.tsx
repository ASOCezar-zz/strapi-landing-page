import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

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
              <Styled.GridElement key={item.image}>
                <Styled.Image src={item.image} alt={item.altText} />
              </Styled.GridElement>
            );
          })}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

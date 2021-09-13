import * as Styled from './styles';
import { Heading } from '../Heading';

export type LogoLinkProps = {
  text: string;
  image?: string;
  link: string;
};

export const LogoLink = ({ text, image = '', link }: LogoLinkProps) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {!!image && <img src={image} alt={text} />}
        {!image && text}
      </Styled.Container>
    </Heading>
  );
};

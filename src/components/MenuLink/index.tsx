import * as Styled from './styles';

export type MenuLinkProps = {
  children: string;
  link: string;
  newTab?: boolean;
};

export const MenuLink = ({ children, link, newTab }: MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self';
  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};

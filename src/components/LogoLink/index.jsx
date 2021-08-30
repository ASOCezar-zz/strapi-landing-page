import * as Styled from './styles';
import PropTypes from 'prop-types';
import { Heading } from '../Heading';

export const LogoLink = ({ text, image = '', link }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {!!image && <img src={image} alt={text} />}
        {!image && text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string.isRequired,
};

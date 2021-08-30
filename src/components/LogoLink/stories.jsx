import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    image: '/assets/logo.svg',
    link: '#',
  },
};

export const WithImage = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const WithoutImage = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

WithoutImage.args = {
  image: '',
};

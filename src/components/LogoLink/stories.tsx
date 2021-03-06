import { Meta, Story } from '@storybook/react/types-6-0';
import { LogoLink, LogoLinkProps } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    image: '/assets/logo.svg',
    link: '#',
  },
} as Meta;

export const WithImage: Story<LogoLinkProps> = (args) => {
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

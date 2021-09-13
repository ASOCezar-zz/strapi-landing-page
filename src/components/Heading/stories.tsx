import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Tema claro',
    colorDark: true,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Ligth = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Ligth.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'Tema escuro',
  colorDark: false,
};

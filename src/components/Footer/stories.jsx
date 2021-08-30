import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: '<a><p>Created with ❤ by Cezar</p></a>',
  },
  argTypes: {
    footerHtml: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};

import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
};

export const Template = (args) => {
  return (
    <div>
      <GoTop {...args} />
    </div>
  );
};

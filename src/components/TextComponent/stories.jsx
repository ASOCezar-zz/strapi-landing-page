import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quae tenetur autem ex magnam. Quo architecto voluptates, at corporis asperiores suscipit nobis quos fuga explicabo aperiam ab inventore provident ducimus.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};

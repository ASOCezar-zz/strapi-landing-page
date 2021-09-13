import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionContainer, SectionContainerProps } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vel, modi totam enim corporis quis
          repellendus, delectus officia cum reiciendis aliquam exercitationem nostrum illum architecto voluptatum autem
          mollitia temporibus accusamus!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<SectionContainerProps> = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};

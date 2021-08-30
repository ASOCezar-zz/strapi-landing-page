import { SectionBackground } from '.';
import { SectionContainer } from '../SectionContainer';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <SectionContainer>
        <div>
          <h1>SectionContainer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vel, modi totam enim corporis quis
            repellendus, delectus officia cum reiciendis aliquam exercitationem nostrum illum architecto voluptatum
            autem mollitia temporibus accusamus!
          </p>
        </div>
      </SectionContainer>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};

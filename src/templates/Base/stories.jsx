import { Base } from '.';

import { mockBase } from './mock';
import { GridSection } from '../../components/GridSection';
import gridMock from '../../components/GridSection/mock';

export default {
  title: 'Base',
  component: Base,
  args: mockBase,
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};

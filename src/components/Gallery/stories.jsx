import { Gallery } from '.';
import mock from './mock';

export default {
  title: 'Gallery',
  component: Gallery,
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <Gallery {...args} />
    </div>
  );
};

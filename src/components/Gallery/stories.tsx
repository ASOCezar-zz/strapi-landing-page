import { Meta, Story } from '@storybook/react/types-6-0';
import { Gallery, GalleryProps } from '.';
import mock from './mock';

export default {
  title: 'Gallery',
  component: Gallery,
  args: mock,
} as Meta;

export const Template: Story<GalleryProps> = (args) => {
  return (
    <div>
      <Gallery {...args} />
    </div>
  );
};

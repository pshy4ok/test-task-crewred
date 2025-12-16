import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '../components/Toast/Toast';
import type { ToastProps } from '../components/Toast/Toast.types';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ToastProps>;

export const Success: Story = {
  args: {
    message: 'This is a success toast!',
    type: 'success',
    duration: 3000,
  },
};

export const Error: Story = {
  args: {
    message: 'Something went wrong!',
    type: 'error',
    duration: 4000,
  },
};

export const Info: Story = {
  args: {
    message: 'Just so you know...',
    type: 'info',
    duration: 5000,
  },
};

export const Closable = () => (
  <Toast
    message="I can be closed manually"
    type="info"
    duration={10000}
    closable={true}
  />
);

export const Interactive = () => {
  const [show, setShow] = useState(true);

  return show ? (
    <Toast
      message="Click ✖ to close me"
      type="info"
      onClose={() => setShow(false)}
      closable={true}
      duration={10000}
    />
  ) : null;
};

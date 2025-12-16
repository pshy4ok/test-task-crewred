import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Input/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter number',
  },
};

export const Clearable: Story = {
  args: {
    type: 'text',
    value: 'Hello',
    placeholder: 'Clear me',
    clearable: true,
  },
};

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SidebarMenu } from '../components/SidebarMenu/SidebarMenu';
import type { SidebarMenuProps } from '../components/SidebarMenu/SidebarMenu.types';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Navigation/SidebarMenu',
  component: SidebarMenu,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    onClose: { action: 'onClose' },
  },
};

export default meta;
type Story = StoryObj<SidebarMenuProps>;

const menuItems = [
  { label: 'Dashboard', key: 'dashboard' },
  {
    label: 'Projects',
    key: 'projects',
    children: [
      { label: 'Project A', key: 'project-a' },
      { label: 'Project B', key: 'project-b' },
    ],
  },
  {
    label: 'Settings',
    key: 'settings',
    children: [
      { label: 'Profile', key: 'profile' },
      { label: 'Security', key: 'security' },
    ],
  },
];

export const Open: Story = {
  args: {
    items: menuItems,
    open: true,
  },
};

export const Closed: Story = {
  args: {
    items: menuItems,
    open: false,
  },
};

export const Interactive = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} style={{ margin: '1rem' }}>
        Open Sidebar
      </button>
      <SidebarMenu
        items={menuItems}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

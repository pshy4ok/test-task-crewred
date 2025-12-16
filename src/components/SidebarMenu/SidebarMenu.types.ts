export interface SidebarItem {
  label: string;
  key: string;
  children?: SidebarItem[];
}

export interface SidebarMenuProps {
  items: SidebarItem[];
  open: boolean;
  onClose?: () => void;
}

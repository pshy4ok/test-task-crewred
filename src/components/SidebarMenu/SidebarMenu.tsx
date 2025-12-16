import { useState } from 'react';
import type { SidebarMenuProps, SidebarItem } from './SidebarMenu.types';
import './SidebarMenu.css';

interface MenuItemProps {
  item: SidebarItem;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="menu-item">
      <div
        className="menu-label"
        onClick={() => hasChildren && setExpanded(!expanded)}
      >
        {item.label}
        {hasChildren && <span className={`arrow ${expanded ? 'open' : ''}`}>▸</span>}
      </div>
      {hasChildren && expanded && (
        <div className="submenu">
          {item.children!.map((child) => (
            <MenuItem key={child.key} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export const SidebarMenu = ({ items, open, onClose }: SidebarMenuProps) => {
  return (
    <>
      <div
        className={`sidebar-backdrop ${open ? 'show' : ''}`}
        onClick={onClose}
      />
      <div className={`sidebar ${open ? 'open' : ''}`}>
        {items.map((item) => (
          <MenuItem key={item.key} item={item} />
        ))}
      </div>
    </>
  );
};

import { Bell, Bookmark, House, Plus } from 'lucide-react';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../../components/sidebar';

const items = [
  {
    title: 'Home',
    icon: <House />,
    path: '/',
  },
  {
    title: 'Create',
    icon: <Plus />,
    path: '/',
  },
  {
    title: 'Notifications',
    icon: <Bell />,
    path: '/notifications',
  },
  {
    title: 'Bookmarks',
    icon: <Bookmark />,
    path: '/bookmarks',
  },
];

export const NavigationGroup = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Navigation</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton size="lg" asChild>
                <a href={item.path} className="text-xl">
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

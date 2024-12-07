import { SidebarProvider, SidebarTrigger } from '@/components/sidebar';
import { AppSidebar } from '@/layouts/desktop/app-sidebar';
import { Outlet } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';
import { BottomNavbar } from './mobile/bottom-navbar';

export const MainLayout = () => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <>
      <Outlet />
      <BottomNavbar />
    </>
  ) : (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <header className="flex items-center h-16 px-2">
          <SidebarTrigger />
        </header>
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

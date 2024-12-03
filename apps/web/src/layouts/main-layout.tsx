import { SidebarProvider, SidebarTrigger } from '@/components/sidebar';
import { AppSidebar } from '@/layouts/components/app-sidebar';
import { Outlet } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';
import { BottomNavbar } from './components/bottom-navbar';

export const MainLayout = () => {
  const isMobile = useIsMobile();

  return !isMobile ? (
    <>
      <Outlet />
      <BottomNavbar />
    </>
  ) : (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <header className="flex h-16 items-center px-2">
          <SidebarTrigger />
        </header>
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

import { Outlet } from 'react-router-dom';
import { Topbar } from './Topbar';
import { Sidebar } from './Sidebar';
import { Breadcrumbs } from './Breadcrumbs';

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Topbar />
      <div className="flex flex-1 w-full">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <Breadcrumbs />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

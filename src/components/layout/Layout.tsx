import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

export const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    setSidebarOpen(false); // Close sidebar on mobile when navigating
  };

  return (
    <div className="flex h-screen bg-secondary-50 dark:bg-secondary-900">
      <Sidebar 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        onNavigate={handleNavigate}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        <Navbar 
          onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
          onNavigate={handleNavigate}
        />
        
        <main className="flex-1 overflow-auto">
          <div className="h-full">
            <Outlet context={{ onNavigate: handleNavigate }} />
          </div>
        </main>
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { 
  Menu, 
  Bell, 
  Search, 
  Sun, 
  Moon, 
  Monitor,
  User,
  Settings,
  LogOut
} from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Tooltip } from '../ui/Tooltip';

interface NavbarProps {
  onSidebarToggle: () => void;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSidebarToggle, onNavigate }) => {
  const { theme, setTheme } = useTheme();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const themeOptions = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock search functionality
    alert('This is a mock search feature. In a real application, this would search across users, reports, and other data.');
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <header className="h-16 bg-white dark:bg-secondary-900 border-b border-secondary-200 dark:border-secondary-700 sticky top-0 z-30">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onSidebarToggle}
            className="lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          <div className="hidden md:block w-96">
            <form onSubmit={handleSearch}>
              <Input
                placeholder="Search users, reports..."
                icon={<Search className="w-4 h-4" />}
                className="bg-secondary-50 dark:bg-secondary-800 border-transparent focus:bg-white dark:focus:bg-secondary-700"
              />
            </form>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-3">
          {/* Theme toggle */}
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              className="w-9 h-9 p-0"
            >
              {theme === 'light' && <Sun className="w-4 h-4" />}
              {theme === 'dark' && <Moon className="w-4 h-4" />}
              {theme === 'system' && <Monitor className="w-4 h-4" />}
            </Button>

            {showThemeMenu && (
              <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700 py-1 z-50">
                {themeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setTheme(option.value as any);
                      setShowThemeMenu(false);
                    }}
                    className={`
                      w-full flex items-center px-3 py-2 text-sm hover:bg-secondary-50 dark:hover:bg-secondary-700
                      ${theme === option.value ? 'text-primary-600 dark:text-primary-400' : 'text-secondary-700 dark:text-secondary-300'}
                    `}
                  >
                    <option.icon className="w-4 h-4 mr-2" />
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Notifications */}
          <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="w-9 h-9 p-0 relative"
                onClick={handleNotificationClick}
              >
                <Bell className="w-4 h-4" />
                {/* <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                </span> */}
              </Button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700 py-2 z-50">
                <div className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                  <h3 className="text-sm font-medium text-secondary-900 dark:text-white">Notifications</h3>
                </div>
                <div className="px-4 py-6 text-center">
                  <Bell className="w-8 h-8 mx-auto text-secondary-400 mb-2" />
                  <p className="text-sm text-secondary-600 dark:text-secondary-400 lg:whitespace-nowrap">No new notifications</p>
                </div>
              </div>
            )}
          </div>

          {/* Profile menu */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
            >
              <img
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="hidden md:block text-sm font-medium text-secondary-700 dark:text-secondary-300">
                John Smith
              </span>
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700 py-1 z-50">
                <div className="px-3 py-2 border-b border-secondary-200 dark:border-secondary-700">
                  <p className="text-sm font-medium text-secondary-900 dark:text-white">John Smith</p>
                  <p className="text-xs text-secondary-500 dark:text-secondary-400">john@example.com</p>
                </div>
                
                <Tooltip content="Mock profile page">
                  <button className="w-full flex items-center px-3 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-700">
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </button>
                </Tooltip>
                
                <button 
                  className="w-full flex items-center px-3 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-700"
                  onClick={() => {
                    onNavigate('/settings');
                    setShowProfileMenu(false);
                  }}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </button>
                
                <hr className="my-1 border-secondary-200 dark:border-secondary-700" />
                
                <Tooltip content="Mock sign out functionality">
                  <button className="w-full flex items-center px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign out
                  </button>
                </Tooltip>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Close dropdowns when clicking outside */}
      {(showProfileMenu || showThemeMenu || showNotifications) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setShowProfileMenu(false);
            setShowThemeMenu(false);
            setShowNotifications(false);
          }}
        />
      )}
    </header>
  );
};
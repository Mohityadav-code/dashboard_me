import React from 'react';
import { Settings as SettingsIcon, Shield, Bell, Palette, Database } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useTheme } from '../hooks/useTheme';

export const Settings: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-secondary-900 dark:text-white mb-2">
          Settings
        </h1>
        <p className="text-secondary-600 dark:text-secondary-400">
          Manage your application preferences and configuration.
        </p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* General Settings */}
        <Card>
          <div className="p-6 border-b border-secondary-200 dark:border-secondary-700">
            <div className="flex items-center space-x-3">
              <SettingsIcon className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
              <h2 className="text-lg font-semibold text-secondary-900 dark:text-white">
                General Settings
              </h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <Input
              label="Application Name"
              defaultValue="AdminPro Dashboard"
              placeholder="Enter application name"
            />
            <Input
              label="Support Email"
              type="email"
              defaultValue="support@adminpro.com"
              placeholder="Enter support email"
            />
            <div className="flex justify-end">
              <Button variant="primary">Save Changes</Button>
            </div>
          </div>
        </Card>

        {/* Security Settings */}
        <Card>
          <div className="p-6 border-b border-secondary-200 dark:border-secondary-700">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
              <h2 className="text-lg font-semibold text-secondary-900 dark:text-white">
                Security
              </h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-secondary-900 dark:text-white">
                  Two-Factor Authentication
                </h3>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">
                  Add an extra layer of security to your account
                </p>
              </div>
              <Button variant="outline" size="sm">
                Enable
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-secondary-900 dark:text-white">
                  Session Timeout
                </h3>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">
                  Automatically log out inactive users
                </p>
              </div>
              <select className="px-3 py-1 border border-secondary-300 dark:border-secondary-600 rounded-lg text-sm bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white">
                <option>30 minutes</option>
                <option>1 hour</option>
                <option>4 hours</option>
                <option>Never</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Notifications */}
        <Card>
          <div className="p-6 border-b border-secondary-200 dark:border-secondary-700">
            <div className="flex items-center space-x-3">
              <Bell className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
              <h2 className="text-lg font-semibold text-secondary-900 dark:text-white">
                Notifications
              </h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-secondary-900 dark:text-white">
                  Email Notifications
                </h3>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">
                  Receive email updates about important events
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-secondary-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-secondary-600 peer-checked:bg-primary-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-secondary-900 dark:text-white">
                  Push Notifications
                </h3>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">
                  Get notified about real-time activities
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-secondary-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-secondary-600 peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </Card>

        {/* Appearance */}
        <Card>
          <div className="p-6 border-b border-secondary-200 dark:border-secondary-700">
            <div className="flex items-center space-x-3">
              <Palette className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
              <h2 className="text-lg font-semibold text-secondary-900 dark:text-white">
                Appearance
              </h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <h3 className="font-medium text-secondary-900 dark:text-white mb-3">
                Theme Preference
              </h3>
              <div className="space-y-2">
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="radio" 
                    name="theme" 
                    value="light" 
                    checked={theme === 'light'}
                    onChange={(e) => setTheme(e.target.value as any)}
                    className="mr-3 text-primary-600 focus:ring-primary-500" 
                  />
                  <span className="text-sm text-secondary-700 dark:text-secondary-300">Light</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="radio" 
                    name="theme" 
                    value="dark" 
                    checked={theme === 'dark'}
                    onChange={(e) => setTheme(e.target.value as any)}
                    className="mr-3 text-primary-600 focus:ring-primary-500" 
                  />
                  <span className="text-sm text-secondary-700 dark:text-secondary-300">Dark</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="radio" 
                    name="theme" 
                    value="system" 
                    checked={theme === 'system'}
                    onChange={(e) => setTheme(e.target.value as any)}
                    className="mr-3 text-primary-600 focus:ring-primary-500" 
                  />
                  <span className="text-sm text-secondary-700 dark:text-secondary-300">System</span>
                </label>
              </div>
            </div>
            <div className="pt-4 border-t border-secondary-200 dark:border-secondary-700">
              <Button variant="primary" size="sm">
                Save Preferences
              </Button>
            </div>
          </div>
        </Card>

        {/* Data Management */}
        <Card>
          <div className="p-6 border-b border-secondary-200 dark:border-secondary-700">
            <div className="flex items-center space-x-3">
              <Database className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
              <h2 className="text-lg font-semibold text-secondary-900 dark:text-white">
                Data Management
              </h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-secondary-900 dark:text-white">
                  Export Data
                </h3>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">
                  Download all your application data
                </p>
              </div>
              <Button variant="outline" size="sm">
                Export
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-secondary-900 dark:text-white">
                  Clear Cache
                </h3>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">
                  Clear application cache and temporary data
                </p>
              </div>
              <Button variant="outline" size="sm">
                Clear
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { Settings as SettingsIcon, User, Shield, Bell, Palette, Database, Globe } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Tooltip } from '../components/ui/Tooltip';

export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'appearance', name: 'Appearance', icon: Palette },
    { id: 'data', name: 'Data & Privacy', icon: Database },
    { id: 'regional', name: 'Regional', icon: Globe },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-secondary-900 dark:text-white mb-4">Profile Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="First Name" placeholder="John" />
                <Input label="Last Name" placeholder="Smith" />
                <Input label="Email" placeholder="john@example.com" type="email" />
                <Input label="Phone" placeholder="+1 (555) 123-4567" />
              </div>
            </div>
            <Tooltip content="Mock feature - Save profile changes">
              <Button>Save Changes</Button>
            </Tooltip>
          </div>
        );
      
      case 'security':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-secondary-900 dark:text-white mb-4">Security Settings</h3>
              <div className="space-y-4">
                <Tooltip content="Mock feature - Change password">
                  <Button variant="outline">Change Password</Button>
                </Tooltip>
                <Tooltip content="Mock feature - Enable 2FA">
                  <Button variant="outline">Enable Two-Factor Authentication</Button>
                </Tooltip>
                <Tooltip content="Mock feature - View login history">
                  <Button variant="outline">View Login History</Button>
                </Tooltip>
              </div>
            </div>
          </div>
        );
      
      case 'notifications':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-secondary-900 dark:text-white mb-4">Notification Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-secondary-200 dark:border-secondary-700 rounded-lg">
                  <div>
                    <h4 className="font-medium text-secondary-900 dark:text-white">Email Notifications</h4>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">Receive notifications via email</p>
                  </div>
                  <Tooltip content="Mock feature - Toggle email notifications">
                    <Button variant="outline" size="sm">Enable</Button>
                  </Tooltip>
                </div>
                <div className="flex items-center justify-between p-4 border border-secondary-200 dark:border-secondary-700 rounded-lg">
                  <div>
                    <h4 className="font-medium text-secondary-900 dark:text-white">Push Notifications</h4>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">Receive push notifications</p>
                  </div>
                  <Tooltip content="Mock feature - Toggle push notifications">
                    <Button variant="outline" size="sm">Disable</Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'appearance':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-secondary-900 dark:text-white mb-4">Appearance Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    Theme
                  </label>
                  <Tooltip content="Mock feature - Theme selection">
                    <select className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-800">
                      <option>Light</option>
                      <option>Dark</option>
                      <option>System</option>
                    </select>
                  </Tooltip>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    Language
                  </label>
                  <Tooltip content="Mock feature - Language selection">
                    <select className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-800">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-secondary-900 dark:text-white mb-4">Settings</h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                This is a mock settings page. In a real application, you would be able to configure various settings here.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-secondary-900 dark:text-white mb-2">
          Settings
        </h1>
        <p className="text-secondary-600 dark:text-secondary-400">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-700">
        {/* Tabs */}
        <div className="border-b border-secondary-200 dark:border-secondary-700">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors
                  ${activeTab === tab.id
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-secondary-500 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300'
                  }
                `}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};
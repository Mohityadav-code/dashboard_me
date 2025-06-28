import React, { useState } from 'react';
import { User, Shield, Bell, Palette, Database, Globe } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Tooltip } from '../components/ui/Tooltip';
import { SettingsSection, SettingsCard, SettingsTab } from '../components/settings';
import { useTheme } from '../hooks/useTheme';

export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const { theme, setTheme } = useTheme();

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'appearance', name: 'Appearance', icon: Palette },
    { id: 'data', name: 'Data & Privacy', icon: Database },
    { id: 'regional', name: 'Regional', icon: Globe },
  ];

  const themeOptions = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' },
  ];

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
  ];

  const renderProfileTab = () => (
    <SettingsSection title="Profile Information">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="First Name" placeholder="John" />
        <Input label="Last Name" placeholder="Smith" />
        <Input label="Email" placeholder="john@example.com" type="email" />
        <Input label="Phone" placeholder="+1 (555) 123-4567" />
      </div>
      <Tooltip content="Mock feature - Save profile changes">
        <Button>Save Changes</Button>
      </Tooltip>
    </SettingsSection>
  );

  const renderSecurityTab = () => (
    <SettingsSection title="Security Settings">
      <div className="flex gap-4">
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
    </SettingsSection>
  );

  const renderNotificationsTab = () => (
    <SettingsSection title="Notification Preferences">
      <div className="space-y-4">
        <SettingsCard
          title="Email Notifications"
          description="Receive notifications via email"
          action={
            <Tooltip content="Mock feature - Toggle email notifications">
              <Button variant="outline" size="sm">Enable</Button>
            </Tooltip>
          }
        />
        <SettingsCard
          title="Push Notifications"
          description="Receive push notifications"
          action={
            <Tooltip content="Mock feature - Toggle push notifications">
              <Button variant="outline" size="sm">Disable</Button>
            </Tooltip>
          }
        />
      </div>
    </SettingsSection>
  );

  const renderAppearanceTab = () => (
    <SettingsSection title="Appearance Settings">
      <div className="space-y-4">
        <Select
          label="Theme"
          options={themeOptions}
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
          className="w-64"
        />
        <Tooltip content="Mock feature - Language selection">
          <Select
            label="Language"
            options={languageOptions}
            className="w-64"
          />
        </Tooltip>
      </div>
    </SettingsSection>
  );

  const renderDataTab = () => (
    <SettingsSection title="Data & Privacy">
      <div className="flex gap-4">
        <Tooltip content="Mock feature - Export data">
          <Button variant="outline">Export My Data</Button>
        </Tooltip>
        <Tooltip content="Mock feature - Delete account">
          <Button variant="outline">Delete Account</Button>
        </Tooltip>
      </div>
    </SettingsSection>
  );

  const renderRegionalTab = () => (
    <SettingsSection title="Regional Settings">
      <div className="flex gap-4">
        <Tooltip content="Mock feature - Timezone selection">
          <Button variant="outline">Change Timezone</Button>
        </Tooltip>
        <Tooltip content="Mock feature - Currency selection">
          <Button variant="outline">Change Currency</Button>
        </Tooltip>
      </div>
    </SettingsSection>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return renderProfileTab();
      case 'security':
        return renderSecurityTab();
      case 'notifications':
        return renderNotificationsTab();
      case 'appearance':
        return renderAppearanceTab();
      case 'data':
        return renderDataTab();
      case 'regional':
        return renderRegionalTab();
      default:
        return (
          <SettingsSection title="Settings">
            <p className="text-secondary-600 dark:text-secondary-400">
              This is a mock settings page. In a real application, you would be able to configure various settings here.
            </p>
          </SettingsSection>
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
          <nav className="flex flex-wrap gap-1 px-6">
            {tabs.map((tab) => (
              <SettingsTab
                key={tab.id}
                id={tab.id}
                name={tab.name}
                icon={tab.icon}
                isActive={activeTab === tab.id}
                onClick={setActiveTab}
              />
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
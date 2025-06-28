import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Array<{ value: string; label: string }>;
  error?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className={className || "w-full"}>
      {label && (
        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
          {label}
        </label>
      )}
      <select
        className={`
          w-full px-3 py-2 border rounded-lg bg-white dark:bg-secondary-800 
          text-secondary-900 dark:text-white focus:outline-none focus:ring-2 
          focus:ring-primary-500 focus:border-primary-500 transition-colors
          ${error 
            ? 'border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500' 
            : 'border-secondary-300 dark:border-secondary-600'
          }
        `}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}; 
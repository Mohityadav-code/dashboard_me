import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  icon,
  className = '',
  ...props
}, ref) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div className="text-secondary-400">
              {icon}
            </div>
          </div>
        )}
        <input
          ref={ref}
          className={`
            block w-full rounded-lg border border-secondary-300 dark:border-secondary-600
            bg-white dark:bg-secondary-800 
            text-secondary-900 dark:text-secondary-100
            placeholder-secondary-400 dark:placeholder-secondary-500
            px-3 py-2 text-sm
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500
            disabled:bg-secondary-50 dark:disabled:bg-secondary-700 disabled:text-secondary-500
            ${icon ? 'pl-10' : ''}
            ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';
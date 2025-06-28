import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false 
}) => {
  return (
    <div className={`
      bg-white dark:bg-secondary-800 
      rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-700
      ${hover ? 'hover:shadow-md transition-shadow duration-200' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};
import React, { forwardRef } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ 
  children, 
  className = '', 
  hover = false 
}, ref) => {
  return (
    <div 
      ref={ref}
      data-testid="card"
      className={`
        bg-white dark:bg-secondary-800 
        rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-700
        ${hover ? 'hover:shadow-md transition-shadow duration-200' : ''}
        ${className}
      `}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';
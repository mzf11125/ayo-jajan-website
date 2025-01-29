import React from 'react';

export const HeaderSection = ({ 
  title,
  description,
  className = ''
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
        {title}
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

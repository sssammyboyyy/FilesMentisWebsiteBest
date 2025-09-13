import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'full', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24'
  };

  const logoElement = (
    <img
      src="/mentis-liberum-logo.png"
      alt="Mentis Liberum - AI Business Automation"
      className={`${sizeClasses[size]} w-auto object-contain ${className}`}
    />
  );

  if (variant === 'icon') {
    return logoElement;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {logoElement}
      <div className="flex flex-col">
        <span className="font-bold text-white text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Mentis Liberum
        </span>
        <span className="text-xs text-gray-400 font-medium">
          AI Business Automation
        </span>
      </div>
    </div>
  );
};

export default Logo;
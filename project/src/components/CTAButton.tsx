import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  onClick, 
  children, 
  variant = 'primary',
  size = 'md',
  className = '' 
}) => {
  const baseClasses = "group relative font-semibold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:shadow-2xl hover:shadow-blue-500/25",
    secondary: "bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400",
    accent: "bg-gradient-to-r from-orange-500 to-green-500 text-white hover:shadow-2xl hover:shadow-orange-500/25"
  };

  const sizeClasses = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </span>
      {(variant === 'primary' || variant === 'accent') && (
        <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm ${
          variant === 'primary' 
            ? 'bg-gradient-to-r from-blue-500 to-violet-500' 
            : 'bg-gradient-to-r from-orange-400 to-green-400'
        }`}></div>
      )}
    </button>
  );
};

export default CTAButton;
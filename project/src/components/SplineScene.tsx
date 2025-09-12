import React, { useState, Suspense, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  sceneUrl: string;
  className?: string;
  fallbackContent?: React.ReactNode;
}

const SplineScene: React.FC<SplineSceneProps> = ({ 
  sceneUrl, 
  className = "", 
  fallbackContent 
}) => {
  console.log('SplineScene rendered with URL:', sceneUrl);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices for performance optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLoad = () => {
    console.log('Spline scene loaded successfully!');
    setIsLoading(false);
  };

  const handleError = (error: any) => {
    console.error('Spline scene failed to load:', error);
    setIsLoading(false);
    setHasError(true);
  };

  const LoadingSpinner = () => (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-500/20 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
      </div>
      <span className="ml-4 text-gray-400">Loading interactive experience...</span>
    </div>
  );

  const ErrorFallback = () => (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
      <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <p className="text-gray-400 mb-2">Unable to load interactive content</p>
      <p className="text-gray-500 text-sm">Please check your connection and try again</p>
      {fallbackContent && (
        <div className="mt-6">
          {fallbackContent}
        </div>
      )}
    </div>
  );

  if (hasError) {
    return <div className={className}><ErrorFallback /></div>;
  }

  // Show fallback content on mobile for better performance - TEMPORARILY DISABLED
  // if (isMobile && fallbackContent) {
  //   return (
  //     <div className={`relative ${className} flex items-center justify-center`}>
  //       {fallbackContent}
  //       <div className="absolute bottom-2 right-2 text-xs text-gray-500 bg-black/20 px-2 py-1 rounded">
  //         Interactive on desktop
  //       </div>
  //     </div>
  //   );
  // }

  // TEMPORARY TEST - bypassing Spline for debugging
  return (
    <div className={`relative ${className}`}>
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl border-2 border-blue-500/30">
        <div className="text-2xl font-bold text-blue-400 mb-2">🤖 NEXBOT</div>
        <div className="text-sm text-gray-400 mb-2">3D Scene URL: {sceneUrl}</div>
        <div className="text-xs text-gray-500 text-center px-4">
          CSP blocking Spline - Working on fix...
        </div>
      </div>
    </div>
  );
};

export default SplineScene;

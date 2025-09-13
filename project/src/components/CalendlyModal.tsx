import React, { useEffect } from 'react';
import { X, CheckCircle, Calendar, Clock } from 'lucide-react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Load Calendly script dynamically when modal opens
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      // Cleanup script when modal closes
      return () => {
        const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-gradient-to-br from-gray-800/95 to-gray-900/95 rounded-3xl border border-gray-700/50 shadow-2xl animate-slideUp overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-full transition-all duration-300"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Success Header */}
        <div className="p-6 md:p-8 border-b border-gray-700/50">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Request Received!
              </span>
            </h2>
            <p className="text-gray-300 mb-4">
              Thank you for your interest. Now let's schedule your consultation.
            </p>
            
            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>30-minute consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-violet-400" />
                <span>Available 7 days a week</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>$5,000 AI Assessment included</span>
              </div>
            </div>
          </div>
        </div>

        {/* Calendly Widget Container */}
        <div className="h-[600px] md:h-[700px] overflow-hidden">
          <div 
            className="calendly-inline-widget h-full" 
            data-url="https://calendly.com/samuelj121314/30min?text_color=ffffff&primary_color=5539e1"
            style={{ minWidth: '320px', width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendlyModal;
import React from 'react';
import { X, ArrowRight, CheckCircle } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    name: string;
    email: string;
    website: string;
    services: string;
    timeline: string;
    budget: string;
    systemDescription: string;
  };
  onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onFormSubmit: (e: React.FormEvent) => void;
}

const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  formData, 
  onFormChange, 
  onFormSubmit 
}) => {
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
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-800/95 to-gray-900/95 rounded-3xl border border-gray-700/50 shadow-2xl animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-full transition-all duration-300"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12">
          {/* Modal Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              <span className="text-white">Your Business?</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Book your consultation today and discover how AI automation can unlock 
              your freedom of mind and accelerate your growth.
            </p>
            
            {/* Limited Time Offer Banner */}
            <div className="mt-6 inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/40 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
              <span className="text-orange-200 font-medium text-sm">
                🔥 FREE $5,000 AI Readiness Assessment (Limited Time)
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onFormSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={onFormChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={onFormChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="your@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="modal-website" className="block text-sm font-medium text-gray-300 mb-2">
                Company Website
              </label>
              <input
                type="url"
                id="modal-website"
                name="website"
                value={formData.website}
                onChange={onFormChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                placeholder="https://yourcompany.com"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="modal-services" className="block text-sm font-medium text-gray-300 mb-2">
                  Services of Interest *
                </label>
                <select
                  id="modal-services"
                  name="services"
                  required
                  value={formData.services}
                  onChange={onFormChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="automation">Process Automation</option>
                  <option value="personal-brand">Personal Brand Growth</option>
                  <option value="custom-apps">Custom AI Applications</option>
                  <option value="consulting">Strategic AI Consulting</option>
                  <option value="growth-strategy">Growth Strategy</option>
                  <option value="mentorship">Executive Mentorship</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </div>

              <div>
                <label htmlFor="modal-timeline" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Timeline
                </label>
                <select
                  id="modal-timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={onFormChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Start immediately</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="3-months">Within 3 months</option>
                  <option value="6-months">Within 6 months</option>
                  <option value="exploring">Just exploring</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="modal-budget" className="block text-sm font-medium text-gray-300 mb-2">
                Investment Budget
              </label>
              <select
                id="modal-budget"
                name="budget"
                value={formData.budget}
                onChange={onFormChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              >
                <option value="">Select budget range</option>
                <option value="under-15k">Under $15,000</option>
                <option value="15k-40k">$15,000 - $40,000</option>
                <option value="40k-90k">$40,000 - $90,000</option>
                <option value="90k-240k">$90,000 - $240,000</option>
                <option value="over-240k">Over $240,000</option>
              </select>
            </div>

            <div>
              <label htmlFor="modal-systemDescription" className="block text-sm font-medium text-gray-300 mb-2">
                Current System & Challenges
              </label>
              <textarea
                id="modal-systemDescription"
                name="systemDescription"
                rows={4}
                value={formData.systemDescription}
                onChange={onFormChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                placeholder="Tell us about your current operations, biggest challenges, and what you'd like to achieve..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg text-lg font-semibold text-white hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02] group"
            >
              <span className="flex items-center justify-center gap-2">
                Book Your Transformation Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>

            <p className="text-center text-sm text-gray-400">
              We'll respond within 24 hours with next steps. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
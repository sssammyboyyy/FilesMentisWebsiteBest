import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Brain, Zap, Shield, Clock, ChevronRight } from 'lucide-react';
import CTAButton from './CTAButton';
import Logo from './Logo';

interface PremiumFooterProps {
  onOpenModal: () => void;
  onOpenCalculator: () => void;
}

const PremiumFooter: React.FC<PremiumFooterProps> = ({ onOpenModal, onOpenCalculator }) => {
  const currentYear = new Date().getFullYear();

  // Function to smoothly scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { name: 'Process Automation', action: () => scrollToSection('#services') },
    { name: 'AI Strategy Consulting', action: () => scrollToSection('#services') },
    { name: 'Custom AI Applications', action: () => scrollToSection('#services') },
    { name: 'Executive Mentorship', action: () => scrollToSection('#services') },
    { name: 'Growth Implementation', action: () => scrollToSection('#services') }
  ];

  const resources = [
    { name: 'ROI Calculator', action: onOpenCalculator },
    { name: 'Our Process', action: () => scrollToSection('#workflow') },
    { name: 'Success Stories', action: () => scrollToSection('#testimonials') },
    { name: 'Free Assessment', action: onOpenModal }
  ];

  const company = [
    { name: 'Why Choose Us', action: () => scrollToSection('#value') },
    { name: 'Our Methodology', action: () => scrollToSection('#workflow') },
    { name: 'Client Results', action: () => scrollToSection('#testimonials') }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-gray-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          {/* Top Section - CTA */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    <span className="text-white">Ready to Experience</span>{' '}
                    <span className="gradient-text-accent">Freedom of Mind?</span>
                  </h3>
                  <p className="text-gray-300 text-enhanced mb-6">
                    Join hundreds of business leaders who've already transformed their operations 
                    with AI automation. Your journey to freedom starts with a single click.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span>Free 30-min consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-400" />
                      <span>No obligations</span>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <div className="space-y-4">
                    <CTAButton onClick={onOpenModal} variant="accent" size="lg">
                      Start Your Transformation
                    </CTAButton>
                    <div className="text-sm text-gray-400">
                      <span>Or</span>{' '}
                      <button
                        onClick={onOpenCalculator}
                        className="text-blue-400 hover:text-blue-300 underline transition-colors"
                      >
                        calculate your ROI first
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Logo size="md" className="mb-4" />
                <p className="text-gray-400 mb-4">
                  Freedom of Mind, Powered by AI
                </p>
                <p className="text-gray-400 text-sm text-enhanced">
                  Transforming businesses through intelligent automation, 
                  delivering unprecedented growth and operational excellence.
                </p>
              </div>
              
              {/* Key Benefits */}
              <div className="space-y-3">
                {[
                  { icon: <Brain className="w-4 h-4" />, text: "AI-Powered Solutions" },
                  { icon: <Zap className="w-4 h-4" />, text: "Rapid Implementation" },
                  { icon: <Shield className="w-4 h-4" />, text: "Guaranteed Results" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="text-blue-400">{benefit.icon}</div>
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={service.action}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{service.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <button
                      onClick={resource.action}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{resource.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3 mb-6">
                {company.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={item.action}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="space-y-3 pt-4 border-t border-gray-800">
                <h5 className="text-sm font-semibold text-white">Get In Touch</h5>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Mail className="w-3 h-3" />
                    <span>hello@mentisliberum.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Phone className="w-3 h-3" />
                    <span>Available via consultation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <MapPin className="w-3 h-3" />
                    <span>Serving businesses worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-gray-800">
              {[
                { number: "500+", label: "Processes Automated" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "$50M+", label: "Revenue Generated" },
                { number: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text-accent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © {currentYear} Mentis Liberum. All rights reserved. Transforming businesses through AI automation.
            </div>
            
            <div className="flex items-center gap-2 text-gray-500">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              <span className="text-xs">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
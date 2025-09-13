import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import CTAButton from './CTAButton';

interface UrgencyElementsProps {
  onOpenModal: () => void;
  onOpenCalculator: () => void;
}

const UrgencyElements: React.FC<UrgencyElementsProps> = ({ onOpenModal, onOpenCalculator }) => {
  // Component state removed - focusing on authentic content

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Growth Assessment Offer */}
        <div className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/30 rounded-2xl p-8 mb-12">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <CheckCircle className="w-4 h-4" />
              COMPLIMENTARY CONSULTATION
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-white">Free Revenue Growth</span>{' '}
              <span className="gradient-text-accent">Assessment</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto text-enhanced">
              Get a comprehensive evaluation of your sales and marketing automation potential, 
              including custom ROI projections and implementation roadmap.
            </p>
          </div>

          {/* Assessment Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: 'Revenue Analysis', description: 'Identify opportunities to increase sales velocity by 200-400%' },
              { title: 'Custom ROI Projections', description: 'Detailed financial impact analysis specific to your business model' },
              { title: 'Implementation Strategy', description: '90-day roadmap prioritized by revenue impact and ease of implementation' }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                  <p className="text-sm text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block">
              <CTAButton onClick={onOpenModal} variant="accent" size="lg">
                Schedule Your Growth Assessment
              </CTAButton>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-4 py-2 mt-3">
                <p className="text-sm text-blue-200 font-medium">
                  ✓ No obligation • 60-minute consultation • Delivered within 48 hours
                </p>
                <p className="text-xs text-blue-300 mt-1">
                  Typically reserved for enterprise clients • Completely complimentary
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Consultation Availability */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Next Available Consultations</h3>
            </div>
            
            <div className="space-y-3 mb-6">
              {[
                { date: 'This Week', time: 'Multiple slots available' },
                { date: 'Next Week', time: 'Morning and afternoon options' },
                { date: 'Flexible', time: 'We accommodate your schedule' }
              ].map((slot, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-white font-medium">{slot.date}</span>
                    <span className="text-gray-300">{slot.time}</span>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-300">
                    Available
                  </span>
                </div>
              ))
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-blue-300">Flexible Scheduling</span>
              </div>
              <p className="text-sm text-gray-300">
                All consultations include a comprehensive automation assessment and custom strategy recommendations.
              </p>
            </div>

            <CTAButton onClick={onOpenModal} variant="primary" size="md" className="w-full">
              Schedule Consultation
            </CTAButton>
          </div>

          {/* ROI Calculator */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">ROI Calculator</h3>
            </div>

            <div className="space-y-4 mb-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">Calculate Your Potential Savings</h4>
                <p className="text-sm text-gray-300 mb-4">
                  Get instant projections on how much time and money you could save with automation.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-400">200-400%</div>
                    <div className="text-xs text-gray-400">Sales Velocity Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-violet-400">40-70%</div>
                    <div className="text-xs text-gray-400">Time Savings</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-500/20 rounded-lg p-4 mb-4">
              <div className="text-center">
                <p className="text-sm text-blue-300 font-semibold mb-1">
                  Interactive ROI Assessment
                </p>
                <p className="text-xs text-gray-400">Personalized projections based on your business model</p>
              </div>
            </div>

            <CTAButton onClick={onOpenCalculator} variant="secondary" size="md" className="w-full">
              Calculate Your ROI
            </CTAButton>
          </div>
        </div>

        {/* Final CTA with Guarantee */}
        <div className="text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-white">Still Deciding? Here's Our</span>{' '}
            <span className="gradient-text-accent">No-Risk Guarantee</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: '100% Money-Back Guarantee', description: 'Not satisfied after 30 days? Full refund, no questions asked.' },
              { title: 'Free Implementation Support', description: '90 days of unlimited support to ensure successful deployment.' },
              { title: 'Results or We Work for Free', description: 'No measurable improvement in 6 months? We continue at no cost.' }
            ].map((guarantee, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500/20 to-green-400/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">{guarantee.title}</h4>
                <p className="text-sm text-gray-300 text-enhanced">{guarantee.description}</p>
              </div>
            ))}
          </div>

          <CTAButton onClick={onOpenModal} variant="accent" size="lg">
            Start Risk-Free Today
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default UrgencyElements;
import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import CTAButton from './CTAButton';

interface UrgencyElementsProps {
  onOpenModal: () => void;
  onOpenCalculator: () => void;
}

const UrgencyElements: React.FC<UrgencyElementsProps> = ({ onOpenModal, onOpenCalculator }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 23,
    seconds: 45
  });
  
  const [availableSlots, setAvailableSlots] = useState(7);
  const [recentActions, setRecentActions] = useState(0);

  // Simulate countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Simulate availability decreasing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (availableSlots > 3) {
        setAvailableSlots(prev => Math.max(3, prev - 1));
      }
    }, Math.random() * 30000 + 10000); // Random between 10-40 seconds

    return () => clearTimeout(timer);
  }, [availableSlots]);

  // Simulate recent activity
  useEffect(() => {
    const timer = setInterval(() => {
      setRecentActions(prev => prev + 1);
    }, Math.random() * 15000 + 5000); // Random between 5-20 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Limited Time Offer */}
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-8 mb-12">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Zap className="w-4 h-4" />
              LIMITED TIME OFFER
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-white">Free AI Readiness</span>{' '}
              <span className="gradient-text-accent">Assessment</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto text-enhanced">
              Get a comprehensive evaluation of your automation potential, including a custom roadmap 
              and ROI projections — completely free for the next 3 days.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-4 gap-4 text-center">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg p-4 border border-orange-500/20">
                  <div className="text-2xl font-bold text-white">{String(item.value).padStart(2, '0')}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Offer Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: 'Process Analysis', description: 'Identify 10+ automation opportunities in your workflow' },
              { title: 'ROI Projections', description: 'Detailed financial impact analysis with timeframes' },
              { title: 'Implementation Roadmap', description: 'Step-by-step plan prioritized by business impact' }
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
                Claim Your Free Assessment
              </CTAButton>
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/40 rounded-lg px-4 py-2 mt-3">
                <p className="text-sm text-orange-200 font-medium">
                  🔥 Limited Time: Free $5,000 AI Readiness Assessment
                </p>
                <p className="text-xs text-orange-300 mt-1">
                  Normally $5,000 • Only 3 days remaining • Results in 48 hours
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
                { date: 'Today', time: '3:30 PM EST', status: 'available' },
                { date: 'Tomorrow', time: '10:00 AM EST', status: 'available' },
                { date: 'Tomorrow', time: '2:15 PM EST', status: 'limited' },
                { date: 'Friday', time: '11:30 AM EST', status: 'limited' }
              ].map((slot, index) => (
                <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${
                  slot.status === 'available' 
                    ? 'bg-green-500/10 border border-green-500/20' 
                    : 'bg-yellow-500/10 border border-yellow-500/20'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      slot.status === 'available' ? 'bg-green-400' : 'bg-yellow-400'
                    }`}></div>
                    <span className="text-white font-medium">{slot.date}</span>
                    <span className="text-gray-300">{slot.time}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    slot.status === 'available' 
                      ? 'bg-green-500/20 text-green-300' 
                      : 'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {slot.status === 'available' ? 'Available' : `Only ${availableSlots} left`}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-semibold text-orange-300">Booking Fast</span>
              </div>
              <p className="text-sm text-gray-300">
                {availableSlots} consultation slots remaining this week. 
                Book now to secure your preferred time.
              </p>
            </div>

            <CTAButton onClick={onOpenModal} variant="primary" size="md" className="w-full">
              Reserve My Consultation
            </CTAButton>
          </div>

          {/* Social Proof with Activity */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-bold text-white">Recent Activity</h3>
            </div>

            <div className="space-y-4 mb-6">
              {[
                { action: 'Completed ROI calculation', location: 'San Francisco, CA', time: '2 minutes ago' },
                { action: 'Booked consultation', location: 'Austin, TX', time: '7 minutes ago' },
                { action: 'Downloaded case study', location: 'New York, NY', time: '12 minutes ago' },
                { action: 'Completed ROI calculation', location: 'Seattle, WA', time: '18 minutes ago' }
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-700/30 rounded-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white font-medium">{activity.action}</p>
                    <p className="text-xs text-gray-400">{activity.location} • {activity.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-300 font-semibold">
                    {47 + recentActions} people used our calculator today
                  </p>
                  <p className="text-xs text-gray-400">Average savings discovered: $127,000</p>
                </div>
                <ArrowRight className="w-4 h-4 text-green-400" />
              </div>
            </div>

            <CTAButton onClick={onOpenCalculator} variant="secondary" size="md" className="w-full">
              Try ROI Calculator
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
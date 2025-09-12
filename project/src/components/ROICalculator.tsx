import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Clock, DollarSign, Users, Zap, ArrowRight, X } from 'lucide-react';

interface CalculatorState {
  employees: number;
  avgHourlyRate: number;
  hoursPerWeek: number;
  automationPercentage: number;
  currentMonthlyRevenue: number;
}

interface Results {
  monthlySavings: number;
  annualSavings: number;
  hoursFreedWeekly: number;
  hoursFreedMonthly: number;
  roi: number;
  paybackMonths: number;
  projectedGrowth: number;
}

const ROICalculator: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [calculatorData, setCalculatorData] = useState<CalculatorState>({
    employees: 5,
    avgHourlyRate: 50,
    hoursPerWeek: 20,
    automationPercentage: 70,
    currentMonthlyRevenue: 50000
  });

  const [results, setResults] = useState<Results | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  
  // Form data for the custom strategy form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    services: '',
    timeline: '',
    budget: '',
    currentChallenges: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof CalculatorState, value: number) => {
    setCalculatorData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare data for n8n webhook
    const submissionData = {
      ...formData,
      roiResults: results,
      calculatorInputs: calculatorData,
      source: 'ROI Calculator',
      timestamp: new Date().toISOString()
    };
    
    try {
      // Send to n8n webhook (same as existing modal)
      const response = await fetch('YOUR_N8N_WEBHOOK_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });
      
      if (response.ok) {
        // Success - show thank you message or close
        setStep(6); // Thank you step
      } else {
        console.error('Form submission failed');
        // Handle error
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateROI = async () => {
    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1500));

    const { employees, avgHourlyRate, hoursPerWeek, automationPercentage, currentMonthlyRevenue } = calculatorData;
    
    // Calculate time savings
    const totalHoursWeekly = employees * hoursPerWeek;
    const hoursFreedWeekly = totalHoursWeekly * (automationPercentage / 100);
    const hoursFreedMonthly = hoursFreedWeekly * 4.33;

    // Calculate cost savings
    const monthlySavings = hoursFreedMonthly * avgHourlyRate;
    const annualSavings = monthlySavings * 12;

    // Assume implementation cost based on complexity
    const implementationCost = Math.min(annualSavings * 0.3, 100000);
    const paybackMonths = implementationCost / monthlySavings;

    // Calculate ROI (return on investment percentage)
    const roi = ((annualSavings - implementationCost) / implementationCost) * 100;

    // Projected growth from freed capacity
    const capacityIncrease = (hoursFreedWeekly / totalHoursWeekly) * 100;
    const projectedGrowth = Math.min(capacityIncrease * 0.8, 50); // Cap at 50% growth

    setResults({
      monthlySavings,
      annualSavings,
      hoursFreedWeekly,
      hoursFreedMonthly,
      roi,
      paybackMonths,
      projectedGrowth
    });

    setIsCalculating(false);
    setStep(4);
  };

  if (!isOpen) return null;

  const steps = [
    { title: "Team Size", icon: <Users className="w-5 h-5" /> },
    { title: "Time Investment", icon: <Clock className="w-5 h-5" /> },
    { title: "Business Metrics", icon: <DollarSign className="w-5 h-5" /> },
    { title: "Your Results", icon: <TrendingUp className="w-5 h-5" /> }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-800/95 to-gray-900/95 rounded-3xl border border-gray-700/50 shadow-2xl animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-full transition-all duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-orange-500/20 to-green-500/20 rounded-full">
                <Calculator className="w-8 h-8 text-orange-400" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-white">AI Automation</span>{' '}
              <span className="gradient-text-accent">ROI Calculator</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover the potential return on investment for your business with AI automation
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              {steps.map((stepItem, index) => (
                <React.Fragment key={index}>
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    step > index + 1 ? 'bg-green-500/20 text-green-400' :
                    step === index + 1 ? 'gradient-accent text-white' :
                    'bg-gray-700 text-gray-400'
                  }`}>
                    {stepItem.icon}
                    <span className="text-sm font-medium hidden sm:inline">{stepItem.title}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className={`w-4 h-4 ${step > index + 1 ? 'text-green-400' : 'text-gray-600'}`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="max-w-3xl mx-auto">
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Tell us about your team</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Number of Employees
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="1"
                        max="100"
                        value={calculatorData.employees}
                        onChange={(e) => handleInputChange('employees', parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-gray-400 mt-1">
                        <span>1</span>
                        <span className="font-semibold text-white text-lg">{calculatorData.employees}</span>
                        <span>100+</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Average Hourly Rate ($)
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="20"
                        max="200"
                        step="5"
                        value={calculatorData.avgHourlyRate}
                        onChange={(e) => handleInputChange('avgHourlyRate', parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-gray-400 mt-1">
                        <span>$20</span>
                        <span className="font-semibold text-white text-lg">${calculatorData.avgHourlyRate}</span>
                        <span>$200+</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <button
                    onClick={() => setStep(2)}
                    className="gradient-accent px-8 py-3 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Continue to Time Investment
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Time spent on manual tasks</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Hours per week spent on repetitive tasks (per employee)
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="1"
                        max="40"
                        value={calculatorData.hoursPerWeek}
                        onChange={(e) => handleInputChange('hoursPerWeek', parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-gray-400 mt-1">
                        <span>1hr</span>
                        <span className="font-semibold text-white text-lg">{calculatorData.hoursPerWeek} hours</span>
                        <span>40hrs</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Percentage of tasks that can be automated
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="10"
                        max="90"
                        step="5"
                        value={calculatorData.automationPercentage}
                        onChange={(e) => handleInputChange('automationPercentage', parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-gray-400 mt-1">
                        <span>10%</span>
                        <span className="font-semibold text-white text-lg">{calculatorData.automationPercentage}%</span>
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 justify-center pt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-3 bg-gray-700 text-white rounded-full font-medium hover:bg-gray-600 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="gradient-accent px-8 py-3 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Continue to Business Metrics
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Business information</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Current Monthly Revenue ($)
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="5000"
                      max="1000000"
                      step="5000"
                      value={calculatorData.currentMonthlyRevenue}
                      onChange={(e) => handleInputChange('currentMonthlyRevenue', parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-1">
                      <span>$5K</span>
                      <span className="font-semibold text-white text-lg">
                        ${calculatorData.currentMonthlyRevenue.toLocaleString()}
                      </span>
                      <span>$1M+</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/30 rounded-lg p-6">
                  <h4 className="font-semibold text-white mb-3">Current Situation Summary</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Team Size:</span>
                      <span className="text-white ml-2">{calculatorData.employees} employees</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Manual Hours/Week:</span>
                      <span className="text-white ml-2">{calculatorData.employees * calculatorData.hoursPerWeek} hours</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Avg Hourly Rate:</span>
                      <span className="text-white ml-2">${calculatorData.avgHourlyRate}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Automation Potential:</span>
                      <span className="text-white ml-2">{calculatorData.automationPercentage}%</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 justify-center pt-4">
                  <button
                    onClick={() => setStep(2)}
                    className="px-6 py-3 bg-gray-700 text-white rounded-full font-medium hover:bg-gray-600 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={calculateROI}
                    disabled={isCalculating}
                    className="gradient-accent px-8 py-3 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isCalculating ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Calculating...
                      </span>
                    ) : (
                      'Calculate My ROI'
                    )}
                  </button>
                </div>
              </div>
            )}

            {step === 4 && results && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-4">
                    <span className="text-white">Your AI Automation</span>{' '}
                    <span className="gradient-text-accent">ROI Results</span>
                  </h3>
                  <p className="text-gray-300">Based on your inputs, here's what AI automation could do for your business:</p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-br from-green-500/20 to-green-400/20 border border-green-500/30 rounded-lg p-6 text-center">
                    <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">
                      ${results.annualSavings.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-300">Annual Savings</div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-500/20 to-blue-400/20 border border-blue-500/30 rounded-lg p-6 text-center">
                    <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">
                      {Math.round(results.hoursFreedWeekly)}
                    </div>
                    <div className="text-sm text-gray-300">Hours Freed Weekly</div>
                  </div>

                  <div className="bg-gradient-to-br from-violet-500/20 to-violet-400/20 border border-violet-500/30 rounded-lg p-6 text-center">
                    <TrendingUp className="w-8 h-8 text-violet-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">
                      {Math.round(results.roi)}%
                    </div>
                    <div className="text-sm text-gray-300">ROI</div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-500/20 to-orange-400/20 border border-orange-500/30 rounded-lg p-6 text-center">
                    <Zap className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">
                      {Math.round(results.paybackMonths)}
                    </div>
                    <div className="text-sm text-gray-300">Months to Payback</div>
                  </div>
                </div>

                {/* Detailed Breakdown */}
                <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg p-6">
                  <h4 className="font-semibold text-white mb-4">Detailed Impact Analysis</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-sm font-medium text-gray-300 mb-3">Time Savings</h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span className="text-gray-400">Weekly hours freed:</span>
                          <span className="text-white">{Math.round(results.hoursFreedWeekly)} hours</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-400">Monthly hours freed:</span>
                          <span className="text-white">{Math.round(results.hoursFreedMonthly)} hours</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-400">Annual hours freed:</span>
                          <span className="text-white">{Math.round(results.hoursFreedMonthly * 12)} hours</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-300 mb-3">Financial Impact</h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span className="text-gray-400">Monthly savings:</span>
                          <span className="text-white">${Math.round(results.monthlySavings).toLocaleString()}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-400">Annual savings:</span>
                          <span className="text-white">${Math.round(results.annualSavings).toLocaleString()}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-400">Potential growth:</span>
                          <span className="text-white">{Math.round(results.projectedGrowth)}%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/30 rounded-lg p-8">
                  <h4 className="text-xl font-bold text-white mb-3">Ready to Transform Your Business?</h4>
                  <p className="text-gray-300 mb-6">
                    These results are just the beginning. Let's discuss how to make this vision a reality for your business.
                  </p>
                  <button
                    onClick={() => {
                      // Show custom form instead of just closing
                      setStep(5);
                    }}
                    className="gradient-accent px-8 py-4 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Get My Custom Strategy
                  </button>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => {
                      setStep(1);
                      setResults(null);
                    }}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Calculate Again
                  </button>
                </div>
              </div>
            )}

            {step === 5 && (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">
                    <span className="text-white">Get Your Custom</span>{' '}
                    <span className="gradient-text-accent">AI Strategy</span>
                  </h3>
                  <p className="text-gray-300">Based on your ROI results, let's create a personalized automation roadmap for your business.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                      placeholder="your@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Priority Service *</label>
                    <select
                      name="services"
                      required
                      value={formData.services}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                    >
                      <option value="">Select priority area</option>
                      <option value="process-automation">Process Automation</option>
                      <option value="ai-strategy">AI Strategy Consulting</option>
                      <option value="custom-apps">Custom AI Applications</option>
                      <option value="growth-strategy">Growth Strategy</option>
                      <option value="full-transformation">Complete Transformation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Start immediately</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="3-months">Within 3 months</option>
                      <option value="exploring">Just exploring</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Investment Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
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
                  <label className="block text-sm font-medium text-gray-300 mb-2">Current Challenges</label>
                  <textarea
                    name="currentChallenges"
                    rows={4}
                    value={formData.currentChallenges}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 resize-none"
                    placeholder="Describe your biggest operational challenges and what you'd like to achieve with AI automation..."
                  />
                </div>

                {/* ROI Summary */}
                {results && (
                  <div className="bg-gradient-to-br from-orange-500/10 to-green-500/10 border border-orange-500/30 rounded-lg p-6">
                    <h4 className="font-semibold text-white mb-3">Your Calculated ROI Potential</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Annual Savings:</span>
                        <span className="text-green-300 font-semibold">${Math.round(results.annualSavings).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">ROI:</span>
                        <span className="text-green-300 font-semibold">{Math.round(results.roi)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Hours Freed Weekly:</span>
                        <span className="text-green-300 font-semibold">{Math.round(results.hoursFreedWeekly)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Payback Time:</span>
                        <span className="text-green-300 font-semibold">{Math.round(results.paybackMonths)} months</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-4 justify-center pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="px-6 py-3 bg-gray-700 text-white rounded-full font-medium hover:bg-gray-600 transition-colors"
                  >
                    Back to Results
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.services}
                    className="gradient-accent px-8 py-3 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Creating Strategy...
                      </span>
                    ) : (
                      'Get My Custom Strategy'
                    )}
                  </button>
                </div>
              </form>
            )}

            {step === 6 && (
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4">
                  <span className="text-white">Strategy Request</span>{' '}
                  <span className="gradient-text-accent">Submitted!</span>
                </h3>
                
                <p className="text-gray-300 max-w-2xl mx-auto text-enhanced mb-8">
                  Thank you! Our AI automation experts will analyze your ROI results and current 
                  challenges to create a personalized strategy. You'll receive your custom roadmap 
                  within 24 hours.
                </p>
                
                <div className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/30 rounded-lg p-6 max-w-md mx-auto">
                  <h4 className="font-semibold text-white mb-3">What happens next?</h4>
                  <ul className="space-y-2 text-sm text-gray-300 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Our team analyzes your specific situation (2-4 hours)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Custom strategy document created (12-24 hours)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Personal consultation scheduled (if desired)</span>
                    </li>
                  </ul>
                </div>
                
                <button
                  onClick={onClose}
                  className="bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-3 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
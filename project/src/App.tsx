import React, { useState } from 'react';
import { ChevronRight, Zap, Target, Rocket, Shield, Brain, Users, Code, TrendingUp, MessageCircle, Star, ArrowRight, CheckCircle, Clock, DollarSign, TrendingDown } from 'lucide-react';
import Modal from './components/Modal';
import CTAButton from './components/CTAButton';
import SplineScene from './components/SplineScene';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    services: '',
    timeline: '',
    budget: '',
    systemDescription: ''
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    closeModal();
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      website: '',
      services: '',
      timeline: '',
      budget: '',
      systemDescription: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-cyan-900/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Premium 3D-Style CSS Robot with Metallic Finish */}
<div className="mb-8 flex justify-center">
  <div className="relative group cursor-pointer">
    <div className="w-96 h-96 flex flex-col items-center justify-center relative perspective-1000">
      
      {/* AI Data Network Background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <svg className="w-full h-full animate-pulse" viewBox="0 0 400 400">
          <defs>
            <linearGradient id="networkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#00bfff', stopOpacity: 0.3}} />
              <stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: 0.1}} />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="2" fill="#00bfff" className="animate-ping" />
          <circle cx="350" cy="80" r="1.5" fill="#8b5cf6" className="animate-ping delay-500" />
          <circle cx="320" cy="300" r="2" fill="#06b6d4" className="animate-ping delay-1000" />
          <circle cx="80" cy="320" r="1" fill="#00bfff" className="animate-ping delay-1500" />
          
          <line x1="50" y1="50" x2="150" y2="120" stroke="url(#networkGrad)" strokeWidth="0.5" className="animate-pulse" />
          <line x1="350" y1="80" x2="250" y2="160" stroke="url(#networkGrad)" strokeWidth="0.5" className="animate-pulse delay-300" />
          <line x1="320" y1="300" x2="220" y2="240" stroke="url(#networkGrad)" strokeWidth="0.5" className="animate-pulse delay-600" />
        </svg>
      </div>

      {/* Main Premium Robot Container */}
      <div className="relative transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700 preserve-3d">
        
        {/* Premium Robot Head with Metallic Finish */}
        <div className="relative mb-4 transform group-hover:rotateX-5 transition-transform duration-500">
          <div className="w-24 h-24 bg-gradient-to-br from-slate-200 via-blue-100 to-slate-300 rounded-2xl shadow-2xl shadow-blue-500/40 relative overflow-hidden border border-white/20" 
               style={{
                 background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 25%, #94a3b8 50%, #64748b 75%, #475569 100%)',
                 boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 0 20px rgba(59,130,246,0.5)',
               }}>
            
            {/* Metallic Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent animate-pulse"></div>
            <div className="absolute top-0 left-4 w-8 h-16 bg-gradient-to-b from-white/20 to-transparent blur-sm animate-pulse delay-500"></div>
            
            {/* AI Processing HUD */}
            <div className="absolute top-1 left-1 right-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
            </div>
            
            {/* Premium Eyes with Depth */}
            <div className="flex justify-between items-center pt-5 px-5">
              <div className="relative">
                <div className="w-5 h-5 bg-gradient-radial from-white via-cyan-100 to-cyan-300 rounded-full shadow-inner border border-cyan-200"
                     style={{boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.2), 0 0 8px rgba(6,182,212,0.6)'}}>
                  <div className="absolute inset-1 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-ping"></div>
                  <div className="absolute inset-2 bg-white rounded-full shadow-lg animate-pulse"></div>
                </div>
              </div>
              <div className="relative">
                <div className="w-5 h-5 bg-gradient-radial from-white via-cyan-100 to-cyan-300 rounded-full shadow-inner border border-cyan-200"
                     style={{boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.2), 0 0 8px rgba(6,182,212,0.6)'}}>
                  <div className="absolute inset-1 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-ping delay-200"></div>
                  <div className="absolute inset-2 bg-white rounded-full shadow-lg animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
            
            {/* AI Voice Spectrum */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
              <div className="flex gap-0.5 items-end">
                {[1,2,3,4,5,4,3,2,1].map((height, i) => (
                  <div key={i} 
                       className="bg-gradient-to-t from-cyan-500 to-blue-400 rounded-full shadow-lg shadow-cyan-400/50 animate-pulse"
                       style={{
                         width: '2px',
                         height: `${height * 2}px`,
                         animationDelay: `${i * 100}ms`
                       }}>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Premium Antenna with Signal */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-6 bg-gradient-to-t from-slate-400 to-cyan-300 rounded-full shadow-lg animate-pulse">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-radial from-cyan-300 to-blue-400 rounded-full animate-ping shadow-lg shadow-cyan-400/50"></div>
            </div>
            {/* Signal Waves */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-6 h-6 border border-cyan-400/40 rounded-full animate-ping"></div>
              <div className="absolute inset-1 border border-cyan-400/30 rounded-full animate-ping delay-500"></div>
              <div className="absolute inset-2 border border-cyan-400/20 rounded-full animate-ping delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Premium Body with AI Core */}
        <div className="w-28 h-36 rounded-2xl shadow-2xl shadow-violet-500/50 relative overflow-hidden border border-white/10 group-hover:shadow-violet-500/70 transition-shadow duration-500"
             style={{
               background: 'linear-gradient(135deg, #1e293b 0%, #334155 25%, #475569 50%, #64748b 75%, #94a3b8 100%)',
               boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 0 30px rgba(139,92,246,0.4)',
             }}>
          
          {/* Metallic Body Reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
          <div className="absolute top-0 right-6 w-8 h-20 bg-gradient-to-b from-white/15 to-transparent blur-sm"></div>
          
          {/* AI Core Reactor */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-10 rounded-xl shadow-inner relative overflow-hidden border border-cyan-300/30"
               style={{
                 background: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%)',
                 boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 0 16px rgba(59,130,246,0.6)',
               }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            
            {/* Core Energy Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-cyan-300 rounded-full animate-spin opacity-80"></div>
              <div className="absolute w-6 h-6 border border-blue-200 rounded-full animate-spin-reverse opacity-60" style={{animationDuration: '3s'}}></div>
              <div className="absolute w-3 h-3 bg-white rounded-full animate-ping shadow-lg shadow-white/50"></div>
            </div>
          </div>

          {/* Status Panel */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex gap-1">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-ping shadow-lg shadow-green-400/50"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping delay-300 shadow-lg shadow-blue-400/50"></div>
            <div className="w-3 h-3 bg-violet-400 rounded-full animate-ping delay-600 shadow-lg shadow-violet-400/50"></div>
          </div>

          {/* Premium Arms with Joints */}
          <div className="absolute -left-10 top-8 transform origin-top rotate-15 group-hover:rotate-5 group-hover:scale-110 transition-all duration-700">
            <div className="w-6 h-20 rounded-full shadow-lg shadow-blue-500/30 relative border border-white/10"
                 style={{
                   background: 'linear-gradient(180deg, #475569 0%, #64748b 50%, #94a3b8 100%)',
                   boxShadow: 'inset 1px 0 0 rgba(255,255,255,0.1), 0 0 12px rgba(59,130,246,0.3)',
                 }}>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-slate-300 rounded-full border border-slate-400 shadow-inner"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border border-cyan-300/50 shadow-lg shadow-cyan-400/50"
                   style={{
                     background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                     boxShadow: '0 0 12px rgba(6,182,212,0.6), inset 0 1px 0 rgba(255,255,255,0.2)',
                   }}>
                <div className="absolute inset-1 border border-white/30 rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="absolute -right-10 top-8 transform origin-top -rotate-15 group-hover:-rotate-5 group-hover:scale-110 transition-all duration-700">
            <div className="w-6 h-20 rounded-full shadow-lg shadow-blue-500/30 relative border border-white/10"
                 style={{
                   background: 'linear-gradient(180deg, #475569 0%, #64748b 50%, #94a3b8 100%)',
                   boxShadow: 'inset -1px 0 0 rgba(255,255,255,0.1), 0 0 12px rgba(59,130,246,0.3)',
                 }}>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-slate-300 rounded-full border border-slate-400 shadow-inner"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border border-cyan-300/50 shadow-lg shadow-cyan-400/50"
                   style={{
                     background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                     boxShadow: '0 0 12px rgba(6,182,212,0.6), inset 0 1px 0 rgba(255,255,255,0.2)',
                   }}>
                <div className="absolute inset-1 border border-white/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Legs with Hover Effect */}
        <div className="flex justify-center gap-4 mt-3 group-hover:mt-2 transition-all duration-500">
          {[0, 1].map((index) => (
            <div key={index} className="relative">
              <div className="w-5 h-24 rounded-full shadow-lg shadow-violet-500/30 relative border border-white/10 group-hover:shadow-violet-500/50 transition-shadow duration-500"
                   style={{
                     background: 'linear-gradient(180deg, #8b5cf6 0%, #6366f1 25%, #3b82f6 75%, #06b6d4 100%)',
                     boxShadow: 'inset 1px 0 0 rgba(255,255,255,0.1), 0 0 12px rgba(139,92,246,0.4)',
                   }}>
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-slate-300 rounded-full border border-slate-400 shadow-inner"></div>
              </div>
              <div className="absolute -bottom-2 -left-1 w-7 h-4 rounded-full border border-cyan-300/30 shadow-lg shadow-cyan-400/40"
                   style={{
                     background: 'linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)',
                     boxShadow: '0 0 8px rgba(6,182,212,0.5), inset 0 1px 0 rgba(255,255,255,0.2)',
                   }}></div>
              {/* Hover Propulsion */}
              <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-cyan-400/50 rounded-full blur-sm transition-opacity duration-500 ${index === 0 ? 'group-hover:animate-pulse' : 'group-hover:animate-pulse delay-150'}`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Floating Interface */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-2">
        <div className="bg-gradient-to-r from-slate-800/90 via-slate-700/90 to-slate-800/90 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-400/30 shadow-2xl shadow-cyan-400/20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <span className="text-sm text-cyan-300 font-medium">AI Assistant Online</span>
          </div>
        </div>
      </div>
    </div>
    
    {/* Premium Multi-Layer Glow System */}
    <div className="absolute inset-0 bg-gradient-radial from-blue-500/30 via-violet-500/20 to-transparent rounded-full blur-3xl animate-pulse -z-10"></div>
    <div className="absolute inset-2 bg-gradient-radial from-cyan-500/25 via-transparent to-violet-500/25 rounded-full blur-2xl animate-pulse delay-1000 -z-10"></div>
    <div className="absolute -inset-8 bg-gradient-radial from-blue-500/15 via-violet-500/10 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-2000 -z-10"></div>
    
    {/* Premium Orbital Rings */}
    <div className="absolute inset-0 border border-cyan-400/20 rounded-full animate-spin-slow -z-10 shadow-2xl shadow-cyan-400/10"></div>
    <div className="absolute inset-6 border border-blue-400/15 rounded-full animate-spin-reverse-slow -z-10"></div>
    <div className="absolute inset-12 border border-violet-400/10 rounded-full animate-spin-slow -z-10" style={{animationDuration: '20s'}}></div>
  </div>
</div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Unlock Freedom of Mind:
            </span>
            <br />
            <span className="text-white">Scale Faster with AI Automation</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business operations with intelligent automation. 
            Mentis Liberum delivers explosive growth by eliminating manual work, 
            boosting revenue, and future-proofing your competitive edge.
          </p>

          {/* CTA Button */}
          <CTAButton onClick={openModal} size="lg">
            Book Your Consultation
          </CTAButton>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>No Risk Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>24h Response Time</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>ROI Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Why Leading Businesses
              </span>
              <br />
              <span className="text-white">Choose Mentis Liberum</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don't just automate processes—we transform your entire business operation 
              to unlock unprecedented growth and competitive advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Scale Faster with AI",
                description: "Automate complex workflows and scale operations without adding headcount",
                metric: "3x faster growth"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Reclaim Your Time",
                description: "Eliminate 70% of manual tasks and focus on strategic initiatives that drive revenue",
                metric: "40+ hours saved weekly"
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Multiply Revenue",
                description: "Intelligent systems that identify opportunities and convert leads 24/7",
                metric: "250% ROI average"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Future-Proof Operations",
                description: "Stay ahead of competition with cutting-edge AI solutions and strategic guidance",
                metric: "5+ years ahead"
              }
            ].map((item, index) => (
              <div key={index} className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-100 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {item.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Strategic CTA after value props */}
          <div className="mt-16 text-center">
            <CTAButton onClick={openModal} size="lg">
              Start Your AI Transformation
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Dream Outcomes Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-white">Imagine Your Business</span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Running on Autopilot
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform from overwhelmed business owner to strategic visionary. 
              Here's what freedom of mind actually looks like.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Before State */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center justify-center lg:justify-start gap-2">
                  <TrendingDown className="w-6 h-6" />
                  Before Mentis Liberum
                </h3>
                <p className="text-gray-400 mb-6">The daily struggle of manual operations</p>
              </div>
              
              {[
                "Drowning in repetitive tasks that steal focus from strategy",
                "Missing opportunities because you can't respond fast enough",
                "Working IN the business instead of ON the business",
                "Competitors gaining ground with superior automation",
                "Team burnout from mundane, soul-crushing manual work"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-red-900/10 border border-red-500/20 rounded-lg">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            {/* After State */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center justify-center lg:justify-start gap-2">
                  <TrendingUp className="w-6 h-6" />
                  After Mentis Liberum
                </h3>
                <p className="text-gray-400 mb-6">The freedom of intelligent automation</p>
              </div>
              
              {[
                "AI handles routine operations while you focus on growth strategy",
                "Never miss a lead with 24/7 intelligent response systems",
                "Scale operations 3x faster without hiring more staff",
                "Stay 5+ years ahead of competitors with cutting-edge automation",
                "Team focused on high-value, creative work they actually enjoy"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-green-900/10 border border-green-500/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transformation Metrics */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "70%", label: "Fewer Manual Tasks" },
              { metric: "250%", label: "Average ROI" },
              { metric: "40+", label: "Hours Saved Weekly" },
              { metric: "3x", label: "Faster Growth" }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {item.metric}
                </div>
                <div className="text-gray-400 text-sm">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA after dream outcomes */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-300 mb-6">
              Ready to experience this transformation for your business?
            </p>
            <CTAButton onClick={openModal} size="lg">
              Claim Your Freedom of Mind
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Transform Every Aspect
              </span>
              <br />
              <span className="text-white">of Your Business</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive suite of AI-powered solutions covers every touchpoint 
              of your business operations, from automation to strategic growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Intelligent Process Automation",
                description: "Transform repetitive workflows into smart, self-managing systems that scale with your business growth.",
                benefits: ["Eliminate 70% of manual tasks", "24/7 operation without supervision", "Seamless integration with existing tools"]
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Personal Brand Acceleration",
                description: "AI-driven content and engagement strategies that position you as the undisputed industry leader.",
                benefits: ["Automated content creation", "Intelligent audience targeting", "Authority building systems"]
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Custom AI Applications",
                description: "Bespoke intelligent solutions tailored to your unique business challenges and competitive advantages.",
                benefits: ["Proprietary AI advantage", "Scalable custom solutions", "Future-proof architecture"]
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Strategic AI Consulting",
                description: "Navigate the AI landscape with expert guidance that ensures maximum ROI and competitive positioning.",
                benefits: ["Strategic AI roadmap", "Risk mitigation planning", "Technology stack optimization"]
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Growth Strategy Implementation",
                description: "Data-driven growth systems that identify opportunities and execute strategies with precision.",
                benefits: ["Revenue optimization", "Market expansion planning", "Performance tracking systems"]
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Executive AI Mentorship",
                description: "One-on-one guidance to master AI integration and lead your industry into the future.",
                benefits: ["Leadership development", "Industry trend insights", "Competitive intelligence"]
              }
            ].map((service, index) => (
              <div key={index} className="group relative p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA after services */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-300 mb-6">
              Which transformation will have the biggest impact on your business?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton onClick={openModal} size="md">
                Schedule Strategy Call
              </CTAButton>
              <CTAButton onClick={openModal} variant="secondary" size="md">
                Get Custom Proposal
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-white">Trusted by</span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Forward-thinking executives choose Mentis Liberum to transform their operations 
              and maintain competitive advantage in an AI-driven world.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                quote: "Mentis Liberum transformed our entire operation. We've eliminated 80% of manual processes and increased revenue by 300% in just 6 months.",
                author: "Sarah Chen",
                position: "CEO, TechScale Ventures",
                rating: 5
              },
              {
                quote: "The automation systems they built have given us our lives back. We're scaling faster than ever while working fewer hours.",
                author: "Marcus Rodriguez",
                position: "Founder, Growth Dynamics",
                rating: 5
              },
              {
                quote: "Their strategic guidance helped us stay 5 years ahead of competitors. The ROI has been phenomenal and continues to compound.",
                author: "Dr. Lisa Thompson",
                position: "Director, Innovation Labs",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50">
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Processes Automated" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "$50M+", label: "Revenue Generated" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA after social proof */}
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-300 mb-6">
              Join the leaders who've already transformed their businesses
            </p>
            <CTAButton onClick={openModal} size="lg">
              Book Your Success Story
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Mentis Liberum
              </h3>
              <p className="text-gray-400 mt-2">
                Freedom of Mind, Powered by AI
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
              <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Services
              </a>
              <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                About
              </a>
              <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Contact
              </a>
              <a href="#privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
            
            <div className="text-gray-500 text-sm">
              © 2025 Mentis Liberum. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        formData={formData}
        onFormChange={handleChange}
        onFormSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
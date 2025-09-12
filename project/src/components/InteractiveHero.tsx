import React, { useState, useEffect } from 'react';
import { Brain, Zap, CheckCircle, ArrowRight, Waves, TrendingUp, Clock, DollarSign } from 'lucide-react';
import CTAButton from './CTAButton';

interface InteractiveHeroProps {
  onOpenModal: () => void;
}

const InteractiveHero: React.FC<InteractiveHeroProps> = ({ onOpenModal }) => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [wavePhase, setWavePhase] = useState(0);

  const metrics = [
    { icon: <Clock className="w-8 h-8" />, value: "40+", label: "Hours Saved Weekly", color: "blue" },
    { icon: <DollarSign className="w-8 h-8" />, value: "$2.3M", label: "Annual Savings", color: "green" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "250%", label: "ROI Average", color: "orange" },
    { icon: <CheckCircle className="w-8 h-8" />, value: "99.9%", label: "Accuracy Rate", color: "violet" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % metrics.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWavePhase(prev => prev + 0.1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Wave Background */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          {/* Multiple wave layers for depth */}
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.15)" />
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0.1)" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(249, 115, 22, 0.08)" />
              <stop offset="50%" stopColor="rgba(16, 185, 129, 0.12)" />
              <stop offset="100%" stopColor="rgba(168, 85, 247, 0.08)" />
            </linearGradient>
          </defs>
          
          {/* Primary wave */}
          <path
            d={`M0,400 Q${300 + Math.sin(wavePhase) * 100},${350 + Math.cos(wavePhase * 0.7) * 50} 600,400 T1200,400 V800 H0 Z`}
            fill="url(#wave1)"
          />
          
          {/* Secondary wave */}
          <path
            d={`M0,450 Q${400 + Math.cos(wavePhase * 1.2) * 80},${380 + Math.sin(wavePhase * 0.8) * 60} 800,450 T1200,450 V800 H0 Z`}
            fill="url(#wave2)"
          />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => {
          const delay = i * 0.5;
          const x = (i % 4) * 25 + 10;
          const y = Math.floor(i / 4) * 20 + 10;
          
          return (
            <div
              key={i}
              className="absolute opacity-20"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                animation: `float 3s ease-in-out infinite ${delay}s`,
              }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
            </div>
          );
        })}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-8">
              <Waves className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-medium">Experience True Peace of Mind</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Freedom
              </span>
              <br />
              <span className="text-white">Through AI</span>
              <br />
              <span className="gradient-text-accent">Automation</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl text-enhanced-loose">
              Stop drowning in manual work. Let AI handle the routine while you focus on what truly matters—growing your business and living your life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <CTAButton onClick={onOpenModal} variant="accent" size="lg">
                Discover Your Freedom
              </CTAButton>
              <CTAButton onClick={onOpenModal} variant="secondary" size="lg">
                Watch Demo
              </CTAButton>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>No Risk Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>24h Response Time</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Results Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Visualization */}
          <div className="relative">
            {/* Central Hub */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Main Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 border-2 border-blue-500/30 backdrop-blur-sm">
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-600/50 flex items-center justify-center">
                  <div className="text-center">
                    <Brain className="w-16 h-16 text-blue-400 mx-auto mb-4 animate-pulse" />
                    <h3 className="text-xl font-bold text-white mb-2">AI Command Center</h3>
                    <p className="text-sm text-gray-400">Orchestrating Your Success</p>
                  </div>
                </div>
              </div>

              {/* Orbiting Metrics */}
              {metrics.map((metric, index) => {
                const angle = (index / metrics.length) * 360;
                const isActive = activeMetric === index;
                const radius = 140;
                const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
                const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

                return (
                  <div
                    key={index}
                    className={`absolute transition-all duration-500 ${
                      isActive ? 'scale-125 z-20' : 'scale-100 z-10'
                    }`}
                    style={{
                      left: `calc(50% + ${x}px - 40px)`,
                      top: `calc(50% + ${y}px - 40px)`,
                    }}
                  >
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? 'bg-gradient-to-br from-orange-500/30 to-green-500/30 border-2 border-orange-400/60 shadow-lg shadow-orange-500/25'
                        : 'bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600/50'
                    }`}>
                      <div className="text-center">
                        <div className={`transition-colors duration-300 ${
                          isActive ? 'text-orange-300' : 'text-gray-400'
                        }`}>
                          {metric.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Metric Display */}
                    {isActive && (
                      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center animate-slideUp">
                        <div className="bg-black/80 backdrop-blur-sm border border-orange-500/30 rounded-lg px-4 py-2">
                          <div className="text-2xl font-bold gradient-text-accent">{metric.value}</div>
                          <div className="text-xs text-gray-300 whitespace-nowrap">{metric.label}</div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {metrics.map((_, index) => {
                  const angle = (index / metrics.length) * 360;
                  const radius = 140;
                  const x1 = 50; // Center percentage
                  const y1 = 50;
                  const x2 = 50 + (Math.cos((angle - 90) * (Math.PI / 180)) * radius) / 3.2; // Adjust for container
                  const y2 = 50 + (Math.sin((angle - 90) * (Math.PI / 180)) * radius) / 3.2;
                  const isActive = activeMetric === index;

                  return (
                    <line
                      key={index}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke={isActive ? '#f97316' : '#374151'}
                      strokeWidth={isActive ? '2' : '1'}
                      opacity={isActive ? '0.8' : '0.3'}
                      className="transition-all duration-500"
                    />
                  );
                })}
              </svg>
            </div>

            {/* Status Indicator */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-green-500/10 to-green-400/10 border border-green-500/30 rounded-full px-6 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  <span className="text-sm text-green-300 font-medium">AI Systems Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default InteractiveHero;
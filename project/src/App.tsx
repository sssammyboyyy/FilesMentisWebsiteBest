import React, { useState } from 'react';
import { ChevronRight, Zap, Target, Rocket, Shield, Brain, Users, Code, TrendingUp, MessageCircle, Star, ArrowRight, CheckCircle, Clock, DollarSign, TrendingDown } from 'lucide-react';
import Modal from './components/Modal';
import CTAButton from './components/CTAButton';
import Premium3DRobot from './components/Premium3DRobot';
import VisualProof from './components/VisualProof';
import ROICalculator from './components/ROICalculator';
import UrgencyElements from './components/UrgencyElements';
import WorkflowDiagram from './components/WorkflowDiagram';
import InteractiveHero from './components/InteractiveHero';
import PremiumFooter from './components/PremiumFooter';
import Header from './components/Header';
import Blog from './components/Blog';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
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
  
  const openCalculator = () => setIsCalculatorOpen(true);
  const closeCalculator = () => setIsCalculatorOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send to n8n webhook
      const response = await fetch('http://localhost:5678/webhook-test/df296120-86c0-4bce-a8d7-2ea58478d15e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Main Contact Form',
          timestamp: new Date().toISOString()
        })
      });
      
      if (response.ok) {
        closeModal();
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          website: '',
          services: '',
          timeline: '',
          budget: '',
          systemDescription: ''
        });
        alert('Thank you! We\'ll be in touch soon.');
      } else {
        alert('There was an issue submitting your request. Please try again.');
      }
    } catch (error) {
      alert('There was an issue submitting your request. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header with Logo */}
      <Header onOpenModal={openModal} />
      
      {/* Interactive Hero Section */}
      <InteractiveHero onOpenModal={openModal} />

      {/* Value Proposition Section */}
      <section id="value" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Why Visionary CEOs
              </span>
              <br />
              <span className="text-white">Partner With Me</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-enhanced">
              I don't implement solutions—I architect business empires. My clients don't just grow revenue; 
              they reshape entire industries and create market-dominating competitive moats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Market Domination",
                description: "I architect revenue systems that position you as the undisputed market leader while competitors struggle to keep up",
                metric: "10x competitive advantage"
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Exponential Revenue Growth",
                description: "My revenue architecture creates compounding growth systems that scale from 7-figures to 9-figures predictably",
                metric: "500% revenue acceleration"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Strategic Decision Intelligence",
                description: "Real-time business intelligence that gives you omniscient control over every revenue driver and market opportunity",
                metric: "Predictive market insights"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Acquisition-Ready Valuation",
                description: "My operational frameworks position your business for premium acquisitions or successful IPO with maximum valuation multipliers",
                metric: "Exit-optimized architecture"
              }
            ].map((item, index) => (
              <div key={index} className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-6 text-enhanced">
                    {item.description}
                  </p>
                  <div className="text-sm font-bold gradient-text-accent">
                    {item.metric}
                  </div>
                </div>
              </div>
            ))
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-enhanced">
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

      {/* Visual Proof Section */}
      <VisualProof onOpenCalculator={openCalculator} />

      {/* Workflow Diagram Section */}
      <div id="workflow">
        <WorkflowDiagram />
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text-accent">
                Executive Revenue
              </span>
              <br />
              <span className="text-white">Transformation Partnerships</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-enhanced">
              I architect comprehensive revenue systems that position you as the market leader. 
              These are not services—they are strategic partnerships that transform your business trajectory.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Revenue Architecture Partnership",
                description: "I design and implement enterprise-grade revenue systems that position you 5 years ahead of competition. This is comprehensive business transformation, not technical work.",
                benefits: ["500% revenue acceleration potential", "Market-dominating competitive advantage", "Predictable 8-figure growth trajectory"]
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Executive Growth Advisory",
                description: "As your strategic growth partner, I architect customer acquisition and retention systems that compound your market position while you focus on vision and leadership.",
                benefits: ["Board-level strategic guidance", "Executive decision-making support", "Market leadership positioning"]
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Business Intelligence Transformation",
                description: "I create decision-making systems that give you unprecedented visibility and control over every revenue driver. Make data-driven decisions with absolute confidence.",
                benefits: ["Real-time business intelligence", "Predictive growth analytics", "Strategic decision automation"]
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "International Expansion Strategy",
                description: "Partner with me to architect scalable systems for multi-market domination. I've built revenue engines that work across currencies, cultures, and compliance requirements.",
                benefits: ["Global market penetration", "Cross-border revenue optimization", "International competitive moats"]
              },
              {
                icon: <Rocket className="w-6 h-6" />,
                title: "Acquisition & Exit Preparation",
                description: "I build businesses that command premium valuations. My revenue systems and operational excellence frameworks make you the obvious acquisition target or IPO candidate.",
                benefits: ["10x valuation multipliers", "Acquirer-ready operations", "Exit strategy optimization"]
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Competitive Domination Systems",
                description: "I architect unfair advantages that make competition irrelevant. While others play catch-up, you'll own your market through intelligent automation and strategic positioning.",
                benefits: ["Monopolistic market advantages", "Competitor-proof business moats", "Industry-leading innovation"]
              }
            ]
              <div key={index} className="group relative p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 text-enhanced">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-3 text-sm text-gray-300">
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
              Ready to partner with a leader who architects business empires?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton onClick={openModal} size="md">
                Explore Partnership
              </CTAButton>
              <CTAButton onClick={openModal} variant="secondary" size="md">
                Executive Strategy Session
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-white">Strategic</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Business Transformation Leader
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I partner with ambitious executives to architect revenue systems that create market-dominating competitive advantages. 
              My clients don't just grow—they reshape entire industries.
            </p>
          </div>

          {/* Authority Credentials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Executive Board Advisory",
                credential: "C-Suite Strategic Partner",
                description: "I advise CEOs and executive teams on business transformation strategies that create 8-figure revenue impacts and market-dominating competitive advantages.",
                icon: <TrendingUp className="w-8 h-8" />
              },
              {
                title: "International Business Leadership",
                credential: "Global Revenue Architect",
                description: "I design and implement revenue systems for international expansion, helping ambitious leaders build multi-market business empires that competitors can't replicate.",
                icon: <Target className="w-8 h-8" />
              },
              {
                title: "Acquisition & Exit Strategist",
                credential: "Valuation Multiplier Specialist",
                description: "My revenue architecture and operational systems are designed to position businesses for premium acquisitions or successful IPOs, creating 10x valuation multipliers.",
                icon: <Rocket className="w-8 h-8" />
              }
            ]
              <div key={index} className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 group hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    {credential.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{credential.title}</h3>
                <div className="text-sm font-medium text-blue-400 mb-4">{credential.credential}</div>
                <p className="text-gray-300 leading-relaxed">{credential.description}</p>
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

      {/* Blog Section */}
      <Blog onOpenModal={openModal} />
      
      {/* Urgency Elements */}
      <UrgencyElements 
        onOpenModal={openModal}
        onOpenCalculator={openCalculator}
      />

      {/* Premium Footer */}
      <PremiumFooter 
        onOpenModal={openModal}
        onOpenCalculator={openCalculator}
      />

      {/* Modal Components */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        formData={formData}
        onFormChange={handleChange}
        onFormSubmit={handleSubmit}
      />
      
      {/* ROI Calculator */}
      <ROICalculator 
        isOpen={isCalculatorOpen}
        onClose={closeCalculator}
      />
    </div>
  );
}

export default App;
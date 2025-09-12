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
      {/* Interactive Hero Section */}
      <InteractiveHero onOpenModal={openModal} />

      {/* Value Proposition Section */}
      <section id="value" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Why Leading Businesses
              </span>
              <br />
              <span className="text-white">Choose Mentis Liberum</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-enhanced">
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
                Transform Every Aspect
              </span>
              <br />
              <span className="text-white">of Your Business</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-enhanced">
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
              <div key={index} className="group relative p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-orange-500/20 to-green-500/20 rounded-xl text-orange-400 group-hover:text-orange-300 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-orange-100 transition-colors duration-300">
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
      <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
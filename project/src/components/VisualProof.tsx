import React from 'react';
import { TrendingUp, ArrowRight, CheckCircle, BarChart3, Users, Clock, DollarSign } from 'lucide-react';

interface CaseStudy {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    improvement: string;
    icon: React.ReactNode;
  }[];
  quote: string;
  author: string;
  position: string;
  timeline: string;
}

const caseStudies: CaseStudy[] = [
  {
    company: "TechScale Ventures",
    industry: "SaaS",
    challenge: "Manual customer onboarding taking 3 weeks, high churn",
    solution: "AI-powered onboarding automation with personalized workflows",
    results: [
      { metric: "95%", improvement: "Faster Onboarding", icon: <Clock className="w-5 h-5" /> },
      { metric: "60%", improvement: "Churn Reduction", icon: <Users className="w-5 h-5" /> },
      { metric: "$2.3M", improvement: "Annual Savings", icon: <DollarSign className="w-5 h-5" /> }
    ],
    quote: "The automation eliminated our biggest bottleneck and transformed customer experience.",
    author: "Sarah Chen",
    position: "CEO",
    timeline: "3 months"
  },
  {
    company: "Growth Dynamics",
    industry: "Consulting",
    challenge: "Sales team spending 70% of time on admin tasks",
    solution: "Intelligent CRM automation with AI-driven lead qualification",
    results: [
      { metric: "80%", improvement: "Admin Reduction", icon: <BarChart3 className="w-5 h-5" /> },
      { metric: "300%", improvement: "Lead Quality", icon: <TrendingUp className="w-5 h-5" /> },
      { metric: "45", improvement: "Hours Saved Weekly", icon: <Clock className="w-5 h-5" /> }
    ],
    quote: "Our sales team can finally focus on what they do best - closing deals.",
    author: "Marcus Rodriguez",
    position: "Founder",
    timeline: "6 weeks"
  }
];

const ProcessStep = ({ step, title, description, isActive }: {
  step: number;
  title: string;
  description: string;
  isActive: boolean;
}) => (
  <div className={`relative flex items-start gap-4 p-6 rounded-xl transition-all duration-300 ${
    isActive ? 'bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/30' : 'bg-gray-800/30 border border-gray-700/30'
  }`}>
    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
      isActive ? 'gradient-accent text-white' : 'bg-gray-700 text-gray-300'
    }`}>
      {step}
    </div>
    <div>
      <h4 className={`font-semibold mb-2 ${isActive ? 'text-white' : 'text-gray-300'}`}>{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
    {isActive && (
      <div className="absolute top-4 right-4">
        <CheckCircle className="w-5 h-5 text-green-400" />
      </div>
    )}
  </div>
);

interface VisualProofProps {
  onOpenCalculator?: () => void;
}

const VisualProof: React.FC<VisualProofProps> = ({ onOpenCalculator }) => {
  const [activeCase, setActiveCase] = React.useState(0);
  const [activeStep, setActiveStep] = React.useState(1);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev >= 4 ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const processSteps = [
    { title: "Discovery & Analysis", description: "Deep dive into your current processes and identify automation opportunities" },
    { title: "Custom AI Strategy", description: "Design tailored automation solutions that fit your specific business needs" },
    { title: "Implementation", description: "Build and deploy intelligent systems with minimal disruption to operations" },
    { title: "Optimization & Growth", description: "Continuous monitoring and refinement for maximum ROI and performance" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Real Results from</span>
            <br />
            <span className="gradient-text-accent">Real Clients</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-enhanced">
            See exactly how we've transformed businesses like yours with measurable, 
            documented success stories and proven methodologies.
          </p>
        </div>

        {/* Case Study Showcase */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {caseStudies.map((study, index) => (
              <button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCase === index 
                    ? 'gradient-accent text-white shadow-lg' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {study.company}
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Case Study Details */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-white">{caseStudies[activeCase].company}</h3>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      {caseStudies[activeCase].industry}
                    </span>
                  </div>
                  <p className="text-gray-300 text-enhanced">{caseStudies[activeCase].challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Our Solution</h4>
                  <p className="text-gray-300 text-enhanced">{caseStudies[activeCase].solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-4">Results Achieved</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {caseStudies[activeCase].results.map((result, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg p-4 text-center">
                        <div className="text-blue-400 mb-2 flex justify-center">{result.icon}</div>
                        <div className="text-2xl font-bold gradient-text-accent mb-1">{result.metric}</div>
                        <div className="text-sm text-gray-400">{result.improvement}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <blockquote className="bg-gradient-to-r from-blue-500/10 to-violet-500/10 border-l-4 border-blue-500 pl-6 py-4">
                  <p className="text-gray-300 italic mb-3 text-enhanced">"{caseStudies[activeCase].quote}"</p>
                  <div className="text-sm">
                    <div className="font-semibold text-white">{caseStudies[activeCase].author}</div>
                    <div className="text-gray-400">{caseStudies[activeCase].position}, {caseStudies[activeCase].company}</div>
                  </div>
                </blockquote>

                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Completed in {caseStudies[activeCase].timeline}</span>
                </div>
              </div>

              {/* Visual Process Flow */}
              <div>
                <h4 className="font-semibold text-white mb-6">Our Proven Process</h4>
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <ProcessStep
                      key={index}
                      step={index + 1}
                      title={step.title}
                      description={step.description}
                      isActive={activeStep === index + 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Before State */}
          <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              Before Automation
            </h3>
            <div className="space-y-4">
              {[
                "Manual processes consuming 40+ hours weekly",
                "Human errors causing customer dissatisfaction",
                "Inconsistent service delivery and quality",
                "Scaling limited by available workforce",
                "Revenue plateauing despite market growth"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-red-900/20 rounded-lg">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After State */}
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              After Automation
            </h3>
            <div className="space-y-4">
              {[
                "AI handles 70% of tasks with 99.9% accuracy",
                "Consistent, premium experience for every customer",
                "Predictable, scalable service delivery",
                "Growth limited only by market opportunity",
                "Revenue multiplied through operational efficiency"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-green-900/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROI Calculator Teaser */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-white">Calculate Your</span>{' '}
            <span className="gradient-text-accent">Potential ROI</span>
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-enhanced">
            Discover how much time and money AI automation could save your business with our interactive ROI calculator.
          </p>
          <button 
            onClick={onOpenCalculator}
            className="group bg-gradient-to-r from-orange-500 to-green-500 px-8 py-4 rounded-full font-semibold text-white hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Launch ROI Calculator
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VisualProof;
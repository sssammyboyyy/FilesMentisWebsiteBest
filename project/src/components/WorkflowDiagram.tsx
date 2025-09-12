import React from 'react';
import { ArrowRight, Brain, Cog, Zap, TrendingUp, CheckCircle, AlertTriangle, RefreshCw } from 'lucide-react';

const WorkflowStep = ({ 
  step, 
  title, 
  description, 
  icon, 
  isActive = false, 
  isCompleted = false,
  className = ""
}: {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive?: boolean;
  isCompleted?: boolean;
  className?: string;
}) => (
  <div className={`relative ${className}`}>
    <div className={`flex flex-col items-center p-6 rounded-2xl transition-all duration-500 ${
      isActive 
        ? 'bg-gradient-to-br from-orange-500/20 to-green-500/20 border-2 border-orange-500/40 shadow-lg shadow-orange-500/20 scale-105' 
        : isCompleted
          ? 'bg-gradient-to-br from-green-500/10 to-green-400/10 border border-green-500/30'
          : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/30'
    }`}>
      {/* Step Number and Icon */}
      <div className={`relative w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
        isActive 
          ? 'gradient-accent text-white' 
          : isCompleted
            ? 'bg-green-500 text-white'
            : 'bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-400'
      }`}>
        {isCompleted ? <CheckCircle className="w-8 h-8" /> : icon}
        <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
          isActive 
            ? 'bg-orange-500 text-white' 
            : isCompleted
              ? 'bg-green-500 text-white'
              : 'bg-gray-700 text-gray-300'
        }`}>
          {step}
        </div>
      </div>
      
      {/* Content */}
      <h4 className={`text-lg font-bold text-center mb-2 ${
        isActive ? 'text-white' : isCompleted ? 'text-green-100' : 'text-gray-200'
      }`}>
        {title}
      </h4>
      <p className={`text-sm text-center ${
        isActive ? 'text-gray-200' : 'text-gray-400'
      } text-enhanced`}>
        {description}
      </p>
      
      {/* Active indicator */}
      {isActive && (
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
        </div>
      )}
    </div>
  </div>
);

const WorkflowArrow = ({ isActive = false }: { isActive?: boolean }) => (
  <div className="flex items-center justify-center p-4">
    <ArrowRight className={`w-8 h-8 transition-all duration-500 ${
      isActive ? 'text-orange-400 scale-110' : 'text-gray-600'
    }`} />
  </div>
);

const ProblemSolutionDiagram = () => {
  const problems = [
    { icon: <AlertTriangle className="w-6 h-6" />, title: "Manual Bottlenecks", description: "Repetitive tasks consuming valuable time" },
    { icon: <RefreshCw className="w-6 h-6" />, title: "Inconsistent Quality", description: "Human errors affecting deliverables" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Scaling Limitations", description: "Growth constrained by workforce" }
  ];

  const solutions = [
    { icon: <Brain className="w-6 h-6" />, title: "AI Automation", description: "Smart systems handling routine work" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Consistent Excellence", description: "99.9% accuracy across all processes" },
    { icon: <Zap className="w-6 h-6" />, title: "Unlimited Scale", description: "Growth limited only by opportunity" }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/50 p-8">
      <h3 className="text-2xl font-bold text-center mb-8">
        <span className="text-white">From Problems to</span>{' '}
        <span className="gradient-text-accent">Solutions</span>
      </h3>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Problems Side */}
        <div>
          <h4 className="text-lg font-bold text-red-400 mb-6 text-center">Current Challenges</h4>
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-red-900/10 border border-red-500/20 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center text-red-400">
                  {problem.icon}
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1">{problem.title}</h5>
                  <p className="text-sm text-gray-300">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="relative">
            <ArrowRight className="w-12 h-12 text-orange-400" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Solutions Side */}
        <div>
          <h4 className="text-lg font-bold text-green-400 mb-6 text-center">AI-Powered Solutions</h4>
          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-green-900/10 border border-green-500/20 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                  {solution.icon}
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1">{solution.title}</h5>
                  <p className="text-sm text-gray-300">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkflowDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => {
        const next = prev >= 6 ? 1 : prev + 1;
        
        // Mark previous step as completed
        if (prev !== next && prev <= 6) {
          setCompletedSteps(current => {
            const newCompleted = [...current, prev];
            // Reset completed steps when we restart
            return next === 1 ? [] : newCompleted;
          });
        }
        
        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const workflowSteps = [
    {
      title: "Discovery & Analysis",
      description: "Map current processes and identify automation opportunities",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Strategy Design",
      description: "Create custom AI solutions tailored to your business",
      icon: <Cog className="w-8 h-8" />
    },
    {
      title: "Implementation",
      description: "Deploy intelligent systems with minimal disruption",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Testing & Optimization",
      description: "Fine-tune performance for maximum efficiency",
      icon: <RefreshCw className="w-8 h-8" />
    },
    {
      title: "Launch & Monitor",
      description: "Go live with continuous monitoring and support",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "Scale & Growth",
      description: "Expand automation as your business grows",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">How We</span>{' '}
            <span className="gradient-text-accent">Transform</span>{' '}
            <span className="text-white">Your Business</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-enhanced">
            Our proven methodology ensures successful AI implementation with measurable results at every stage.
          </p>
        </div>

        {/* Problem-Solution Diagram */}
        <div className="mb-20">
          <ProblemSolutionDiagram />
        </div>

        {/* Interactive Workflow */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-white">Our Proven</span>{' '}
            <span className="gradient-text-accent">6-Step Process</span>
          </h3>

          {/* Desktop Workflow */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-6 gap-4 items-center">
              {workflowSteps.map((step, index) => (
                <React.Fragment key={index}>
                  <WorkflowStep
                    step={index + 1}
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                    isActive={activeStep === index + 1}
                    isCompleted={completedSteps.includes(index + 1)}
                  />
                  {index < workflowSteps.length - 1 && (
                    <WorkflowArrow isActive={activeStep > index + 1 || completedSteps.includes(index + 1)} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile Workflow */}
          <div className="lg:hidden">
            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <WorkflowStep
                    step={index + 1}
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                    isActive={activeStep === index + 1}
                    isCompleted={completedSteps.includes(index + 1)}
                    className="flex-1"
                  />
                  {index < workflowSteps.length - 1 && (
                    <div className="flex flex-col items-center">
                      <div className="w-px h-8 bg-gray-600"></div>
                      <ArrowRight className="w-4 h-4 text-gray-600 rotate-90" />
                      <div className="w-px h-8 bg-gray-600"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline with Deliverables */}
        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/50 p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-white">Typical</span>{' '}
            <span className="gradient-text-accent">Implementation Timeline</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
            {
              phase: "Week 1",
              title: "Discovery & Strategy",
              deliverables: ["Process audit report", "Automation roadmap", "ROI projections"],
              color: "blue"
            },
            {
              phase: "Week 2-3",
              title: "Development & Testing",
              deliverables: ["Custom AI solutions", "Integration testing", "Staff training materials"],
              color: "orange"
            },
            {
              phase: "Week 4+",
              title: "Launch & Scale",
              deliverables: ["Live deployment", "Performance monitoring", "Continuous optimization"],
              color: "green"
            }
            ].map((timeline, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                  timeline.color === 'blue' 
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                    : timeline.color === 'orange'
                      ? 'gradient-accent'
                      : 'bg-gradient-to-br from-green-500 to-green-600'
                }`}>
                  {timeline.phase}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{timeline.title}</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  {timeline.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-center gap-2 justify-center">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowDiagram;
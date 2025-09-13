import React from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp, Target, Users } from 'lucide-react';
import CTAButton from './CTAButton';

interface BlogProps {
  onOpenModal: () => void;
}

const Blog: React.FC<BlogProps> = ({ onOpenModal }) => {
  const articles = [
    {
      id: 1,
      title: "How SaaS Companies Increase Sales Velocity by 300% with AI-Powered Revenue Operations Automation",
      excerpt: "Discover the exact automation strategies that leading SaaS companies use to accelerate their sales cycles, improve lead qualification, and create predictable revenue growth.",
      readTime: "12 min read",
      publishDate: "2024-01-15",
      category: "Sales Automation",
      keywords: "sales automation for SaaS, revenue operations consultant, CRM automation specialist",
      targetMarket: "US & Canada",
      icon: <TrendingUp className="w-6 h-6" />,
      content: {
        intro: "In today's competitive SaaS landscape, the difference between thriving and merely surviving often comes down to one crucial factor: the speed and efficiency of your sales process. Companies that have mastered sales automation are seeing remarkable results - with some achieving up to 300% increases in sales velocity.",
        sections: [
          {
            title: "The Sales Velocity Crisis in SaaS",
            content: "Most SaaS companies are losing potential revenue due to manual sales processes that create bottlenecks, missed follow-ups, and inconsistent lead qualification. The average B2B SaaS sales cycle has grown 18% longer over the past five years, while customer acquisition costs continue to rise."
          },
          {
            title: "The Revenue Operations Transformation",
            content: "Leading SaaS companies are implementing comprehensive revenue operations automation that includes intelligent lead scoring, automated nurturing sequences, and predictive analytics for sales forecasting. This approach creates a seamless handoff between marketing and sales while providing unprecedented visibility into the revenue pipeline."
          },
          {
            title: "Key Automation Components for SaaS Success",
            content: "The most successful implementations focus on five core areas: 1) Intelligent lead scoring based on behavioral and demographic data, 2) Automated email sequences that nurture leads through the decision process, 3) CRM automation that eliminates manual data entry, 4) Pipeline management tools that predict deal closure probability, and 5) Customer success automation that drives expansion revenue."
          },
          {
            title: "Real-World Implementation Strategy",
            content: "The key to successful sales automation implementation is starting with your highest-impact areas. Begin with lead scoring and qualification automation, then progress to email nurturing sequences, followed by CRM automation and finally advanced predictive analytics. This staged approach ensures maximum ROI while minimizing disruption to existing processes."
          },
          {
            title: "Measuring Success and ROI",
            content: "The most important metrics to track include sales cycle length reduction, lead-to-opportunity conversion rates, opportunity-to-close conversion rates, and overall sales velocity. Companies implementing comprehensive sales automation typically see 40-60% improvements in these key metrics within 90 days."
          }
        ]
      }
    },
    {
      id: 2,
      title: "The Complete Guide to Marketing Automation for European E-commerce: From Lead Generation to Customer Retention",
      excerpt: "A comprehensive roadmap for European e-commerce businesses to implement marketing automation strategies that increase conversions, reduce cart abandonment, and maximize customer lifetime value.",
      readTime: "15 min read",
      publishDate: "2024-01-20",
      category: "Marketing Automation",
      keywords: "marketing automation consultant Europe, e-commerce growth automation, conversion optimization specialist",
      targetMarket: "Europe",
      icon: <Target className="w-6 h-6" />,
      content: {
        intro: "European e-commerce businesses face unique challenges: diverse markets, varying regulations, and complex customer journeys across multiple touchpoints. However, those who have successfully implemented comprehensive marketing automation strategies are seeing remarkable results.",
        sections: [
          {
            title: "The European E-commerce Landscape",
            content: "The European e-commerce market presents both tremendous opportunities and unique challenges. With GDPR compliance requirements, diverse consumer behaviors across different countries, and varying payment preferences, e-commerce businesses need sophisticated automation strategies that can adapt to these complexities while maintaining compliance and personalization."
          },
          {
            title: "Foundation: Customer Journey Mapping",
            content: "Before implementing any automation, successful European e-commerce businesses start with comprehensive customer journey mapping. This includes understanding the different paths customers take across various European markets, identifying key touchpoints, and mapping out the specific triggers and behaviors that indicate purchase intent or risk of abandonment."
          },
          {
            title: "Advanced Email Marketing Automation",
            content: "Email remains the highest ROI channel for e-commerce, but success requires sophisticated automation. This includes welcome series that adapt based on customer behavior, abandoned cart recovery sequences that use progressive incentives, post-purchase automation that drives reviews and repeat purchases, and win-back campaigns for inactive customers."
          },
          {
            title: "Cross-Channel Automation Strategy",
            content: "The most successful European e-commerce businesses implement automation across multiple channels: email, SMS, social media, and on-site personalization. This creates a cohesive customer experience that adapts to individual preferences while maintaining consistent messaging across all touchpoints."
          },
          {
            title: "GDPR-Compliant Automation",
            content: "European businesses must balance personalization with privacy compliance. This includes implementing proper consent management, data minimization strategies, and transparent automation processes that build trust while delivering relevant experiences. The key is creating value exchanges that make customers willing to share their data."
          }
        ]
      }
    },
    {
      id: 3,
      title: "Professional Services Sales Automation: Transform Your Business Development Process in 90 Days",
      excerpt: "Learn how law firms, accounting practices, and consulting agencies are using intelligent automation to generate more qualified leads, streamline proposal processes, and increase client lifetime value.",
      readTime: "10 min read",
      publishDate: "2024-01-25",
      category: "Professional Services",
      keywords: "professional services sales automation, business development automation consultant, law firm marketing automation",
      targetMarket: "Australia & Canada",
      icon: <Users className="w-6 h-6" />,
      content: {
        intro: "Professional services firms face a unique challenge: they need to balance maintaining professional credibility with implementing modern sales and marketing processes. The firms that have successfully navigated this transition are seeing remarkable growth in both client acquisition and retention.",
        sections: [
          {
            title: "The Professional Services Sales Challenge",
            content: "Traditional professional services firms often struggle with sales and marketing because they've relied on referrals and networking for growth. However, as competition increases and client expectations evolve, firms need more predictable and scalable business development processes while maintaining their professional image and compliance requirements."
          },
          {
            title: "Intelligent Lead Generation for Professional Services",
            content: "The most successful professional services firms implement content-based lead generation that demonstrates expertise while capturing qualified prospects. This includes automated webinar systems, downloadable resources that address specific client challenges, and thought leadership content distribution that builds authority while generating leads."
          },
          {
            title: "Proposal and Engagement Automation",
            content: "One of the highest-impact automation areas for professional services is proposal generation and client onboarding. This includes automated proposal templates that adapt based on service type and client size, engagement letter automation, project kickoff sequences, and client portal access automation."
          },
          {
            title: "Client Success and Retention Automation",
            content: "Professional services firms with high client lifetime value implement sophisticated client success automation. This includes regular check-in scheduling, project milestone notifications, satisfaction surveys, and cross-selling automation that identifies opportunities for additional services based on client behavior and engagement patterns."
          },
          {
            title: "Measuring Professional Services Automation Success",
            content: "Key metrics for professional services automation include lead quality scores, proposal-to-engagement conversion rates, client onboarding time, project completion rates, and client satisfaction scores. The most successful firms see 40-70% improvements in these metrics within 90 days of implementation."
          }
        ]
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Executive</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Business Intelligence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strategic insights from the boardroom: how ambitious leaders are using intelligent systems 
            to create unfair competitive advantages and dominate their markets.
          </p>
        </div>

        {/* Blog Articles Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article, index) => (
            <article key={article.id} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
              {/* Article Header */}
              <div className="p-6 border-b border-gray-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-lg text-blue-400">
                    {article.icon}
                  </div>
                  <div className="text-sm">
                    <div className="text-blue-400 font-medium">{article.category}</div>
                    <div className="text-gray-500">{article.targetMarket}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300 line-clamp-3">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Preview */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Article Preview:</h4>
                  <p className="text-sm text-gray-400 line-clamp-4">
                    {article.content.intro}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Topics:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {article.content.sections.slice(0, 3).map((section, sectionIndex) => (
                      <li key={sectionIndex} className="flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{section.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenModal}
                  className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Get Full Article + Custom Strategy</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Implement These Strategies?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get personalized automation strategies tailored to your business and market. 
            Schedule your free growth assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton onClick={onOpenModal} variant="accent" size="lg">
              Free Growth Assessment
            </CTAButton>
            <CTAButton onClick={onOpenModal} variant="secondary" size="lg">
              Custom Automation Strategy
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
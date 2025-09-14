# Mentis Liberum - AI Business Automation Consultancy Website

A modern, conversion-optimized React website for Mentis Liberum, an AI-powered automation consultancy that delivers smart solutions to free your time, boost ROI, and unlock business growth.

## 🚀 Overview

This is a premium business website built with React, TypeScript, and modern web technologies. It features advanced interactive components, ROI calculators, Calendly integration, and sophisticated animations to drive qualified leads and conversions.

### ✨ Key Features

- **🎯 Conversion-Optimized Design** - Strategic layout and CTAs designed for maximum lead generation
- **⚛️ Modern React Architecture** - TypeScript, component-based, maintainable codebase
- **🧮 Interactive ROI Calculator** - Dynamic calculation tools for prospect engagement
- **📅 Calendly Integration** - Seamless booking flow with automated scheduling
- **🎨 Premium Animations** - Smooth transitions, particle effects, and celebration sequences
- **📱 Fully Responsive** - Mobile-first design optimized for all devices
- **🔗 n8n Webhook Integration** - Automated lead capture and processing
- **🎭 3D Spline Integration** - Interactive robot animation in hero section

## 🏗️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Custom CSS
- **Icons**: Lucide React
- **3D Graphics**: Spline (@splinetool/react-spline)
- **Automation**: n8n webhooks for lead processing
- **Scheduling**: Calendly embedded integration

## 📁 Project Structure

```
FilesMentisWebsiteBest/
├── project/                    # Main React application
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── Blog.tsx      # Blog feed component
│   │   │   ├── CTAButton.tsx # Call-to-action buttons
│   │   │   ├── CalendlyModal.tsx # Scheduling modal
│   │   │   ├── Header.tsx    # Navigation header
│   │   │   ├── InteractiveHero.tsx # Hero section
│   │   │   ├── Modal.tsx     # Generic modal component
│   │   │   ├── Premium3DRobot.tsx # 3D robot integration
│   │   │   ├── ROICalculator.tsx # Interactive calculator
│   │   │   ├── ThankYou.tsx  # Celebration page component
│   │   │   ├── UrgencyElements.tsx # Conversion elements
│   │   │   ├── VisualProof.tsx # Social proof section
│   │   │   └── WorkflowDiagram.tsx # Process visualization
│   │   ├── App.tsx           # Main application component
│   │   ├── main.tsx         # Application entry point
│   │   └── index.css        # Global styles
│   ├── index.html           # HTML template
│   └── package.json         # Project dependencies
├── docs/                    # Documentation
│   ├── DEPLOY.md           # Deployment guide (from static version)
│   ├── DEPLOYMENT.md       # Production deployment guide
│   ├── STATIC_VERSION_README.md # Legacy HTML version docs
│   └── SALVAGED_FROM_MENTIS_WEBSITE.md # Migration documentation
├── assets/                  # Static assets
│   └── brain-icon.svg      # Pixel-art brain logo
├── standingrobot.splinecode # 3D robot animation file
├── package.json            # Root dependencies
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git for version control
- Modern web browser

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd FilesMentisWebsiteBest
   ```

2. **Install dependencies**:
   ```bash
   npm install
   cd project
   npm install
   ```

3. **Start development server**:
   ```bash
   cd project
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173`

### Build for Production

```bash
cd project
npm run build
```

## 🎨 Design System

### Brand Colors
```css
Primary Purple: #6B46C1
Primary Green: #10B981
Brand Gradient: linear-gradient(135deg, #6B46C1 0%, #10B981 100%)
```

### Typography
- **Headlines**: Space Grotesk (geometric, modern)
- **Body Text**: Inter (clean, readable)

### Key Design Elements
- **Pixel-art brain mascot** - Brand identity throughout
- **Gradient backgrounds** - Purple to green brand gradient
- **Smooth animations** - Micro-interactions and transitions
- **Modern glassmorphism** - Backdrop blur effects
- **Premium dark theme** - Professional, high-end aesthetic

## 🔗 Integrations

### n8n Webhook
The website integrates with n8n for automated lead processing:

**Endpoint**: `http://localhost:5678/webhook-test/df296120-86c0-4bce-a8d7-2ea58478d15e`

**Payload Structure**:
```javascript
{
  name: string,
  email: string,
  website: string,
  services: string,
  timeline: string,
  budget: string,
  systemDescription: string,
  source: string,
  timestamp: ISO string
}
```

### Calendly Integration
- Embedded scheduling modal
- Automatic opening after form submission
- Seamless user experience flow

### Spline 3D Integration
- Interactive robot animation in hero section
- Fallback support for reduced motion preferences
- Optimized loading and performance

## 📱 Responsive Design

The website is fully responsive with breakpoints optimized for:
- **Desktop** (1200px+): Full-featured layout
- **Tablet** (768px-1023px): Adapted grid layouts
- **Mobile** (320px-767px): Single-column, touch-optimized

## 🎯 Conversion Optimization

### Lead Generation Strategy
1. **Primary CTA**: "Book Your Consultation" - Direct scheduling
2. **Secondary CTAs**: ROI Calculator, "Explore Use Cases"
3. **Social Proof**: Client testimonials and success metrics
4. **Urgency Elements**: Limited availability messaging
5. **Progressive Disclosure**: Step-by-step information reveal

### User Journey
1. **Landing** → Hero section with value proposition
2. **Engagement** → Interactive elements (ROI calc, 3D animation)
3. **Education** → Use cases, workflow diagrams, blog content
4. **Conversion** → Contact form with instant scheduling
5. **Celebration** → Thank you page with next steps

## 🚀 Deployment Options

### Quick Deployment (Recommended)
1. **Netlify**: Drag & drop the `dist` folder after build
2. **Vercel**: Connect Git repository for automatic deployments
3. **GitHub Pages**: Enable Pages in repository settings

### Advanced Deployment
- **AWS S3 + CloudFront**: Enterprise-grade hosting
- **Firebase Hosting**: Google Cloud integration
- **Custom VPS**: Full control with Nginx/Apache

See `docs/DEPLOY.md` for detailed deployment instructions.

## 📊 Performance

### Optimization Features
- **Code splitting** - Dynamic imports for optimal loading
- **Image optimization** - WebP support with fallbacks
- **Lazy loading** - Components load as needed
- **Bundle analysis** - Webpack bundle analyzer integration
- **Caching strategy** - Service worker for offline support

### Lighthouse Scores (Target)
- Performance: 95+
- Accessibility: 100
- Best Practices: 95+
- SEO: 90+

## 🧪 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

### Code Standards
- **TypeScript**: Strict mode enabled
- **ESLint**: Airbnb configuration
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks for code quality

## 📈 Analytics & Tracking

### Recommended Integrations
- **Google Analytics 4**: User behavior tracking
- **Google Tag Manager**: Event management
- **Hotjar**: User session recordings
- **Facebook Pixel**: Conversion tracking
- **LinkedIn Insight**: B2B lead attribution

## 🔒 Security

### Security Measures
- **Content Security Policy**: XSS protection
- **HTTPS enforcement**: Secure data transmission
- **Input validation**: Form sanitization
- **Rate limiting**: API abuse prevention
- **Environment variables**: Secure configuration

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Maintain component modularity
- Write descriptive commit messages
- Test across multiple devices
- Document complex functionality

## 📄 License

This project is proprietary software for Mentis Liberum. All rights reserved.

## 📞 Support

For technical support or questions:
- **Email**: [your-email@mentisliberum.com]
- **Documentation**: See `docs/` folder
- **Issues**: Create GitHub issue for bugs

## 🗂️ Migration Notes

This repository contains the modern React version of the Mentis Liberum website. The previous static HTML version has been archived with all valuable content salvaged and documented in `docs/SALVAGED_FROM_MENTIS_WEBSITE.md`.

### Key Improvements Over Static Version
- ⚡ **Interactive Components**: ROI calculator, dynamic forms
- 🎨 **Advanced Animations**: React-based state management
- 🔗 **API Integrations**: Calendly, n8n, external services
- 🧩 **Component Architecture**: Reusable, maintainable code
- 📱 **Modern Development**: TypeScript, hot reload, dev tools

---

**Built with ❤️ by the Mentis Liberum team**

*Last updated: September 2025*
# Mentis Liberum Website

A high-converting SaaS website for Mentis Liberum, an AI-powered automation consultancy that delivers smart solutions to free your time, boost ROI, and unlock growth.

## 🎯 Project Overview

This is a complete single-page website designed to convert visitors into qualified leads through strategic design and user flow optimization. The site features a modern SaaS aesthetic with playful pixel-art accents, premium feel, and seamless user experience.

### Design Reference
- **Primary Inspiration**: Buildroom.ai's design language
- **Visual Elements**: Bold typography, playful gradients, smooth animations, modular sections
- **Brand Mascot**: Pixel-art brain integrated throughout the design
- **Color Scheme**: Deep purple to green gradient (#6B46C1 → #10B981)
- **Typography**: Space Grotesk (headlines) + Inter (body text)

## 🚀 Features

### ✨ Core Functionality
- **Lead Capture System**: Modal and inline forms with webhook integration
- **Responsive Design**: Mobile-first approach with seamless cross-device experience
- **Animations & Interactions**: Scroll parallax, hover effects, CTA pulse animations
- **Performance Optimized**: Efficient loading, smooth animations, optimized assets

### 📱 Sections & Content
1. **Hero Section**: Bold headline with animated pixel-brain mascot
2. **About Section**: Company story and founder highlight
3. **Services Grid**: AI Lead Generation, Conversion Optimization, Sales Automation
4. **ROI Proof**: Statistical evidence with animated counters
5. **Demo Section**: Viral Studio demo placeholder with video integration
6. **Blog Feed**: Thought leadership content integration
7. **Lead Capture**: Gradient background with conversion-optimized forms
8. **Footer**: Complete navigation and social links

## 📁 Project Structure

```
mentis-liberum-website/
├── index.html              # Main landing page
├── thank-you.html          # Success page with celebration animation
├── css/
│   └── styles.css          # Complete styling with design system
├── js/
│   └── scripts.js          # All JavaScript functionality
├── assets/
│   └── brain-icon.svg      # Pixel-art brain favicon
├── images/                 # Placeholder for additional images
└── README.md              # This documentation
```

## 🛠 Technical Specifications

### Design System
```css
/* Brand Colors */
--primary-purple: #6B46C1;
--primary-green: #10B981;
--brand-gradient: linear-gradient(135deg, #6B46C1 0%, #10B981 100%);

/* Typography */
--font-primary: 'Space Grotesk', sans-serif;    /* Headlines */
--font-secondary: 'Inter', sans-serif;          /* Body text */

/* Spacing System */
--spacing-4: 1rem;
--spacing-8: 2rem;
--spacing-12: 3rem;
--spacing-16: 4rem;
--spacing-24: 6rem;
```

### Animation System
- **Floating Brain**: 6s ease-in-out infinite with parallax scrolling
- **Scroll Animations**: Intersection Observer for performance
- **Hover Effects**: Transform and color transitions
- **Counter Animations**: Number counting for statistics
- **Pulse Effects**: CTA button emphasis
- **Parallax Effects**: Background movement on scroll

## 📋 Lead Capture Integration

### Webhook Configuration
Both forms submit to: `https://hooks.mentisliberum.com/lead`

### Form Data Structure
```javascript
{
  email: string,           // Required: User's email address
  company: string,         // Required: Company name
  role: string,           // Required: User's role/position
  source: string,         // 'modal_form' or 'waitlist_form'
  timestamp: string       // ISO timestamp
}
```

### Success Flow
1. Form submission → Loading state
2. Successful POST → Redirect to `thank-you.html`
3. Error handling → Show error message, reset form

## 🎨 Customization Guide

### Color Customization
Update CSS variables in `:root` selector:
```css
:root {
  --primary-purple: #YOUR_COLOR;
  --primary-green: #YOUR_COLOR;
  --brand-gradient: linear-gradient(135deg, #COLOR1 0%, #COLOR2 100%);
}
```

### Content Updates
1. **Hero Section**: Update headline and subheadline in HTML
2. **Services**: Modify service cards with new content and icons
3. **Stats**: Change ROI numbers in the statistics section
4. **About**: Update founder information and company story

### Demo Video Integration
Replace the placeholder in `index.html`:
```html
<!-- Replace this placeholder -->
<div class="demo-placeholder-content">
  <!-- Current placeholder content -->
</div>

<!-- With actual video embed -->
<iframe 
  src="YOUR_VIDEO_URL" 
  frameborder="0" 
  allowfullscreen
  style="width: 100%; height: 100%; border-radius: var(--radius-2xl);">
</iframe>
```

### Blog Feed Integration
The `initBlogFeed()` function in `scripts.js` is ready for API integration:
```javascript
// Replace placeholder with actual API call
async function initBlogFeed() {
  try {
    const response = await fetch('YOUR_BLOG_API_ENDPOINT');
    const posts = await response.json();
    renderBlogPosts(posts);
  } catch (error) {
    console.error('Blog loading error:', error);
  }
}
```

## 📱 Responsive Breakpoints

```css
/* Desktop First */
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px)  { /* Mobile */ }
@media (max-width: 480px)  { /* Small Mobile */ }
```

### Mobile Optimizations
- Collapsible navigation menu
- Stacked layouts for hero and demo sections
- Reduced spacing and font sizes
- Touch-friendly button sizes
- Optimized animations for mobile performance

## 🔧 Setup & Deployment

### Local Development
1. Clone/download the project files
2. Open `index.html` in a modern web browser
3. For development server: Use Live Server extension in VS Code or similar

### Production Deployment
#### Framer
1. Create new Framer project
2. Import HTML structure into Framer components
3. Copy CSS styles to Framer styling system
4. Add JavaScript as custom code components

#### Webflow
1. Create new Webflow project
2. Rebuild structure using Webflow designer
3. Copy CSS custom properties to Webflow custom code
4. Implement JavaScript in page settings

#### Static Hosting (Netlify, Vercel, etc.)
1. Upload all files maintaining folder structure
2. Ensure webhook endpoint is accessible
3. Test form submissions thoroughly
4. Configure custom domain and SSL

### Required External Resources
- Google Fonts (Space Grotesk & Inter)
- Modern browser with JavaScript enabled
- HTTPS for webhook form submission

## 🧪 Testing Checklist

### Functionality Tests
- [ ] Modal opens and closes properly
- [ ] Forms submit successfully to webhook
- [ ] Thank you page displays with animations
- [ ] Navigation scrolls to correct sections
- [ ] Mobile menu works on small screens

### Performance Tests
- [ ] Page loads quickly (< 3s)
- [ ] Animations are smooth on all devices
- [ ] No console errors in browser dev tools
- [ ] Images and assets load properly

### Cross-Browser Testing
- [ ] Chrome/Edge (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

## 🎭 Animation Details

### Hero Brain Animation
```css
.floating-brain {
  animation: float 6s ease-in-out infinite;
  filter: drop-shadow(0 20px 40px rgba(107, 70, 193, 0.2));
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

### Scroll Parallax
The floating brain has enhanced parallax movement based on scroll position with performance optimization using `requestAnimationFrame`.

### Counter Animation
Statistics animate from 0 to target value with smooth counting effect and proper formatting preservation.

## 📊 Conversion Optimization Features

### Lead Capture Strategy
1. **Dual CTAs**: "Book Your Call" (modal) + "Join Waitlist" (inline)
2. **Strategic Placement**: Hero, navigation, and dedicated section
3. **Urgency Elements**: Pulsing animations, contrasting colors
4. **Social Proof**: ROI statistics and founder credibility

### User Experience Enhancements
- Smooth scrolling between sections
- Loading states for form submissions
- Error handling with user-friendly messages
- Keyboard navigation support
- Screen reader accessibility considerations

## 📞 Support & Maintenance

### Common Issues
1. **Form not submitting**: Check webhook URL and CORS settings
2. **Animations not smooth**: Verify browser support for CSS animations
3. **Mobile layout issues**: Check responsive CSS media queries
4. **Font loading**: Ensure Google Fonts are loading properly

### Performance Monitoring
- Monitor Core Web Vitals (LCP, FID, CLS)
- Test on various devices and network conditions
- Use browser dev tools for performance analysis

## 🚀 Future Enhancements

### Planned Features
- A/B testing for headline variations
- Advanced analytics integration
- Blog content management system
- Multi-language support
- Enhanced accessibility features

### Scalability Considerations
- CDN integration for faster loading
- Image optimization and lazy loading
- Progressive Web App (PWA) features
- Advanced form analytics and conversion tracking

---

**Contact Information:**
- Website: [Mentis Liberum](https://mentisliberum.com)
- Founder: Samuel Rencken
- Tagline: "Your Freedom of Mind Awaits"

Built with modern web standards, optimized for conversions, and designed for scale.

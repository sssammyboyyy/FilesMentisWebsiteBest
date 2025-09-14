import React, { useEffect } from 'react';

interface ThankYouProps {
  isVisible: boolean;
  onClose: () => void;
}

const ThankYou: React.FC<ThankYouProps> = ({ isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      // Create confetti animation
      const createConfetti = () => {
        const confettiContainer = document.getElementById('confetti-container');
        if (!confettiContainer) return;

        for (let i = 0; i < 50; i++) {
          const confetti = document.createElement('div');
          confetti.className = 'confetti';
          confetti.style.left = Math.random() * 100 + '%';
          confetti.style.animationDelay = Math.random() * 3 + 's';
          confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
          confettiContainer.appendChild(confetti);
          
          // Remove confetti after animation
          setTimeout(() => {
            if (confetti.parentNode) {
              confetti.parentNode.removeChild(confetti);
            }
          }, 5000);
        }
      };

      // Create floating particles
      const createParticles = () => {
        const particlesContainer = document.getElementById('particles-container');
        if (!particlesContainer) return;

        for (let i = 0; i < 20; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          particle.style.left = Math.random() * 100 + '%';
          particle.style.animationDelay = Math.random() * 6 + 's';
          particle.style.setProperty('--random-x', (Math.random() - 0.5) * 100 + 'px');
          particlesContainer.appendChild(particle);
          
          // Remove particle after animation
          setTimeout(() => {
            if (particle.parentNode) {
              particle.parentNode.removeChild(particle);
            }
          }, 8000);
        }
      };

      createConfetti();
      createParticles();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 celebration-page">
      {/* Floating Particles */}
      <div className="floating-particles" id="particles-container"></div>
      
      {/* Confetti */}
      <div className="confetti-container" id="confetti-container"></div>
      
      <div className="celebration-content">
        {/* Animated Pixel Brain */}
        <div className="celebration-brain">
          <svg className="pixel-brain" width="150" height="150" viewBox="0 0 150 150">
            <rect x="37" y="19" width="76" height="19" fill="url(#celebrationGradient1)" className="brain-part">
              <animate attributeName="fill" values="url(#celebrationGradient1);url(#celebrationGradient2);url(#celebrationGradient1)" dur="2s" repeatCount="indefinite"/>
            </rect>
            <rect x="28" y="38" width="94" height="19" fill="url(#celebrationGradient2)" className="brain-part">
              <animate attributeName="fill" values="url(#celebrationGradient2);url(#celebrationGradient3);url(#celebrationGradient2)" dur="2s" repeatCount="indefinite"/>
            </rect>
            <rect x="19" y="57" width="112" height="38" fill="url(#celebrationGradient3)" className="brain-part">
              <animate attributeName="fill" values="url(#celebrationGradient3);url(#celebrationGradient1);url(#celebrationGradient3)" dur="2s" repeatCount="indefinite"/>
            </rect>
            <rect x="28" y="95" width="94" height="19" fill="url(#celebrationGradient1)" className="brain-part">
              <animate attributeName="fill" values="url(#celebrationGradient1);url(#celebrationGradient3);url(#celebrationGradient1)" dur="2s" repeatCount="indefinite"/>
            </rect>
            <rect x="37" y="114" width="76" height="19" fill="url(#celebrationGradient2)" className="brain-part">
              <animate attributeName="fill" values="url(#celebrationGradient2);url(#celebrationGradient1);url(#celebrationGradient2)" dur="2s" repeatCount="indefinite"/>
            </rect>
            
            {/* Brain details */}
            <rect x="44" y="63" width="10" height="10" fill="#fff" opacity="0.4"/>
            <rect x="96" y="69" width="10" height="10" fill="#fff" opacity="0.4"/>
            
            <defs>
              <linearGradient id="celebrationGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "#FFFFFF"}}/>
                <stop offset="100%" style={{stopColor: "#10B981"}}/>
              </linearGradient>
              <linearGradient id="celebrationGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "#10B981"}}/>
                <stop offset="100%" style={{stopColor: "#6B46C1"}}/>
              </linearGradient>
              <linearGradient id="celebrationGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "#6B46C1"}}/>
                <stop offset="100%" style={{stopColor: "#FFFFFF"}}/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">
          🎉 Welcome to Your Future! 🎉
        </h1>
        
        <p className="text-xl mb-8 opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Your consultation request has been submitted successfully!
        </p>
        
        <div className="text-lg mb-10 opacity-80 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="mb-4">
            You're now part of an exclusive community of forward-thinking business leaders who are transforming their operations with AI automation.
          </p>
          <p className="mb-4">
            <strong>What happens next:</strong>
          </p>
          <ul className="text-left mt-4 space-y-2 max-w-md mx-auto">
            <li>✅ We'll review your automation needs within 24 hours</li>
            <li>✅ You'll receive a personalized strategy overview</li>
            <li>✅ We'll schedule your consultation at your convenience</li>
          </ul>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={onClose}
            className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-white bg-opacity-20 border-2 border-white border-opacity-30 text-white backdrop-blur-sm hover:bg-opacity-30 hover:border-opacity-50 hover:-translate-y-1"
          >
            Back to Homepage
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .celebration-page {
          background: linear-gradient(135deg, #6B46C1 0%, #10B981 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        
        .celebration-content {
          text-align: center;
          color: white;
          z-index: 10;
          max-width: 600px;
          padding: 2rem;
        }
        
        .celebration-brain {
          width: 150px;
          height: 150px;
          margin: 0 auto 2rem;
          animation: celebrationBounce 1s ease-out infinite alternate,
                     celebrationGlow 2s ease-in-out infinite alternate;
          filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.5));
        }
        
        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          background: #fff;
          animation: confettiFall var(--fall-duration, 3s) linear infinite;
        }
        
        .confetti:nth-child(odd) {
          background: #10B981;
        }
        
        .confetti:nth-child(even) {
          background: #6B46C1;
        }
        
        .floating-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: floatUp 6s linear infinite;
        }
        
        @keyframes celebrationBounce {
          0% { transform: scale(1) rotate(0deg); }
          100% { transform: scale(1.1) rotate(5deg); }
        }
        
        @keyframes celebrationGlow {
          0% { filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3)); }
          100% { filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.7)); }
        }
        
        @keyframes confettiFall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-10vh) translateX(var(--random-x, 0));
            opacity: 0;
          }
        }
        
        @media (max-width: 768px) {
          .celebration-brain {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </div>
  );
};

export default ThankYou;
import { useState } from 'react';
import { ArrowRight, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';

const topicLinks = [
  'Systems Thinking',
  'Risk Management',
  'Strategic Leadership',
  'Disaster Resilience',
  'AI Innovation',
  'Compliance',
];

const resourceLinks = [
  { label: 'Case Studies', href: 'https;//asilvainnovations.com/case-studies' },
  { label: 'Whitepapers', href: 'https;//asilvainnovations.com/white-papers' },
  { label: 'DDRiVE-M', href: 'https;//asilvainnovations.com/ddrive-m' },
  { label: 'Smart Flood Detection', href: 'https;//asilvainnovations.com/smart-flood-detection' },
  { label: 'Strat Planner Pro', href: 'https;//asilvainnovations.com/strat-planner-pro' },
  { label: 'Real-Time Leadership', href: 'https;//asilvainnovations.com/rtl' },
];

const companyLinks = [
  { label: 'About Us', href: 'https;//asilvainnovations.com/about' },
  { label: 'Our Solutions', href: 'https;//asilvainnovations.com/solutions' },
  { label: 'AI Solutions', href: 'https;//asilvainnovations.com/ai-solutions' },
  { label: 'Pricing Plans', href: 'https;//asilvainnovations.com/pricing-plans' },
  { label: 'Contact Us', href: 'https;//asilvainnovations.com/contact' },
  { label: 'Partnerships', href: 'https;//asilvainnovations.com/patnerships' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: 'https;//asilvainnovations.com/privacy-policy' },
  { label: 'Terms of Service', href: 'https;//asilvainnovations.com/terms' },
  { label: 'Cookie Policy', href: 'https;//asilvainnovations.com/cookies-policy' },
  { label: 'Accessibility Policy', href: 'https;//asilvainnovations.com/accessibility' },
  { label: 'AI Ethics Framework', href: 'https;//asilvainnovations.com/ai-ethics-and-policy-framework' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative w-full" style={{ background: '#050B14' }}>
      {/* Top Border */}
      <div className="horizontal-rule w-full" />

      <div className="px-6 lg:px-10 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2">
              <a href="#" className="inline-flex items-center gap-3 mb-6">
                <img 
                  src="https://appimize.app/assets/apps/user_1097/images/2c7d825bf937_232_1097.png" 
                  alt="ASilva Innovations"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-2xl font-semibold text-white tracking-tight">
                  ASilva Innovations
                </span>
              </a>
              <p className="text-[#A9B3C7] text-sm leading-relaxed mb-6 max-w-sm">
                Transforming systems. Empowering resilience. Building resilient
                communities through ethical AI and human-centered design since
                2020.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.asilvainnovations.com' },
                  { icon: <Twitter className="w-4 h-4" />, href: 'https://twitter.asilvainnovations.com' },
                  { icon: <Facebook className="w-4 h-4" />, href: 'https://facebook.asilvainnovations.com' },
                  { icon: <Youtube className="w-4 h-4" />, href: 'https://youtube.asilvainnovations.com' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-9 h-9 rounded-lg bg-[rgba(111,207,255,0.1)] flex items-center justify-center text-[#A9B3C7] hover:bg-[rgba(111,207,255,0.2)] hover:text-white transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Topics */}
            <div>
              <h4 className="text-white font-medium text-sm mb-4">Topics</h4>
              <ul className="space-y-2">
                {topicLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#A9B3C7] hover:text-[#6FCFFF] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-medium text-sm mb-4">Resources</h4>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#A9B3C7] hover:text-[#6FCFFF] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-medium text-sm mb-4">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#A9B3C7] hover:text-[#6FCFFF] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="glass-panel p-6 lg:p-8 mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h4 className="text-white font-medium mb-1">
                  Join 10,000+ leaders transforming their organizations
                </h4>
                <p className="text-sm text-[#A9B3C7]">
                  Get weekly insights on systems thinking, risk management, and strategic leadership.
                </p>
              </div>
              <form
                onSubmit={handleSubscribe}
                className="flex gap-3 w-full lg:w-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="form-input flex-1 lg:w-64"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap flex items-center gap-2"
                >
                  {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pt-8 border-t border-[rgba(111,207,255,0.1)]">
            {/* Copyright */}
            <div className="text-sm text-[#A9B3C7]">
              © 2026 ASilva Innovations. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 lg:gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-[#A9B3C7] hover:text-[#6FCFFF] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

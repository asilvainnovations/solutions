import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar, Lightbulb, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  'Philippine-based team with deep LGU/NGO experience',
  '98% client retention rate since 2020',
  'Compliance with Philippine DRRM Act (RA 10121)',
  'Transparent pricing with no hidden fees',
];

const inquiryTypes = [
  'DDRiVE-M Implementation',
  'Strategic Planner Pro Integration',
  'Real-Time Leadership Deployment',
  'Custom AI Solution',
  'Partnership Inquiry',
];

export default function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left content animation
      gsap.fromTo(
        leftRef.current,
        { x: '-6vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Form panel animation
      gsap.fromTo(
        formRef.current,
        { x: '6vw', opacity: 0, rotateY: 4 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        inquiryType: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 lg:py-32 w-full"
      style={{ background: '#0B1628' }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(111,207,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(111,207,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <div ref={leftRef}>
              <span className="eyebrow inline-block mb-4">GET STARTED</span>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Start your resilience journey
              </h2>
              <p className="text-lg text-[#A9B3C7] leading-relaxed mb-10">
                Join 50+ forward-thinking organizations across Southeast Asia.
                Let's build your custom solution.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-10">
                <div className="glass-panel p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(111,207,255,0.15)] flex items-center justify-center text-[#6FCFFF] flex-shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">
                      Schedule a consultation
                    </h4>
                    <p className="text-sm text-[#A9B3C7]">
                      Free 60-minute strategy session with our resilience experts
                    </p>
                  </div>
                </div>

                <div className="glass-panel p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(111,207,255,0.15)] flex items-center justify-center text-[#6FCFFF] flex-shrink-0">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">
                      Custom solution design
                    </h4>
                    <p className="text-sm text-[#A9B3C7]">
                      Tailored implementation roadmap for your organization's unique challenges
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Partner */}
              <div>
                <h4 className="text-white font-medium mb-4">Why partner with us?</h4>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm text-[#A9B3C7]"
                    >
                      <CheckCircle className="w-4 h-4 text-[#6FCFFF] flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="mt-10 pt-6 border-t border-[rgba(111,207,255,0.15)]">
                <div className="flex flex-wrap gap-6">
                  <a
                    href="mailto:info@asilvainnovations.com"
                    className="flex items-center gap-2 text-sm text-[#A9B3C7] hover:text-[#6FCFFF] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    info@asilvainnovations.com
                  </a>
                  <a
                    href="tel:+639178555134"
                    className="flex items-center gap-2 text-sm text-[#A9B3C7] hover:text-[#6FCFFF] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +63 (917) 855-5134
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#A9B3C7] mt-3">
                  <MapPin className="w-4 h-4" />
                  Quezon City, Philippines
                </div>
              </div>
            </div>

            {/* Form Panel */}
            <div
              ref={formRef}
              className="glass-card p-8 lg:p-10"
              style={{ perspective: '1000px' }}
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[rgba(111,207,255,0.15)] flex items-center justify-center text-[#6FCFFF] mx-auto mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Thank you!
                  </h3>
                  <p className="text-[#A9B3C7]">
                    We've received your inquiry and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Request a consultation
                  </h3>

                  <div>
                    <label className="block text-sm text-[#A9B3C7] mb-2">
                      Full Name <span className="text-[#FF6A3D]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#A9B3C7] mb-2">
                      Email Address <span className="text-[#FF6A3D]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="john@organization.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#A9B3C7] mb-2">
                      Organization <span className="text-[#FF6A3D]">*</span>
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Your organization name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#A9B3C7] mb-2">
                      Inquiry Type <span className="text-[#FF6A3D]">*</span>
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className="form-input"
                    >
                      <option value="">Select an option</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-[#A9B3C7] mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="form-input resize-none"
                      placeholder="Tell us about your specific needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center flex items-center gap-2 mt-6"
                  >
                    Request Consultation
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-[#A9B3C7] text-center mt-4">
                    We respect your privacy. Your information is secure and will only be used to contact you.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

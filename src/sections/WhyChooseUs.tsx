import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, BarChart3, Shield, Sparkles, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const valueCards = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Rapid Deployment',
    description:
      'Up and running in under 30 days with minimal infrastructure. Our proven implementation methodology ensures quick time-to-value.',
    features: ['Minimal infrastructure required', 'Comprehensive training included', 'Dedicated onboarding support'],
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Real-Time Intelligence',
    description:
      'Live vulnerability mapping, automated alerts, and predictive analytics for data-driven decision making.',
    features: ['24/7 monitoring capabilities', 'Automated alerts and notifications', 'Historical data analysis'],
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Compliance Ready',
    description:
      'Built for Philippine DRRM Act (RA 10121) and ISO 31000 standards. Stay compliant with automated reporting.',
    features: ['Automated reporting', 'Audit trail functionality', 'Regular compliance updates'],
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Continuous Innovation',
    description:
      'Quarterly releases with the latest AI models and disaster response best practices. Free platform upgrades.',
    features: ['Quarterly feature releases', 'Community-driven improvements', 'Free platform upgrades'],
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Line animation
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards stagger animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.value-card');
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0, rotateX: 6 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 w-full"
      style={{
        background: 'linear-gradient(180deg, #050B14 0%, #0B1628 50%, #050B14 100%)',
      }}
    >
      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(111,207,255,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 px-6 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow inline-block mb-4">WHY ASILVA</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Why organizations choose us
          </h2>
          <p className="text-lg text-[#A9B3C7] leading-relaxed">
            We deliver enterprise-grade resilience tools without enterprise
            complexity—fast deployment, real-time intelligence, and compliance
            built in.
          </p>
          {/* Decorative Line */}
          <div
            ref={lineRef}
            className="mt-6 mx-auto w-24 h-[2px] bg-gradient-to-r from-transparent via-[#6FCFFF] to-transparent"
            style={{ transformOrigin: 'center' }}
          />
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          style={{ perspective: '1000px' }}
        >
          {valueCards.map((card, index) => (
            <div
              key={index}
              className="value-card glass-card p-8 group cursor-pointer"
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[rgba(111,207,255,0.15)] flex items-center justify-center text-[#6FCFFF] mb-6 group-hover:bg-[rgba(111,207,255,0.25)] transition-colors duration-300">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[#A9B3C7] text-sm leading-relaxed mb-6">
                {card.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {card.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-xs text-[#A9B3C7]"
                  >
                    <svg
                      className="w-4 h-4 text-[#6FCFFF] flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#6FCFFF] hover:text-white transition-colors font-medium"
          >
            See full solution portfolio
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

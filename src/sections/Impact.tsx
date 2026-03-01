import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Building2, Clock, TrendingUp, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: <Building2 className="w-5 h-5" />,
    value: 12,
    suffix: '+',
    label: 'Philippine LGUs deployed',
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    value: 37,
    suffix: '%',
    label: 'Faster field deployment',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    value: 6,
    suffix: ' months',
    label: 'Typical ROI window',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    value: 24,
    suffix: '/7',
    label: 'Monitoring coverage',
  },
];

const testimonials = [
  {
    quote:
      "ASilva Innovations' approach in updating our Risk-informed Comprehensive Development Plan has truly been a game-changer giving us a clear and practical framework that integrates disaster risk reduction into our local development priorities.",
    author: 'Arnold Pica',
    role: 'Municipal Disaster Risk Reduction and Management Officer (MDRRMO)',
    organization: 'Salcedo, Eastern Samar',
    date: 'December 2025',
  },
  {
    quote:
      'ASilva Innovations customized Integrated Risk and Resilience Management (IRRM) has been transformative for Bangsamoro communities and civil society organizations.',
    author: 'Rhadzni Taalim',
    role: 'Executive Director',
    organization: 'Bangsamoro Development Agency (BDA), Cotabato City',
    date: 'January 2026',
  },
];

function AnimatedStat({
  value,
  suffix,
  isVisible,
}: {
  value: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setDisplayValue(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value]);

  return (
    <span className="stat-number">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Impact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats animation
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 75%',
        onEnter: () => setStatsVisible(true),
      });

      const statItems = statsRef.current?.querySelectorAll('.stat-item');
      if (statItems && statItems.length > 0) {
        gsap.fromTo(
          statItems,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Testimonials animation
      const testimonialCards = testimonialsRef.current?.querySelectorAll('.testimonial-card');
      if (testimonialCards && testimonialCards.length > 0) {
        gsap.fromTo(
          testimonialCards,
          { y: 50, opacity: 0, rotateZ: -1 },
          {
            y: 0,
            opacity: 1,
            rotateZ: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: testimonialsRef.current,
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
      id="impact"
      className="relative py-24 lg:py-32 w-full"
      style={{ background: '#050B14' }}
    >
      {/* World Map Outline (subtle) */}
      <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 1000 500"
          className="w-full max-w-6xl"
          fill="none"
          stroke="#6FCFFF"
          strokeWidth="0.5"
        >
          <path d="M150,200 Q200,150 250,200 T350,200 T450,180 T550,200 T650,190 T750,200 T850,180" />
          <path d="M100,250 Q200,220 300,250 T500,240 T700,250 T900,230" />
          <path d="M180,300 Q280,280 380,300 T580,290 T780,300" />
        </svg>
      </div>

      <div className="relative z-10 px-6 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow inline-block mb-4">OUR IMPACT</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Real impact in vulnerable communities
          </h2>
          <p className="text-lg text-[#A9B3C7] leading-relaxed">
            We measure success by lives protected, resources optimized, and
            communities empowered—not just software deployed.
          </p>
        </div>

        {/* Stats Row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item glass-panel p-6 text-center group hover:border-[rgba(111,207,255,0.5)] transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgba(111,207,255,0.15)] flex items-center justify-center text-[#6FCFFF] mx-auto mb-4 group-hover:bg-[rgba(111,207,255,0.25)] transition-colors">
                {stat.icon}
              </div>
              <AnimatedStat
                value={stat.value}
                suffix={stat.suffix}
                isVisible={statsVisible}
              />
              <div className="text-sm text-[#A9B3C7] mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div
          ref={testimonialsRef}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card glass-card p-8 relative"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#FF6A3D] fill-[#FF6A3D]"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[#A9B3C7] text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[rgba(111,207,255,0.2)] flex items-center justify-center text-[#6FCFFF] font-semibold text-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-[#A9B3C7] text-xs">
                    {testimonial.role}
                  </div>
                  <div className="text-[#6FCFFF] text-xs">
                    {testimonial.organization}
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute top-6 right-6 flex items-center gap-1 text-xs text-[#A9B3C7]">
                <svg
                  className="w-3 h-3 text-[#6FCFFF]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Verified
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

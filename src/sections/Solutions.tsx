import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Activity, BarChart3, Users, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
  rightLabel: string;
  rightStat: string;
  image: string;
  icon: React.ReactNode;
}

const solutions: Solution[] = [
  {
    id: 'ddrive-m',
    title: 'DDRiVE-M Platform',
    subtitle: 'Flagship Enterprise Risk Management',
    description:
      'Real-time vulnerability mapping, compliance tracking, and predictive analytics for LGUs and NGOs.',
    features: [
      'Multi-hazard detection & multi-modal risk assessment',
      'ISO 31000-compliant risk management with AI services',
      'UNDRR resilience scorecard integration',
      'Customizable AI plan generators & dashboards',
    ],
    cta: 'Explore Solution',
    rightLabel: 'PREDICTIVE INTELLIGENCE',
    rightStat: 'Sub-hour alert delivery',
    image: '/images/product-ops-01.jpg',
    icon: <Activity className="w-5 h-5" />,
  },
  {
    id: 'strat-planner',
    title: 'Strat Planner Pro',
    subtitle: 'AI-Powered Strategic Planning',
    description:
      'Transform complex data into actionable roadmaps with automated analysis and performance tracking.',
    features: [
      'Systems-driven context analysis',
      'AI-supported strategic options generation',
      'Structured strategy mapping with balanced scorecard',
      'Automated M&E dashboards with real-time updates',
    ],
    cta: 'Explore Solution',
    rightLabel: 'SCENARIO MODELING',
    rightStat: 'Plan versions in minutes',
    image: '/images/planning-table-01.jpg',
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    id: 'rtl',
    title: 'Real-Time Leadership',
    subtitle: 'Systems-Based Leadership Framework',
    description:
      'Navigate high-risk scenarios with clarity, confidence, and cross-agency collaboration.',
    features: [
      'Mastery-of-presence tools',
      'Options generation toolkit',
      'Validating choices under uncertainty',
      'Cross-agency collaboration protocols',
    ],
    cta: 'Explore Solution',
    rightLabel: 'DECISION VELOCITY',
    rightStat: 'Faster alignment cycles',
    image: '/images/team-huddle-01.jpg',
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 'ai-suite',
    title: 'AI & Automation Suite',
    subtitle: 'Specialized AI for Public Sector',
    description:
      'Flood prediction, damage assessment, and intelligent resource routing powered by machine learning.',
    features: [
      'SPARC — Smart Predictive AI Resilience Calculator',
      'AI chatbots — context-aware assistants',
      'Customized DRRM integration',
      'AI-powered online courses (DRR-CCA + RTL)',
    ],
    cta: 'Explore Solution',
    rightLabel: 'MODEL ACCURACY',
    rightStat: 'Continuous learning pipeline',
    image: '/images/dashboard-monitors-01.jpg',
    icon: <Cpu className="w-5 h-5" />,
  },
];

function SolutionSection({ solution, index }: { solution: Solution; index: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bulletsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.7,
        },
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(
        bgRef.current,
        { scale: 1.08, opacity: 0.6 },
        { scale: 1, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        leftPanelRef.current,
        { x: '-60vw', opacity: 0, rotateY: -10 },
        { x: 0, opacity: 1, rotateY: 0, ease: 'power2.out' },
        0
      );

      scrollTl.fromTo(
        rightCardRef.current,
        { x: '60vw', opacity: 0, rotateY: 10 },
        { x: 0, opacity: 1, rotateY: 0, ease: 'power2.out' },
        0
      );

      scrollTl.fromTo(
        ruleRef.current,
        { scaleY: 0 },
        { scaleY: 1, ease: 'power2.out' },
        0.1
      );

      // Headline word reveal
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        scrollTl.fromTo(
          words,
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.02, ease: 'power2.out' },
          0.05
        );
      }

      // Bullets stagger
      if (bulletsRef.current) {
        const bullets = bulletsRef.current.querySelectorAll('li');
        scrollTl.fromTo(
          bullets,
          { x: '-6vw', opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.03, ease: 'power2.out' },
          0.1
        );
      }

      // EXIT (70% - 100%)
      scrollTl.fromTo(
        leftPanelRef.current,
        { x: 0, opacity: 1 },
        { x: '-40vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        rightCardRef.current,
        { x: 0, opacity: 1 },
        { x: '40vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        bgRef.current,
        { y: 0, scale: 1 },
        { y: '-10vh', scale: 1.05, ease: 'none' },
        0.7
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const titleWords = solution.title.split(' ');

  return (
    <section
      ref={sectionRef}
      id={solution.id}
      className="relative h-screen w-full overflow-hidden"
      style={{ zIndex: index + 10 }}
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ willChange: 'transform, opacity' }}
      >
        <img
          src={solution.image}
          alt={solution.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-[rgba(5,11,20,0.4)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-6 lg:px-[6vw]">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-0 items-center">
            {/* Left Panel */}
            <div className="lg:col-span-6">
              <div
                ref={leftPanelRef}
                className="glass-card p-6 lg:p-10 max-w-xl"
                style={{
                  willChange: 'transform, opacity',
                  perspective: '1000px',
                }}
              >
                {/* Icon & Label */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(111,207,255,0.15)] flex items-center justify-center text-[#6FCFFF]">
                    {solution.icon}
                  </div>
                  <span className="eyebrow text-[10px]">{solution.subtitle}</span>
                </div>

                {/* Headline */}
                <h2
                  ref={headlineRef}
                  className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight"
                >
                  {titleWords.map((word, i) => (
                    <span key={i} className="word inline-block mr-[0.25em]">
                      {word}
                    </span>
                  ))}
                </h2>

                {/* Description */}
                <p className="text-[#A9B3C7] text-base lg:text-lg mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <ul ref={bulletsRef} className="space-y-3 mb-8">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="feature-bullet text-sm text-[#A9B3C7]">
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  {solution.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Vertical Rule */}
            <div className="hidden lg:flex lg:col-span-1 justify-center">
              <div
                ref={ruleRef}
                className="vertical-rule h-[64vh]"
                style={{
                  willChange: 'transform',
                  transformOrigin: 'top',
                }}
              />
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5 flex justify-end">
              <div
                ref={rightCardRef}
                className="glass-panel w-full max-w-sm p-6 lg:p-8"
                style={{
                  willChange: 'transform, opacity',
                  perspective: '1000px',
                }}
              >
                {/* Label */}
                <span className="eyebrow text-[10px] block mb-6">
                  {solution.rightLabel}
                </span>

                {/* Stat */}
                <div className="mb-8">
                  <div className="text-3xl lg:text-4xl font-bold text-[#6FCFFF] mb-2">
                    {solution.rightStat}
                  </div>
                  <div className="h-[1px] w-full bg-gradient-to-r from-[#6FCFFF] to-transparent" />
                </div>

                {/* Signal Icon */}
                <div className="flex items-center gap-4">
                  <div className="flex items-end gap-1">
                    <div className="w-1 h-3 bg-[#6FCFFF] rounded-full" />
                    <div className="w-1 h-5 bg-[#6FCFFF] rounded-full" />
                    <div className="w-1 h-7 bg-[#6FCFFF] rounded-full" />
                    <div className="w-1 h-4 bg-[#6FCFFF] opacity-40 rounded-full" />
                  </div>
                  <span className="text-xs text-[#A9B3C7]">Real-time monitoring active</span>
                </div>

                {/* Decorative */}
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FF6A3D] animate-pulse" />
                    <span className="text-xs text-[#A9B3C7]">Live</span>
                  </div>
                  <div className="text-xs text-[#6FCFFF] font-mono">v2.4.1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Solutions() {
  return (
    <div id="solutions">
      {solutions.map((solution, index) => (
        <SolutionSection key={solution.id} solution={solution} index={index} />
      ))}
    </div>
  );
}

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronRight, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const glassCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial load animation timeline
      const loadTl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Background scale animation
      loadTl.fromTo(
        bgRef.current,
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2 }
      );

      // Eyebrow fade in
      loadTl.fromTo(
        eyebrowRef.current,
        { y: -12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.6'
      );

      // Headline word-by-word reveal
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        loadTl.fromTo(
          words,
          { y: 26, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.06 },
          '-=0.3'
        );
      }

      // Subheadline
      loadTl.fromTo(
        subheadlineRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      );

      // CTA buttons
      loadTl.fromTo(
        ctaRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.3'
      );

      // Trust bar
      loadTl.fromTo(
        trustRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.2'
      );

      // Glass card
      loadTl.fromTo(
        glassCardRef.current,
        { x: '10vw', opacity: 0, rotateY: 8 },
        { x: 0, opacity: 1, rotateY: 0, duration: 0.9 },
        '-=0.8'
      );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          scrub: 0.6,
          pin: false,
        },
      });

      // Exit animations (70% - 100%)
      scrollTl.fromTo(
        contentRef.current,
        { y: 0, opacity: 1 },
        { y: '-18vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        bgRef.current,
        { scale: 1, y: 0 },
        { scale: 1.06, y: '-6vh' },
        0.7
      );

      scrollTl.fromTo(
        glassCardRef.current,
        { x: 0, opacity: 1 },
        { x: '12vw', opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split headline into words
  const headlineText = 'Actionable Intelligence for Life-Saving Decisions';
  const words = headlineText.split(' ');

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ willChange: 'transform, opacity' }}
      >
        <img
          src="/images/hero-control-room.jpg"
          alt="Emergency Operations Center"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-gradient-bottom" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-6 lg:px-[7vw] py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div ref={contentRef} className="max-w-2xl">
              {/* Eyebrow */}
              <span
                ref={eyebrowRef}
                className="eyebrow inline-block mb-6"
                style={{ willChange: 'transform, opacity' }}
              >
                ASILVA INNOVATIONS
              </span>

              {/* Headline */}
              <h1
                ref={headlineRef}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-6"
                style={{ willChange: 'transform, opacity' }}
              >
                {words.map((word, index) => (
                  <span
                    key={index}
                    className="word inline-block mr-[0.3em]"
                    style={{ willChange: 'transform, opacity' }}
                  >
                    {word}
                  </span>
                ))}
              </h1>

              {/* Decorative Line */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#6FCFFF] shadow-[0_0_10px_rgba(111,207,255,0.6)]" />
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#6FCFFF] to-transparent" />
              </div>

              {/* Subheadline */}
              <p
                ref={subheadlineRef}
                className="text-lg lg:text-xl text-[#A9B3C7] leading-relaxed mb-8 max-w-xl"
                style={{ willChange: 'transform, opacity' }}
              >
                Enterprise-grade risk intelligence platforms purpose-built for
                Local Government Units, NGOs, and teams operating in high-risk
                environments.
              </p>

              {/* CTAs */}
              <div
                ref={ctaRef}
                className="flex flex-wrap items-center gap-4 mb-12"
                style={{ willChange: 'transform, opacity' }}
              >
                <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#solutions"
                  className="inline-flex items-center gap-2 text-[#6FCFFF] hover:text-white transition-colors font-medium"
                >
                  View Solutions
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust Bar */}
              <div
                ref={trustRef}
                className="flex items-center gap-3"
                style={{ willChange: 'transform, opacity' }}
              >
                <Award className="w-5 h-5 text-[#6FCFFF]" />
                <span className="text-sm text-[#A9B3C7]">
                  Trusted by 15+ LGUs across Southeast Asia
                </span>
              </div>
            </div>

            {/* Right Glass Card */}
            <div className="hidden lg:flex justify-end">
              <div
                ref={glassCardRef}
                className="glass-card w-[22vw] h-[46vh] p-6 flex flex-col justify-between"
                style={{
                  willChange: 'transform, opacity',
                  perspective: '1000px',
                }}
              >
                {/* Card Header */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#FF6A3D] animate-pulse" />
                    <span className="eyebrow text-[10px]">LIVE SYSTEM</span>
                  </div>
                  <div className="h-[1px] w-full bg-gradient-to-r from-[#6FCFFF] to-transparent mb-4" />
                </div>

                {/* Card Content */}
                <div className="space-y-4">
                  <div className="glass-panel p-4">
                    <div className="text-xs text-[#A9B3C7] mb-1">Active Alerts</div>
                    <div className="text-2xl font-bold text-[#6FCFFF]">24</div>
                  </div>
                  <div className="glass-panel p-4">
                    <div className="text-xs text-[#A9B3C7] mb-1">Regions Monitored</div>
                    <div className="text-2xl font-bold text-white">15+</div>
                  </div>
                  <div className="glass-panel p-4">
                    <div className="text-xs text-[#A9B3C7] mb-1">Response Time</div>
                    <div className="text-2xl font-bold text-[#FF6A3D]">&lt;1hr</div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#A9B3C7]">Last updated: now</span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6FCFFF]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6FCFFF] opacity-60" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6FCFFF] opacity-30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Certifications */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="px-6 lg:px-[7vw]">
          <div className="flex flex-wrap items-center gap-6 lg:gap-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[rgba(111,207,255,0.15)] flex items-center justify-center">
                <svg className="w-4 h-4 text-[#6FCFFF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs text-[#A9B3C7]">Philippine Government Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[rgba(111,207,255,0.15)] flex items-center justify-center">
                <svg className="w-4 h-4 text-[#6FCFFF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs text-[#A9B3C7]">ISO 31000 Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

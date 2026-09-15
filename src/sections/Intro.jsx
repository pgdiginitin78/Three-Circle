import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTag from "../components/SectionTag";
import { ArrowUpRight, ShieldCheck, Award, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const disciplines = [
  { label: "Building Construction", icon: Layers },
  { label: "Mining & Crushing", icon: Award },
  { label: "Infrastructure", icon: ShieldCheck },
  { label: "Heavy Excavation", icon: ArrowUpRight },
];



export default function Intro() {
  const containerRef = useRef(null);
  const titleTagRef = useRef(null);
  const titleLinesRef = useRef([]);
  const descRef = useRef(null);
  const badgesRef = useRef(null);
  const cardStackRef = useRef(null);
  const bgCard1Ref = useRef(null);
  const bgCard2Ref = useRef(null);
  const mainCardRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Tag & Title Reveal Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Section Tag entry
      if (titleTagRef.current) {
        tl.fromTo(
          titleTagRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }
        );
      }

      // Title lines stagger reveal (slide up & tilt inside overflow clip)
      if (titleLinesRef.current.length > 0) {
        tl.fromTo(
          titleLinesRef.current,
          { y: "110%", rotateX: -20, opacity: 0 },
          {
            y: "0%",
            rotateX: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: "power4.out",
          },
          "-=0.3"
        );
      }

      // Description slide up
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.5"
        );
      }

      // Discipline Badges Stagger
      if (badgesRef.current) {
        const badges = badgesRef.current.querySelectorAll(".discipline-badge");
        tl.fromTo(
          badges,
          { opacity: 0, scale: 0.85, y: 15 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );
      }



      // 3. Card Stack Reveal & Scroll Parallax
      if (cardStackRef.current) {
        const stackTl = gsap.timeline({
          scrollTrigger: {
            trigger: cardStackRef.current,
            start: "top 85%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });

        if (bgCard1Ref.current) {
          stackTl.fromTo(
            bgCard1Ref.current,
            { opacity: 0, rotate: 0, scale: 0.9, x: 0, y: 0 },
            {
              opacity: 1,
              rotate: 4,
              scale: 1.02,
              x: 12,
              y: -10,
              duration: 1,
              ease: "power3.out",
            }
          );
        }

        if (bgCard2Ref.current) {
          stackTl.fromTo(
            bgCard2Ref.current,
            { opacity: 0, rotate: 0, scale: 0.9, x: 0, y: 0 },
            {
              opacity: 1,
              rotate: -3,
              scale: 1.01,
              x: -10,
              y: 12,
              duration: 1,
              ease: "power3.out",
            },
            "-=0.8"
          );
        }

        if (mainCardRef.current) {
          stackTl.fromTo(
            mainCardRef.current,
            { opacity: 0, y: 40, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power4.out",
            },
            "-=0.8"
          );
        }
      }

      // Parallax Image Scrub on Scroll
      if (imgRef.current && mainCardRef.current) {
        gsap.fromTo(
          imgRef.current,
          { yPercent: -8, scale: 1.15 },
          {
            yPercent: 8,
            scale: 1.05,
            ease: "none",
            scrollTrigger: {
              trigger: mainCardRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 3D Interactive Mouse Physics on Main Image Card
  const handleMouseMove = (e) => {
    if (!mainCardRef.current) return;
    const rect = mainCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    gsap.to(mainCardRef.current, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
    });

    if (bgCard1Ref.current) {
      gsap.to(bgCard1Ref.current, {
        x: 12 + ((x - centerX) / centerX) * 10,
        y: -10 + ((y - centerY) / centerY) * 10,
        duration: 0.5,
        ease: "power2.out",
      });
    }

    if (bgCard2Ref.current) {
      gsap.to(bgCard2Ref.current, {
        x: -10 - ((x - centerX) / centerX) * 8,
        y: 12 - ((y - centerY) / centerY) * 8,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (!mainCardRef.current) return;
    gsap.to(mainCardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    if (bgCard1Ref.current) {
      gsap.to(bgCard1Ref.current, {
        x: 12,
        y: -10,
        duration: 0.8,
        ease: "power3.out",
      });
    }

    if (bgCard2Ref.current) {
      gsap.to(bgCard2Ref.current, {
        x: -10,
        y: 12,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  };

  return (
    <section
      ref={containerRef}
      id="intro"
      className="relative pt-10 md:pt-16 pb-6 md:pb-10 bg-bg-primary border-y border-border-color overflow-hidden"
    >
      {/* Background Subtle Geometric Grid Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">

          {/* Left Column Content */}
          <div className="flex flex-col">
            {/* Section Tag */}
            <div ref={titleTagRef} className="mb-4">
              <SectionTag text="Our Expertise" />
            </div>

            {/* GSAP Split Masked Headline */}
            <div className="mb-5">
              <h2 className="font-display text-lg sm:text-xl md:text-[26px] lg:text-[30px] xl:text-[34px] font-bold leading-[1.25] tracking-tight text-text-primary uppercase flex flex-col gap-1.5 sm:gap-2">
                <div className="overflow-hidden py-0.5">
                  <span
                    ref={(el) => (titleLinesRef.current[0] = el)}
                    className="block whitespace-nowrap text-text-primary"
                  >
                    BUILT FOR COMPLEX PROJECTS.
                  </span>
                </div>
                <div className="overflow-hidden py-0.5">
                  <span
                    ref={(el) => (titleLinesRef.current[1] = el)}
                    className="block whitespace-nowrap text-text-primary"
                  >
                    ENGINEERED FOR RESULTS.
                  </span>
                </div>
              </h2>
            </div>

            {/* Description */}
            <p
              ref={descRef}
              className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl mb-8"
            >
              3 Circles delivers integrated civil and infrastructure capabilities
              across building construction, mining and crushing, infrastructure
              development, and heavy earthwork excavation.
            </p>

            {/* Discipline Badges */}
            <div
              ref={badgesRef}
              className="flex flex-wrap gap-2.5 mb-10"
            >
              {disciplines.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="discipline-badge inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/80 border border-brand-darkblue/10 shadow-xs hover:border-brand-gold/60 hover:shadow-md transition-all duration-300 group cursor-default"
                  >
                    <span className="w-5 h-5 rounded-full bg-brand-gold/15 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-3 h-3" />
                    </span>
                    <span className="font-display text-xs font-bold tracking-wide uppercase text-text-primary">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column Stacked Image Design with GSAP 3D & Parallax */}
          <div
            ref={cardStackRef}
            className="relative py-6 sm:py-8 pl-2 sm:pl-4 pr-4 sm:pr-8 max-w-[92%] sm:max-w-[88%] lg:max-w-[92%] mx-auto w-full"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Technical Corner Crosshairs */}
            <div className="absolute top-1 left-0 text-brand-gold/40 font-mono text-xs font-bold pointer-events-none">+</div>
            <div className="absolute top-1 right-2 text-brand-gold/40 font-mono text-xs font-bold pointer-events-none">+</div>
            <div className="absolute bottom-1 left-0 text-brand-gold/40 font-mono text-xs font-bold pointer-events-none">+</div>
            <div className="absolute bottom-1 right-2 text-brand-gold/40 font-mono text-xs font-bold pointer-events-none">+</div>

            {/* Layer 1: Back tilted gold accent card */}
            <div
              ref={bgCard1Ref}
              className="absolute top-0 right-0 w-[96%] h-[96%] rounded-[28px] bg-gradient-to-br from-brand-gold/40 via-brand-gold/20 to-transparent border border-brand-gold/30 z-0 pointer-events-none shadow-lg"
            />

            {/* Layer 2: Middle tilted dark accent card */}
            <div
              ref={bgCard2Ref}
              className="absolute bottom-0 left-2 w-[96%] h-[96%] rounded-[28px] bg-brand-gold/15 border border-brand-gold/20 z-0 pointer-events-none"
            />

            {/* Layer 3: Main Foreground Interactive 3D Image Card */}
            <div
              ref={mainCardRef}
              className="relative z-10 w-full aspect-[4/2.85] rounded-[24px] overflow-hidden shadow-[0_30px_70px_rgba(0,4,53,0.25)] border border-white/90 bg-slate-900 group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Image with Parallax & Hover Zoom */}
              <div className="w-full h-full overflow-hidden relative">
                <img
                  ref={imgRef}
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85"
                  alt="Construction site under building development"
                  className="w-full h-[120%] object-cover contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Ambient Shimmer / Gloss Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/10 opacity-70 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


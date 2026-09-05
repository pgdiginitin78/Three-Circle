import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import QualityConscious from "../../../public/images/achivements/BEST QUALITY CONSCIOUS SUBCONTRACTOR.png";
import HouseKeeping from "../../../public/images/achivements/BEST HOUSEKEEPING SUBCONTRACTOR.png";
import AchievementOne from "../../../public/images/achivements/AchievementOne.png";
import AchievementTwo from "../../../public/images/achivements/AchievementTwo.png";
import AchievementThree from "../../../public/images/achivements/AchievementThree.png";
import AchievementFour from "../../../public/images/achivements/AchievementFour.png";

gsap.registerPlugin(ScrollTrigger);

const awards = [
  {
    img: QualityConscious,
    title: "BEST QUALITY CONSCIOUS SUBCONTRACTOR",
    desc: "In Recognition of Quality Work at Maneckji Cooper School",
    filled: true,
  },
  {
    img: HouseKeeping,
    title: "BEST HOUSEKEEPING SUBCONTRACTOR",
    desc: "In Recognition of Quality Work at Maneckji Cooper School",
    filled: false,
  },
];

const gallery = [
  AchievementTwo,
  AchievementOne,
  AchievementTwo,
  AchievementThree,
  AchievementFour,
];

export default function Achievements() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".achieve-card", 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
          },
        }
      );

      gsap.fromTo(".gallery-item", 
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".gallery-wrap",
            start: "top 95%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="pt-32 pb-24 px-6 md:px-12 min-h-screen bg-[#faf9f6] text-[#0f172a] relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#f0eee9] rounded-full blur-3xl opacity-50 -z-10 transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Main Introduction Section */}
        <div className="achieve-card mb-24 max-w-4xl relative z-10">
          <div className="flex items-center gap-6 mb-8">
            <div className="h-[2px] w-16 bg-[#d2a34d]"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-wide uppercase text-[#0f172a]">
              Achievements
            </h1>
          </div>
          <p className="text-base md:text-lg lg:text-xl text-[#334155] leading-relaxed font-light pl-[88px]">
            We've achieved remarkable milestones in partnership with Tata,
            setting new standards in quality and efficiency. Our commitment to
            excellence is evident in every project, showcasing a successful
            collaboration that continues to reach new heights.
          </p>
        </div>

        {/* Featured Awards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-32 relative z-10">
          {awards.map((award, i) => (
            <div
              key={award.title}
              className={`achieve-card flex flex-col bg-white rounded-3xl shadow-[0_15px_40px_rgba(15,23,42,0.04)] border border-[#f1f0ee] overflow-hidden group ${
                i === 1 ? 'lg:mt-24' : ''
              }`}
            >
              {/* Decorative accent top border */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#d2a34d] to-transparent opacity-80"></div>
              
              <div className="p-8 lg:p-12 flex-1 flex items-center justify-center bg-[#faf9f6]/40">
                <img
                  src={award.img}
                  alt={award.title}
                  className="max-h-[250px] lg:max-h-[360px] w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              
              <div className="p-8 lg:p-10 bg-white border-t border-[#f1f0ee]">
                <div className="border-l-[3px] border-[#d2a34d] pl-6">
                  <h2 className="text-lg lg:text-xl font-serif font-bold text-[#0f172a] mb-3 uppercase tracking-wider leading-snug">
                    {award.title}
                  </h2>
                  <p className="text-sm md:text-base text-[#475569] leading-relaxed">
                    {award.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="gallery-wrap relative z-10">
          <div className="flex items-center gap-6 mb-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-wide uppercase text-[#0f172a]">
              Gallery
            </h3>
            <div className="h-[1px] flex-1 bg-[#e2e8f0]"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {gallery.map((img, i) => (
              <div
                key={i}
                className="gallery-item bg-white p-5 lg:p-8 rounded-xl shadow-[0_10px_30px_rgba(15,23,42,0.03)] border border-[#f1f0ee] flex items-center justify-center transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] group"
              >
                <img
                  src={img}
                  alt={`Achievement ${i + 1}`}
                  className="h-28 sm:h-36 lg:h-44 w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

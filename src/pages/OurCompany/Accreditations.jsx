import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ACCREDITATIONS from "../../../public/images/Associates/ACCREDITATIONS.png";
import ACCREDITATIONSOne from "../../../public/images/Associates/ACCREDITATIONSOne.png";
import ACCREDITATIONSTwo from "../../../public/images/Associates/ACCREDITATIONSTwo.png";
import ACCREDITATIONSThree from "../../../public/images/Associates/ACCREDITATIONSThree.png";

gsap.registerPlugin(ScrollTrigger);

export default function Accreditations() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".anim-item",
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
        },
      );

      gsap.fromTo(
        ".gallery-item",
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
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="pt-28 pb-24 px-6 md:px-12 min-h-screen bg-[#faf9f6] text-[#0f172a] relative overflow-hidden"
    >
      <h1 className="text-center mb-10 text-2xl lg:text-4xl font-bold">
        ACCREDITATIONS
      </h1>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#f0eee9] rounded-full blur-3xl opacity-50 -z-10 transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="anim-item flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32 relative z-10">
          <div className="lg:w-1/2">
            <div className="flex items-start gap-6 mb-8">
              <div className="h-[2px] w-16 bg-[#d2a34d] mt-5 shrink-0"></div>
              <h1 className="text-4xl md:text-5xl lg:text-3xl font-serif font-bold tracking-wide uppercase text-[#0f172a] leading-tight">
                Bureau of Civil Aviation Security
              </h1>
            </div>
            <p className="text-base 2xl:text-lg text-[#334155] leading-relaxed font-light pl-[88px]">
              The{" "}
              <span className="font-medium text-[#0f172a]">
                Bureau of Civil Aviation Security (BCAS)
              </span>{" "}
              is the{" "}
              <span className="font-medium text-[#0f172a]">
                regulatory authority responsible for civil aviation security in
                India.
              </span>{" "}
              It functions under the{" "}
              <span className="font-medium text-[#0f172a]">
                Ministry of Civil Aviation, Government of India
              </span>
              , and ensures the security of civil aviation operations across all
              Indian airports, airlines, and related stakeholders. This
              Clearance is obtained by a through background check by all
              concerned security agengies of INDIA
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.05)] border border-[#f1f0ee] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#d2a34d] to-transparent opacity-80"></div>

              <img
                src={ACCREDITATIONS}
                alt="Bureau of Civil Aviation Security"
                className="max-h-[400px] xl:max-h-[450px] 2xl:max-h-[500px] w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>

        <div className="gallery-wrap relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
            {[ACCREDITATIONSOne, ACCREDITATIONSTwo, ACCREDITATIONSThree].map(
              (img, index) => (
                <div
                  key={index}
                  className="gallery-item bg-white p-4 lg:p-6 rounded-2xl shadow-[0_15px_40px_rgba(15,23,42,0.04)] border border-[#f1f0ee] flex items-center justify-center transition-shadow duration-500 hover:shadow-[0_25px_50px_rgba(15,23,42,0.08)] group h-full"
                >
                  <img
                    src={img}
                    alt={`Accreditation ${index + 1}`}
                    className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

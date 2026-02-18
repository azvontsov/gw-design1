"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/dc-panorama.png)" }}
    >
      {/* Sophisticated Dark Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-12 items-start">
          {/* Left Content */}
          <div
            className={`max-w-xl xl:max-w-2xl px-4 sm:px-6 lg:px-8 xl:pl-32 pt-20 pb-12 lg:pt-32 lg:pb-32 transition-all duration-1000 delay-300 ${isMounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <h1 className="text-5xl font-medium tracking-normal text-[var(--gw-white)] lg:text-[64px] mb-6 leading-[1.1]">
              GW Center for Integrative Medicine
            </h1>
            <p className="mt-6 text-xl text-[var(--gw-white)] leading-relaxed max-w-lg">
              26 years of Integrative Medicine <br /> in Washington DC.
            </p>

            {/* CTA Button */}
            <div className="mt-10">
              <button className="bg-[var(--gw-green)] hover:bg-[var(--gw-secondary)] text-[var(--gw-primary)] hover:text-[var(--gw-white)] px-8 py-4 font-bold text-lg transition-colors shadow-lg">
                New Patient Inquiry Form
              </button>
            </div>
          </div>
          {/* Right - TED Talk Showcase: Mobile (Shield) -> Desktop (Bookmark) */}
          <div className="relative mt-8 lg:mt-0 lg:absolute lg:-top-20 xl:-top-20 lg:right-[8%] xl:right-[12%] z-20 w-full lg:w-auto">
            <div
              className={`relative group cursor-pointer transition-all duration-1000 delay-500 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"}`}
              onClick={() => setIsVideoOpen(true)}
              style={{ filter: "drop-shadow(0 25px 40px rgba(0,0,0,0.4))" }}
            >
              {/* Container Shape: Full width Shield on Mobile, Bookmark on Desktop */}
              <div className="w-full aspect-video lg:aspect-auto lg:w-[280px] lg:h-[420px] xl:w-[320px] xl:h-[480px] bg-black relative overflow-hidden transition-transform duration-500 lg:group-hover:-translate-y-2 rounded-none lg:rounded-none lg:[clip-path:polygon(0_0,100%_0,100%_100%,50%_85%,0_100%)]">
                {/* Background Image */}
                <img
                  src="/images/TED.png"
                  alt="TEDx Talk"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-all duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/90"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-8 pb-12 lg:pb-16 px-6 text-center">
                  {/* Play Button */}
                  <div className="mb-4 lg:mb-6 relative">
                    <div className="absolute inset-0 bg-white/10 rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out border border-white/20"></div>
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#FF2B06] group-hover:border-[#FF2B06] transition-all duration-300">
                      <svg
                        className="w-5 h-5 lg:w-6 lg:h-6 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* TED Branding */}
                  <div className="flex flex-col items-center gap-1 transform transition-transform duration-500 group-hover:translate-y-0 lg:translate-y-2">
                    <span className="text-white/80 text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase">
                      Featured
                    </span>
                    <h3 className="text-white font-bold text-2xl lg:text-3xl tracking-tighter drop-shadow-md">
                      <span className="text-[#FF2B06]">TEDx</span>Talk
                    </h3>
                    <div className="h-[2px] w-8 lg:w-12 bg-[#FF2B06] mt-2 lg:mt-3 mb-2 lg:mb-3"></div>
                    <p className="text-white/90 font-serif text-base lg:text-lg italic leading-tight max-w-[200px]">
                      "Integrative Medicine: <br />
                      Beyond Symptoms"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-[var(--gw-secondary-light)] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video Player */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Z1OEoUca6S4?autoplay=1"
              title="TED Talk Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}


'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative bg-[var(--gw-cream)] pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/dc-panorama.png)' }}>
      {/* Dark overlay for background */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-12 items-start">
            {/* Left Content */}
          <div 
            className={`max-w-xl xl:max-w-2xl px-4 sm:px-6 lg:px-8 xl:pl-32 pt-20 pb-12 lg:pt-32 lg:pb-32 transition-all duration-1000 delay-300 ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <h1 className="text-5xl font-medium tracking-normal text-[var(--gw-white)] lg:text-[64px] mb-6 leading-[1.1]">
              GW Center for Integrative Medicine
            </h1>
            <p className="mt-6 text-xl text-[var(--gw-white)] leading-relaxed max-w-lg">
              26 years of Integrative Medicine <br /> in Washington DC. 
            </p>
            
            {/* CTA Button */}
            <div className="mt-10">
              <button className="bg-[var(--gw-gold)] hover:bg-[var(--gw-secondary)] text-[var(--gw-primary)] hover:text-[var(--gw-white)] px-8 py-4 font-bold text-lg transition-colors shadow-lg">
                New Patient Inquiry Form
              </button>
            </div>
          </div>
          
          {/* Right - TED Talk Showcase: Smaller 'Shield' Design Pinned to Top */}
          <div 
            className={`relative w-full lg:w-[320px] lg:h-[480px] aspect-video lg:aspect-auto lg:ml-auto group/video transition-all duration-1000 delay-500 mt-[-48px] lg:-mt-20 ${isMounted ? 'opacity-100 lg:-translate-x-[20%] xl:-translate-x-[120%]' : 'opacity-0 translate-x-12'}`}
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-none lg:rounded-b-[50px] border-x border-b border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.3)] overflow-hidden transform transition-transform duration-700 group-hover/video:scale-[1.02]">
                {/* Video Thumbnail Container */}
                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="relative w-full h-full cursor-pointer"
                >
                  <img 
                    src="/images/TED.png" 
                    alt="TEDx Talk" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/video:scale-110"
                  />
                  
                  {/* Gradient Overlays: Darker at bottom for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--gw-primary)]/40 via-transparent to-black/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                  
                  {/* Internal Content: Compactly aligned for the Smaller Shield shape */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 lg:pb-16 p-6 text-center">
                    {/* Soft Pulse Play Button - Smaller scale */}
                    <div className="relative mb-4 lg:mb-6">
                        <div className="absolute inset-0 animate-pulse-soft rounded-full bg-white/20 scale-150 opacity-0 group-hover/video:opacity-100 transition-opacity"></div>
                        <div className="w-11 h-11 lg:w-14 lg:h-14 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 text-[#FF2B06] ml-1">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                          </svg>
                        </div>
                    </div>

                    <div className="flex flex-col items-center transform lg:translate-y-4 group-hover/video:translate-y-0 transition-transform duration-500">
                        {/* TEDx Label */}
                        <div className="bg-[#FF2B06] text-white px-2 py-0.5 lg:px-3 lg:py-1 font-bold text-[9px] lg:text-[10px] tracking-widest uppercase rounded-sm mb-2 lg:mb-3">
                          TEDx
                        </div>

                        {/* Text Content */}
                        <p className="text-white/80 font-bold text-[8px] lg:text-[9px] uppercase tracking-[0.3em] mb-1 lg:mb-2">Featured Talk</p>
                        <h3 className="text-white font-serif text-lg lg:text-xl leading-tight drop-shadow-md lg:max-w-[240px]">
                            Integrative Medicine <br /> 
                            <span className="italic opacity-80 font-medium text-base lg:text-lg">Beyond symptoms</span>
                        </h3>
                    </div>
                  </div>
                </button>
            </div>
          </div>        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="relative w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-[var(--gw-secondary-light)] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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

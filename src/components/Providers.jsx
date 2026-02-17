"use client";

import Link from 'next/link';

export default function Providers() {
  const providers = [
    {
      id: 1,
      name: "Joshua Ferey, MD",
      image: "/images/provider1.png", // I'll assume these will be placed in /public/images
      link: "#"
    },
    {
      id: 2,
      name: "Nina Paul",
      image: "/images/provider2.png",
      link: "#"
    },
    {
      id: 3,
      name: "Robert Pendergrast, MD, MPH, FAAP",
      image: "/images/provider3.png",
      link: "#"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 
            className="text-[72px] leading-[72px] font-medium tracking-normal text-[var(--gw-primary)]  mb-4"
            
          >
            Our Team
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We are a dedicated team of 20+ medical professionals, working together and combining our expertise to guide you toward optimal health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {providers.map((provider) => (
            <div key={provider.id} className="flex flex-col items-center text-center gap-4 group cursor-pointer">
              <div className="relative w-48 h-48 md:w-56 md:h-56 xl:w-64 xl:h-64 overflow-hidden rounded-full bg-[#E5E1D8] transition-transform duration-500 group-hover:scale-105">
                <img 
                  src={provider.image} 
                  alt={provider.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[var(--gw-deep-blue)] group-hover:text-[var(--gw-secondary)] transition-colors leading-tight max-w-[280px]">
                {provider.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            href="#" 
            className="text-[var(--gw-deep-blue)] font-medium hover:text-[var(--gw-secondary)] transition-all flex items-center gap-1 group w-fit text-lg"
          >
            <span className="border-b border-transparent group-hover:border-current">See all 15 providers</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

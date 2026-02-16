
export default function Hero() {
  return (
    <section className="relative bg-[var(--gw-cream)] pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-12 items-center">
            {/* Left Content */}
          <div className="max-w-xl xl:max-w-2xl px-4 sm:px-6 lg:px-8 xl:pl-32 py-12 lg:py-0">
            <h1 className="text-5xl font-medium tracking-normal text-[var(--gw-blue)] sm:text-[72px] mb-6 leading-[1.1]">
              GW Center for Integrative Medicine
            </h1>
            <p className="mt-6 text-xl text-gray-700 leading-relaxed max-w-lg">
              26 years of Integrative Medicine <br /> in Washington DC. 
            </p>
            
            {/* Search / CTA */}
            <div className="mt-10 max-w-md">
                 <div className="bg-white p-2 shadow-lg flex items-center border border-gray-200">
                    <div className="pl-4 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </div>
                    <input 
                        type="text" 
                        placeholder="City or zip code" 
                        className="flex-1 px-4 py-2 border-none outline-none text-gray-700 placeholder:text-gray-400"
                    />
                    <button className="bg-[#D33D29] hover:bg-[#b93524] text-white px-6 py-2.5 font-bold text-sm transition-colors">
                        Find care
                    </button>
                 </div>
                 <p className="mt-3 text-sm text-gray-500">
                     Enter your location to see providers near you.
                 </p>
            </div>
          </div>
          
            {/* Right Image Placeholder - In lieu of actual asset, using a colored block or placeholder structure */}
          <div className="relative h-[400px] lg:h-[800px] w-full bg-[var(--gw-mint)] overflow-hidden">
               {/* This would be the Hero Image */}
               <div className="absolute inset-0 flex items-center justify-center text-[var(--gw-primary)] opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-32 h-32">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
               </div>
               
               {/* Simulating the "doctor" image */}
               <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-[#003B26] opacity-10"></div>
          </div>
        </div>
      </div>
      
       {/* Background decorative elements */}
       <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FFE8E6] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-24 -left-24 w-72 h-72 bg-[var(--gw-mint)] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

    </section>
  );
}

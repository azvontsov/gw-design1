export default function MembershipSection() {
  return (
    <section className="bg-[var(--gw-cream)] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: App Mockup Placeholder */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
             <div className="relative w-72 h-[550px] bg-[var(--gw-primary)] shadow-2xl border-8 border-gray-900 overflow-hidden flex flex-col items-center pt-8">
                {/* Phone Notch */}
                <div className="absolute top-0 w-32 h-6 bg-gray-900 z-20"></div>
                
                {/* Screen Content */}
                <div className="w-full h-full bg-white flex flex-col pt-8 px-4">
                     <div className="flex items-center justify-between mb-6">
                         <div className="w-8 h-8 flex items-center justify-center">
                            <img src="/icons/logo.svg" alt="App Logo" className="h-full w-full object-contain" />
                         </div>
                         <div className="text-xs font-bold text-[var(--gw-primary)]">One Medical</div>
                         <div className="w-6 h-6 bg-gray-200"></div>
                     </div>
                     <div className="space-y-4">
                         <div className="h-32 bg-[var(--gw-mint)] w-full flex items-center justify-center text-[var(--gw-primary)] text-xs font-semibold">
                             Book a Visit
                         </div>
                         <div className="h-20 bg-gray-50 w-full"></div>
                         <div className="h-20 bg-gray-50 w-full"></div>
                         <div className="h-20 bg-gray-50 w-full"></div>
                     </div>
                     {/* Bottom Nav */}
                     <div className="mt-auto mb-4 h-12 border-t border-gray-100 flex justify-between items-center px-4">
                         <div className="w-6 h-6 bg-[var(--gw-primary)]"></div>
                         <div className="w-6 h-6 bg-gray-200"></div>
                         <div className="w-6 h-6 bg-gray-200"></div>
                     </div>
                </div>
             </div>
          </div>
          
          {/* Right: Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--gw-primary)] sm:text-4xl mb-6">
               Care in the palm of your hand.
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
               Video chat with providers 24/7 at no extra cost. Easily book same/next-day appointments. Renew prescriptions, message your team, and access your health records—all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
               <button className="bg-[var(--gw-primary)] text-white px-8 py-3 font-bold hover:bg-[var(--gw-secondary)] transition-all">
                  Get the app
               </button>
               <span className="text-sm font-semibold text-[var(--gw-primary)] underline cursor-pointer hover:no-underline">
                   See how it works
               </span>
            </div>
            
            <div className="mt-12 flex items-center gap-4 justify-center lg:justify-start">
                 <div className="flex -space-x-2">
                     <div className="w-10 h-10 border-2 border-white bg-gray-300"></div>
                     <div className="w-10 h-10 border-2 border-white bg-gray-400"></div>
                     <div className="w-10 h-10 border-2 border-white bg-gray-500"></div>
                     <div className="w-10 h-10 border-2 border-white bg-[var(--gw-primary)] flex items-center justify-center text-white text-xs font-bold">+2k</div>
                 </div>
                 <div className="text-sm">
                     <p className="font-bold text-[var(--gw-primary)]">4.8/5 stars</p>
                     <p className="text-gray-500">App Store & Google Play</p>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

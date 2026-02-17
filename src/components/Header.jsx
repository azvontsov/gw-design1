"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const menuItems = [
  {
    title: "Services",
    href: "#",
    submenu: [
      { title: "All Services", href: "#" },
      {
        title: "Consultations",
        href: "#",
        submenu: [
          { title: "Integrative Geriatrics", href: "#" },
          { title: "Naturopathic Medicine", href: "#" },
          { title: "Functional Medicine", href: "#" },
          { title: "Integrative Mental Health", href: "#" },
          { title: "Sarno/Mind-Body Method", href: "#" },
          { title: "Pediatric and Adolescent Integrative Medicine Consultations", href: "#" },
          { title: "Medical Cannabis", href: "#" },
          { title: "Nutritional Counseling", href: "#" },
        ]
      },
      {
        title: "Treatments",
        href: "#",
        submenu: [
          { title: "Intravenouse Therapy", href: "#" },
          { title: "Mistletoe Injection Therapy for Cancer", href: "#" },
          { title: "Acupuncture and Chinese medicine", href: "#" },
          { title: "Microneedling and Facial Acupuncture", href: "#" },
          { title: "Reiki", href: "#" },
          { title: "Somatic Experiencing", href: "#" },
          { title: "KAP Assisted Psychotherapy", href: "#" },
        ]
      },
      {
        title: "Programs",
        href: "#",
        submenu: [
          { title: "Concierge Integrative Medicine Care", href: "#" },
          { title: "Reversal of Cognitive Decline ReCODE (TM)", href: "#" },
          { title: "Long Covid", href: "#" },
          { title: "Shoemaker Protocol for CIRS and Mold Toxicity", href: "#" },
          { title: "Mindfulness Based Stress Reduction MBSR", href: "#" },
          { title: "Weight/Body Composition", href: "#" },
          { title: "Executive Coaching", href: "#" },
        ]
      },
      {
        title: "Ongoing Groups",
        href: "#",
        submenu: [
           { title: "Long COVID Medical online Groups", href: "#" },
           { title: "ReCODE Support Group", href: "#" },
        ]
      }
    ]
  },
  {
    title: "Conditions",
    href: "#",
    submenu: [
      { title: "Chronic Illness", href: "#" },
      { title: "Pain and Fatigue", href: "#" },
      { title: "Mental Health", href: "#" },
      { title: "CIRS and Mold Toxicity Illness", href: "#" },
      { title: "Healthy Aging", href: "#" },
      { title: "Cancer", href: "#" },
      { title: "EDS and HSD", href: "#" },
    ]
  },
  {
    title: "Team",
    href: "#",
    submenu: [
      { title: "Integrative Health Care Specialists", href: "#" },
      { title: "Providers Affiliated with GWCIM", href: "#" },
      { title: "Our Partners", href: "#" },
    ]
  },
  {
    title: "Appointments and Information",
    href: "#",
    submenu: [
      { title: "Appointments", href: "#" },
      { title: "Fees, Cancellation, Insurance", href: "#" },
      { title: "ChARM Patient Portal", href: "#" },
      { title: "Fullscript Supplements Store", href: "#" },
      { title: "Integrative Medicine Resources", href: "#" },
    ]
  },
  {
      title: "News",
      href: "#",
      submenu: [
          { title: "News & Events Main", href: "#" },
          { title: "Sign Up for GWCIM Newsletter", href: "#" },
          { title: "Dr Kogan’s YouTube channel", href: "#" },
          { title: "Dr. Kogan’s Medical Marijuana Book", href: "#" },
          { title: "The GWCIM Nirmal Goyal Cancer Fund", href: "#" },
          { title: "“Integrative Geriatrics” Book", href: "#" },
          { title: "GWCIM Virtual Open Houses", href: "#" },
      ]
  },
  {
      title: "About",
      href: "#",
      submenu: [
          { title: "GW Center for Integrative Medicine: Mission Statement and Director’s Message", href: "#" },
          { title: "What is Integrative Medicine", href: "#" },
          { title: "Our Story", href: "#" },
          { title: "Patient Reviews and Testimonials", href: "#" },
      ]
  },
  {
      title: "Contact",
      href: "#"
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Track open submenus in mobile view by hierarchical path, e.g., "Services", "Services/Consultations"
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (path) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Recursively render mobile menu items
  const renderMobileMenuItem = (item, parentPath = '') => {
      const path = parentPath ? `${parentPath}/${item.title}` : item.title;
      const isOpen = openSubmenus[path];
      const hasSubmenu = item.submenu && item.submenu.length > 0;

      return (
          <div key={path} className="w-full flex flex-col">
               <div className="flex items-center justify-between py-2">
                   {(item.href && (item.href !== '#' || !hasSubmenu)) ? (
                        <Link 
                            href={item.href} 
                            onClick={() => !hasSubmenu && setIsMenuOpen(false)}
                            className="text-xl md:text-2xl font-serif text-white hover:text-[var(--gw-secondary-light)] transition-colors leading-tight"
                        >
                            {item.title}
                        </Link>
                   ) : (
                        <button 
                             onClick={() => toggleSubmenu(path)}
                             className="text-xl md:text-2xl font-serif text-white hover:text-[var(--gw-secondary-light)] transition-colors leading-tight text-left"
                        >
                             {item.title}
                        </button>
                   )}
                   
                   {hasSubmenu && (
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleSubmenu(path);
                            }}
                            className="p-2 ml-2"
                        >
                             <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 20 20" 
                                fill="currentColor" 
                                className={`w-6 h-6 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                             >
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                             </svg>
                        </button>
                   )}
               </div>
               
               {hasSubmenu && (
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out pl-4 border-l border-[rgba(255,255,255,0.1)] ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                         <div className="flex flex-col gap-1 py-1">
                             {item.submenu.map(subItem => renderMobileMenuItem(subItem, path))}
                         </div>
                    </div>
               )}
          </div>
      );
  };

  return (
    <>
      {/* Top Bar: Logo and Contact Info - Scrolls away */}
      <div className={`hidden lg:block bg-white border-b border-gray-100 transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="flex flex-col lg:flex-row h-auto lg:h-[70px] w-full items-center justify-between px-4 sm:px-6 lg:pl-8 lg:pr-0 py-2 lg:py-0 gap-4 lg:gap-0">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
                <div className="relative h-10 flex items-center justify-center">
                    <img src="/icons/logo.svg" alt="Logo" className="h-full w-auto object-contain" />
                </div>
            </Link>

            {/* Contact Info & Socials - 3 Colored Boxes */}
            <div className="hidden lg:flex items-stretch h-full ml-auto">
                {/* Box 1: Address */}
                <div className="bg-[var(--gw-light-blue)] px-6 py-1 flex items-center justify-center text-xs font-bold text-[var(--gw-primary)] h-auto">
                    <span className="text-center leading-tight">908 New Hampshire Ave NW<br/>Suite 200 Washington DC</span>
                </div>
                
                {/* Box 2: Contact & Hours */}
                <div className="bg-[#F0F4F8] px-6 py-1 flex flex-col items-center justify-center gap-1 text-xs font-bold text-[var(--gw-primary)] h-auto">
                    <div className="flex items-center gap-3">
                        <a href="tel:2028335055" className="hover:underline">202-833-5055</a>
                        <span>|</span>
                        <a href="mailto:info@gwcim.com" className="hover:underline">info@gwcim.com</a>
                    </div>
                    <span className="text-[11px] opacity-80">Mon – Fri 9:00am – 5:00pm</span>
                </div>

                {/* Box 3: Socials */}
                <div className="bg-[var(--gw-primary)] px-6 py-1 flex items-center justify-center gap-4 text-white h-auto">
                        <a href="#" className="hover:opacity-80 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" className="hover:opacity-80 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                         <a href="#" className="hover:opacity-80 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="#" className="hover:opacity-80 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                        </a>
                </div>
            </div>
        </div>
      </div>

      {/* Second Line: Navigation Items - Sticky on Desktop */}
      <header className={`lg:sticky top-0 z-50 w-full font-sans transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.08)] py-0' 
          : 'bg-white border-b border-gray-100 py-0'
      }`}>
        {/* Desktop Header: Hidden on mobile */}
        <div className="hidden lg:flex h-[80px] w-full items-center px-8 xl:px-12 max-w-[1920px] mx-auto">
          {/* Logo Column - Fixed width to balance with spacer */}
          <div className="flex-shrink-0 flex items-center w-[220px] xl:w-[260px]">
            <Link 
              href="/" 
              className={`flex items-center gap-2 transition-all duration-300 ${
                isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
              }`}
            >
              <div className="relative h-9 lg:h-10 flex items-center justify-center">
                <img src="/icons/logo.svg" alt="Logo" className="h-full w-auto object-contain" />
              </div>
            </Link>
          </div>

          {/* Navigation Column - Centered between columns */}
          <nav className="flex-1 flex items-center justify-center gap-4 xl:gap-5 2xl:gap-8">
            {menuItems.map((item, index) => {
                const hasSubmenu = item.submenu && item.submenu.length > 0;
                
                return (
                    <div key={index} className="relative group">
                        {item.href ? (
                            <Link href={item.href} className="flex items-center gap-1 text-[14px] xl:text-[15px] font-bold text-[var(--gw-primary)] hover:text-[var(--gw-secondary)] py-8 whitespace-nowrap">
                                {item.title}
                                {hasSubmenu && (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 flex-shrink-0">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </Link>
                        ) : (
                            <button className="flex items-center gap-1 text-[14px] xl:text-[15px] font-bold text-[var(--gw-primary)] hover:text-[var(--gw-secondary)] py-8 whitespace-nowrap cursor-pointer">
                                {item.title}
                                {hasSubmenu && (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 flex-shrink-0">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </button>
                        )}
                        
                        {/* Level 1 Submenu */}
                        {hasSubmenu && (
                            <div className="absolute top-[90%] left-0 min-w-[260px] bg-white shadow-xl rounded-b-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform translate-y-2 group-hover:translate-y-0">
                                <div className="py-2">
                                    {item.submenu.map((subItem, subIndex) => {
                                        const hasDeepSubmenu = subItem.submenu && subItem.submenu.length > 0;
                                        return (
                                            <div key={subIndex} className="relative group/sub px-2">
                                                {subItem.href ? (
                                                     <Link 
                                                        href={subItem.href} 
                                                        className="flex items-center justify-between px-4 py-2 text-[14px] text-[var(--gw-primary)] hover:text-[var(--gw-primary)] hover:bg-[var(--gw-green)] hover:font-bold rounded-md transition-colors"
                                                     >
                                                        {subItem.title}
                                                        {hasDeepSubmenu && (
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 transform -rotate-90">
                                                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                            </svg>
                                                        )}
                                                     </Link>
                                                ) : (
                                                    <div className="flex items-center justify-between px-4 py-2 text-[14px] text-[var(--gw-primary)] hover:text-[var(--gw-primary)] hover:bg-[var(--gw-green)] hover:font-bold rounded-md transition-colors cursor-default">
                                                        {subItem.title}
                                                         {hasDeepSubmenu && (
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 transform -rotate-90">
                                                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                            </svg>
                                                        )}
                                                    </div>
                                                )}

                                                {/* Level 2 Submenu (Flyout) */}
                                                {hasDeepSubmenu && (
                                                    <div className="absolute top-0 left-full ml-1 min-w-[260px] bg-white shadow-xl rounded-md border border-gray-100 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50 transform translate-x-2 group-hover/sub:translate-x-0">
                                                        <div className="py-2 px-2">
                                                            {subItem.submenu.map((deepSubItem, deepSubIndex) => (
                                                                <Link 
                                                                    key={deepSubIndex}
                                                                    href={deepSubItem.href || '#'} 
                                                                    className="block px-4 py-2 text-[14px] text-[var(--gw-primary)] hover:text-[var(--gw-primary)] hover:bg-[var(--gw-green)] hover:font-bold rounded-md transition-colors"
                                                                >
                                                                    {deepSubItem.title}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
          </nav>

          {/* Spacer Column - Balances the logo to keep navigation centered */}
          <div className="flex-shrink-0 w-[220px] xl:w-[260px] hidden lg:block"></div>
        </div>

        {/* Mobile Header Row (Non-Sticky): Hidden on desktop */}
        <div className="lg:hidden flex w-full items-center justify-between px-4 sm:px-6 h-[70px]">
          <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 flex items-center justify-center">
                  <img src="/icons/logo.svg" alt="Logo" className="h-full w-auto object-contain" />
              </div>
          </Link>

          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center p-2.5 text-[var(--gw-primary)] hover:text-[var(--gw-secondary)] rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Toggle main menu</span>
             <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <rect 
                    x="0" y="5" width="24" height="2" 
                    className={`origin-center transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
                    style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                />
                <rect 
                    x="0" y="11" width="24" height="2" 
                    className={`transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0' : ''}`}
                />
                <rect 
                    x="0" y="17" width="24" height="2" 
                    className={`origin-center transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
                    style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                />
            </svg>
          </button>
        </div>
      </header>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[var(--gw-primary)] overflow-y-auto">
            <div className="flex flex-col min-h-screen">
                {/* Header inside Mobile Menu */}
                <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-[70px] border-b border-[rgba(255,255,255,0.1)]">
                     <Link href="/" onClick={() => setIsMenuOpen(false)}>
                        <div className="relative h-10 flex items-center justify-center">
                            <img src="/icons/logo.svg" alt="Logo" className="h-full w-auto object-contain brightness-0 invert" />
                        </div>
                    </Link>
                    <button 
                        onClick={() => setIsMenuOpen(false)}
                        className="-m-2.5 inline-flex items-center justify-center p-2.5 text-white hover:text-[var(--gw-secondary-light)] rounded-md transition-colors"
                    >
                         <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <rect 
                                x="0" y="5" width="24" height="2" 
                                className="origin-center rotate-45 translate-y-[6px]"
                                style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                            />
                            <rect 
                                x="0" y="11" width="24" height="2" 
                                className="opacity-0"
                            />
                            <rect 
                                x="0" y="17" width="24" height="2" 
                                className="origin-center -rotate-45 -translate-y-[6px]"
                                style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                            />
                        </svg>
                    </button>
                </div>

                {/* Menu Content */}
                <div className="flex-1 px-6 py-12 flex flex-col gap-12">
                    {/* Main Links */}
                    <div className="flex flex-col items-start gap-0 w-full">
                        {menuItems.map(item => renderMobileMenuItem(item))}
                    </div>

                    {/* Secondary/Footer Section */}
                    <div className="mt-auto pt-8 border-t border-[rgba(255,255,255,0.1)]">
                        <p className="text-xs font-bold text-[var(--gw-secondary-light)] tracking-widest uppercase mb-6">CONTACT US</p>
                         <div className="flex flex-col gap-4">
                            <a href="tel:2028335055" className="text-2xl md:text-3xl font-serif text-white hover:text-[var(--gw-secondary-light)]">202-833-5055</a>
                            <a href="mailto:info@gwcim.com" className="text-xl md:text-2xl font-serif text-white hover:text-[var(--gw-secondary-light)]">info@gwcim.com</a>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </>
  );
}

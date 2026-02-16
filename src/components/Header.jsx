"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 font-sans">
      {/* Top Bar: Logo and Contact Info */}
      <div className="hidden lg:block">
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
                <div className="bg-[var(--gw-mint)] px-6 py-1 flex items-center justify-center text-xs font-bold text-[var(--gw-primary)] h-auto">
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
             {/* Mobile Hamburger (visible only on mobile, right aligned next to logo effectively in row 1 if we wanted, but user asked for logic for second line only. 
                 However, if we hide the second line, we need the hamburger somewhere. 
                 Let's put the hamburger in the second line container on mobile, but since we are stacking, let's just keep it simple.
                 Actually, often double navs collapse to single on mobile.
                 I will put the hamburger in the main flexible row for mobile.
              */}
        </div>
      </div>

      {/* Second Line: Navigation Items */}
      <div className="flex h-[60px] w-full items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {['Services', 'Conditions', 'Team', 'Appointments and Information', 'News', 'About'].map((item) => (
            <div key={item} className="relative group">
      <Link href="#" className="flex items-center gap-1 text-base font-bold text-[var(--gw-primary)] hover:text-[var(--gw-secondary)] py-4">
                {item}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform group-hover:rotate-180">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </Link>
              
              {item === 'Services' && (
                <div className="absolute top-full -left-4 w-56 bg-white shadow-lg rounded-md border border-gray-100 hidden group-hover:block z-50 p-2">
                   <div className="flex flex-col gap-1">
                      <Link href="#" className="px-4 py-2 hover:bg-[var(--gw-mint)] text-[var(--gw-primary)] text-sm font-medium rounded-md">All Services</Link>
                      <Link href="#" className="px-4 py-2 hover:bg-[var(--gw-mint)] text-[var(--gw-primary)] text-sm font-medium rounded-md">Consultations</Link>
                      <Link href="#" className="px-4 py-2 hover:bg-[var(--gw-mint)] text-[var(--gw-primary)] text-sm font-medium rounded-md">Treatments</Link>
                      <Link href="#" className="px-4 py-2 hover:bg-[var(--gw-mint)] text-[var(--gw-primary)] text-sm font-medium rounded-md">Programs</Link>
                      <Link href="#" className="px-4 py-2 hover:bg-[var(--gw-mint)] text-[var(--gw-primary)] text-sm font-medium rounded-md">Ongoing Groups</Link>
                   </div>
                </div>
              )}
            </div>
          ))}
          <Link href="#" className="text-base font-bold text-[var(--gw-primary)] hover:text-[var(--gw-secondary)]">
            Contact
          </Link>
        </nav>

         {/* Mobile Menu Button - Right aligned in this second bar which is otherwise empty on mobile except for this button? 
             Actually, on mobile, the first bar has the Logo. The second bar can just be the hamburger button row. 
          */}
        <div className="flex lg:hidden w-full items-center justify-between">
            {/* Mobile Logo */}
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
      </div>
      
        {/* Mobile Menu Dropdown */}
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[var(--gw-primary)] overflow-y-auto">
            <div className="flex flex-col min-h-screen">
                {/* Header inside Mobile Menu */}
                <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-[60px] border-b border-[rgba(255,255,255,0.1)]">
                     <Link href="/" onClick={() => setIsMenuOpen(false)}>
                        <div className="relative h-10 flex items-center justify-center">
                            {/* Inverted Logo if available, or just text, or use styling to make logo visible on dark bg if it's transparent. 
                                Assuming existing logo is SVG with colored paths. If dark green logo on dark green bg, it won't show.
                                For now, I'll assume the logo might need a white version or filter. 
                                The user image shows white logo. I will use a filter brightness(0) invert(1) to make it white if it's an image.
                             */}
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
                    <div className="flex flex-col items-start gap-0">
                        <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-4xl md:text-5xl font-serif text-white hover:text-[var(--gw-secondary-light)] transition-colors text-left leading-tight py-1">Services</Link>
                        <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-4xl md:text-5xl font-serif text-white hover:text-[var(--gw-secondary-light)] transition-colors text-left leading-tight py-1">Conditions</Link>
                        <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-4xl md:text-5xl font-serif text-white hover:text-[var(--gw-secondary-light)] transition-colors text-left leading-tight py-1">Team</Link>
                        <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-4xl md:text-5xl font-serif text-white hover:text-[var(--gw-secondary-light)] transition-colors text-left leading-tight py-1">Appointments</Link>
                        <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-4xl md:text-5xl font-serif text-white hover:text-[var(--gw-secondary-light)] transition-colors text-left leading-tight py-1">News</Link>
                        <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-4xl md:text-5xl font-serif text-white hover:text-[var(--gw-secondary-light)] transition-colors text-left leading-tight py-1">About</Link>
                        <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-4xl md:text-5xl font-serif text-white hover:text-[var(--gw-secondary-light)] transition-colors text-left leading-tight py-1">Contact</Link>
                    </div>

                    {/* Secondary/Footer Section (optional, adding to match 'FOR YOU' structure sort of, maybe putting contact info here) */}
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
    </header>
  );
}

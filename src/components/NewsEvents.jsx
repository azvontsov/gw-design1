"use client";

import { useState, useRef, useEffect } from "react";

export default function NewsEvents() {
  const originalItems = [
    {
      id: 1,
      category: "Mindfulness",
      title: "A Mindfulness Experience",
      image: "/images/feeling-better.png",
      link: "#",
    },
    {
      id: 2,
      category: "Healing Foods",
      title: "Emergency Chicken Soup: Healing in a Bowl",
      image: "/images/live-well.png",
      link: "#",
    },
    {
      id: 3,
      category: "Long COVID",
      title: "What Can You Do About Long COVID?",
      image: "/images/mindset.png",
      link: "#",
    },
    {
      id: 4,
      category: "NUTRITION",
      title: "Gut Health and its impact on Immunity",
      image: "/images/image3.png",
      link: "#",
    },
    {
      id: 5,
      category: "WELLNESS",
      title: "Modern Acupuncture: Bridging Tradition and Science",
      image: "/images/image4.png",
      link: "#",
    },
  ];

  // Triple for infinite smooth scroll + manual jumps
  const displayItems = [...originalItems, ...originalItems, ...originalItems];
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const itemWidth = container.offsetWidth / 3;
    const scrollAmount = direction === "next" ? itemWidth : -itemWidth;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrame;
    const scrollSpeed = 0.8; // Smooth rotation speed

    const animate = () => {
      if (!isPaused) {
        container.scrollLeft += scrollSpeed;

        // Infinite loop logic: Reset to middle set when reaching boundaries
        const totalWidth = container.scrollWidth / 3;
        if (container.scrollLeft >= totalWidth * 2) {
          container.scrollLeft -= totalWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += totalWidth;
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      {/* Header - Stays constrained to site grid */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-24">
        <div className="flex items-end justify-between mb-12 lg:mb-16 px-2">
          <h2 className="text-4xl lg:text-5xl font-serif text-[var(--gw-primary)]">
            News and Events
          </h2>

          {/* Navigation Controls */}
          <div className="flex gap-4 mb-2">
            <button
              onClick={() => scroll("prev")}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="w-12 h-12 rounded-full border border-[var(--gw-primary)] flex items-center justify-center text-[var(--gw-primary)] hover:bg-[var(--gw-primary)] hover:text-white transition-all duration-300 group z-20"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 group-active:-translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("next")}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="w-12 h-12 rounded-full border border-[var(--gw-primary)] flex items-center justify-center text-[var(--gw-primary)] hover:bg-[var(--gw-primary)] hover:text-white transition-all duration-300 group z-20"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 group-active:translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scroller - Edge to Edge */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-hidden scroll-smooth relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {displayItems.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="w-[85vw] md:w-[45vw] lg:w-[32vw] flex-shrink-0 px-3 md:px-4"
          >
            <div className="group cursor-pointer flex flex-col h-full bg-transparent">
              {/* Image with proportional scaling */}
              <div className="relative aspect-[16/10] w-full mb-6 overflow-hidden rounded-2xl bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="px-2 flex flex-col flex-1">
                {/* Category */}
                <p className="text-[var(--gw-secondary)] text-xs font-bold uppercase tracking-wider mb-3">
                  {item.category}
                </p>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-serif text-[var(--gw-primary)] mb-4 leading-tight group-hover:text-[var(--gw-secondary)] transition-colors duration-300 h-[3.6em] overflow-hidden">
                  {item.title}
                </h3>

                {/* Learn More Link */}
                <div className="mt-auto inline-flex items-center text-[#004D49] font-bold text-base leading-6 tracking-normal group/link">
                  <span>Learn more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4 ml-1 transition-transform duration-300 ease-out group-hover/link:translate-x-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function DynamicHero() {
  const topics = [
    "weight issues",
    "contraception",
    "sports injuries",
    "chronic pain",
    "digestive health",
    "mental wellness",
    "women's health",
    "sleep disorders",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger animation
      setIsAnimating(true);

      // After animation finishes (600ms), update the content and reset position
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % topics.length);
        setIsAnimating(false);
      }, 600);
    }, 3000);

    return () => clearInterval(interval);
  }, [topics.length]);

  // The item that will slide in from the top
  const nextItem = topics[(currentIndex + 1) % topics.length];
  // The item currently visible that will slide out to the bottom
  const currentItem = topics[currentIndex];

  return (
    <section className="py-4 px-4 pt-12 sm:px-6 lg:px-8 bg-[var(--gw-light-cream)]">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-5xl md:text-6xl lg:text-[72px] text-[var(--gw-primary)] relative z-30"
          style={{
            fontFamily: "var(--font-gt-super)",
            fontWeight: 700,
            lineHeight: "1.2",
          }}
        >
          Get care today for
        </h2>

        {/* Rotating Wheel Container - matched to line height with strict mask */}
        <div
          className="relative h-[66px] md:h-[76px] lg:h-[86px] overflow-hidden mb-8 z-20"
          style={{ isolation: "isolate", clipPath: "inset(0)" }}
        >
          <div
            className={`absolute inset-0 w-full h-full ${isAnimating ? "transition-transform duration-600 ease-in-out" : ""}`}
            style={{
              transform: isAnimating ? "translateY(100%)" : "translateY(0)",
              willChange: "transform",
            }}
          >
            {/* The NEXT item (positioned above, slides in) */}
            <div className="absolute top-[-100%] w-full h-full flex items-center justify-center">
              <h2
                className="text-5xl md:text-6xl lg:text-[72px] text-[var(--gw-secondary)] whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-gt-super)",
                  fontWeight: 700,
                  lineHeight: "1.2",
                }}
              >
                {topics[(currentIndex + 1) % topics.length]}
              </h2>
            </div>

            {/* The CURRENT item (at 0, slides out to bottom) */}
            <div className="absolute top-0 w-full h-full flex items-center justify-center">
              <h2
                className="text-5xl md:text-6xl lg:text-[72px] text-[var(--gw-secondary)] whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-gt-super)",
                  fontWeight: 700,
                  lineHeight: "1.2",
                }}
              >
                {topics[currentIndex]}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-[var(--gw-powder-blue)] mx-[100px] lg:mx-[500px] mt-12"></div>
    </section>
  );
}

import React from "react";

const reviews = [
  {
    text: "The comprehensive care I received at GW Center for Integrative Medicine has been life-changing. The team truly listens to your concerns and addresses the root cause of health issues.",
    author: "Sarah M.",
    role: "Patient",
  },
  {
    text: "Dr. Kogan and his staff are incredible. They combine the best of modern medicine with holistic approaches. I finally feel heard and understood by my healthcare providers.",
    author: "James T.",
    role: "Patient",
  },
  {
    text: "A refreshing approach to healthcare. The environment is healing, and the practitioners are knowledgeable and compassionate. Highly recommend for anyone seeking true wellness.",
    author: "Emily R.",
    role: "Patient",
  },
];

export default function Reviews() {
  return (
    <section className="py-24 bg-[var(--gw-light-cream)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--gw-primary)] mb-6">
            What our patients say
          </h2>
          <p className="text-[var(--gw-text-muted)] text-lg max-w-2xl mx-auto">
            Real experiences from our community of patients who have found
            healing and balance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative flex flex-col h-full p-10 bg-white rounded-sm shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-50"
            >
              {/* Decorative Quote Mark */}
              <div className="absolute top-8 right-8 text-6xl font-serif text-[var(--gw-primary)] opacity-5 pointer-events-none leading-none">
                &rdquo;
              </div>

              {/* Stars */}
              <div className="flex text-[#C5A065] gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg md:text-[19px] text-[var(--gw-primary)] font-serif italic leading-relaxed mb-8 flex-grow">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-gray-100">
                <p className="font-bold text-[var(--gw-primary)] tracking-wide uppercase text-sm">
                  {review.author}
                </p>
                <p className="text-xs text-[var(--gw-text-muted)] mt-1 font-medium tracking-wider uppercase opacity-70">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

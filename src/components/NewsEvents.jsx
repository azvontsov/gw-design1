export default function NewsEvents() {
  const newsItems = [
    {
      id: 1,
      category: "MENTAL HEALTH",
      title: "A Mindfulness Experience",
      image: "/images/feeling-better.png",
      link: "#"
    },
    {
      id: 2,
      category: "HOLISTIC HEALTH",
      title: "Emergency Chicken Soup: Healing in a Bowl",
      image: "/images/live-well.png",
      link: "#"
    },
    {
      id: 3,
      category: "LONG COVID",
      title: "What Can You Do About Long COVID?",
      image: "/images/mindset.png",
      link: "#"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-medium text-[var(--gw-primary)] mb-4">
            News and Events
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 mb-6 overflow-hidden rounded-2xl bg-gray-200">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="px-2">
                {/* Category */}
                <p className="text-[var(--gw-secondary)] text-xs font-bold uppercase tracking-wider mb-3">
                  {item.category}
                </p>

                {/* Title */}
                <h3 className="text-3xl font-serif text-[var(--gw-primary)] mb-4 leading-tight group-hover:text-[var(--gw-secondary)] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Learn More Link */}
                <a 
                  href={item.link}
                  className="inline-flex items-center text-[#004D49] font-bold text-base leading-6 tracking-normal"
                  style={{ fontFamily: 'Ginto, Helvetica, sans-serif' }}
                >
                  Learn more
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2.5} 
                    stroke="currentColor" 
                    className="w-4 h-4 ml-1 transition-transform duration-300 ease-out group-hover:translate-x-2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

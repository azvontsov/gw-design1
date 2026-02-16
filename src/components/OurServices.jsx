export default function OurServices() {
  const services = [
    {
      id: 1,
      icon: "/images/image1.png",
      title: "Concierge Integrative Medicine Care",
      description: "Personalized, comprehensive care with longer appointments and direct access to your care team.",
      link: "#",
      linkText: "Learn more"
    },
    {
      id: 2,
      icon: "/images/image3.png",
      title: "Acupuncture | Chinese Medicine",
      description: "Acupuncture and Chinese Medicine have been used for thousands of years to treat a wide range of conditions.",
      link: "#",
      linkText: "Learn more"
    },
    {
      id: 3,
      icon: "/images/image2.png",
      title: "Integrative Geriatric Consultations",
      description: "Personalized, comprehensive care for seniors, focusing on quality of life and well-being.",
      link: "#",
      linkText: "Learn more"
    },
    {
      id: 4,
      icon: "/images/image4.png",
      title: "Courses & Medical and Support Groups",
      description: "Educational programs and support groups to empower your health journey.",
      link: "#",
      linkText: "Learn more"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-[72px] leading-[72px] font-medium tracking-normal text-[var(--gw-primary)]  mb-4"
            
          >
            Our Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We provide holistic medicine in DC via over 25 services:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="text-center group">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-48 h-48 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 
                className="text-md font-bold text-[var(--gw-primary)] mb-3 px-4"
                style={{ fontFamily: 'Ginto, Helvetica, sans-serif' }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 px-4 leading-relaxed">
                {service.description}
              </p>

              {/* Link */}
              <a 
                href={service.link}
                className="inline-flex items-center text-[var(--gw-secondary)] font-semibold text-sm hover:text-[var(--gw-primary)] transition-colors duration-300"
              >
                {service.linkText}
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
          ))}
        </div>
      </div>
    </section>
  );
}

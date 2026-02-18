import Link from "next/link";

export default function OurServices() {
  const services = [
    {
      id: 1,
      icon: "/images/image1.png",
      title: "Concierge Integrative Medicine Care",
      description:
        "Personalized, comprehensive care with longer appointments and direct access to your care team.",
      link: "#",
      linkText: "Learn more",
    },
    {
      id: 2,
      icon: "/images/image3.png",
      title: "Acupuncture | Chinese Medicine",
      description:
        "Acupuncture and Chinese Medicine have been used for thousands of years to treat a wide range of conditions.",
      link: "#",
      linkText: "Learn more",
    },
    {
      id: 3,
      icon: "/images/image2.png",
      title: "Integrative Geriatric Consultations",
      description:
        "Personalized, comprehensive care for seniors, focusing on quality of life and well-being.",
      link: "#",
      linkText: "Learn more",
    },
    {
      id: 4,
      icon: "/images/image4.png",
      title: "Courses & Medical and Support Groups",
      description:
        "Educational programs and support groups to empower your health journey.",
      link: "#",
      linkText: "Learn more",
    },
    {
      id: 5,
      icon: "/images/image5.png",
      title: "Celiac Disease",
      description:
        "Treatment for celiac disease, an autoimmune condition triggered by gluten.",
      link: "#",
      linkText: "Learn more",
    },
    {
      id: 6,
      icon: "/images/image6.png",
      title: "Mindfulness Based Stress Reduction Course",
      description:
        "A program that teaches you how to manage stress and anxiety through mindfulness and meditation.",
      link: "#",
      linkText: "Learn more",
    },
    {
      id: 7,
      icon: "/images/image7.png",
      title: "Long Covid",
      description: "Treatment for long-term symptoms of COVID-19.",
      link: "#",
      linkText: "Learn more",
    },
    {
      id: 8,
      icon: "/images/image8.png",
      title: "Weight Management",
      description:
        "Treatment for weight management, including weight loss and weight maintenance.",
      link: "#",
      linkText: "Learn more",
    },
  ];

  return (
    <section className="py-12 bg-[var(--gw-light-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[72px] leading-[72px] font-medium tracking-normal text-[var(--gw-primary)]  mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We provide holistic medicine in DC via over 25 services:
          </p>

          {/* CTA Link */}
          <Link
            href="#services"
            className="inline-flex items-center pt-8 gap-2 text-lg font-bold text-[var(--gw-secondary)] hover:text-[var(--gw-primary)] transition-colors group"
          >
            See all our services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="text-center group">
              {/* Icon */}
              <div className="flex justify-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-48 h-48 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3
                className="text-md font-bold text-[var(--gw-primary)] mb-3 px-4"
                style={{ fontFamily: "Ginto, Helvetica, sans-serif" }}
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

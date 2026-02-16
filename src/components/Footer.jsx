
export default function Footer() {
  return (
    <footer className="bg-[var(--gw-primary)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2">
              <img src="/icons/logo.svg" alt="One Medical" className="h-8 w-auto" />
              <span className="text-2xl font-bold tracking-tight">one medical</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-gray-300">
              One Medical is a membership-based primary care practice on a mission to make getting high-quality care more affordable, accessible, and enjoyable for all.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--gw-secondary-light)]">
              About
            </h3>
            <ul className="mt-4 space-y-4">
              {['Our Story', 'Locations', 'Reviews', 'Providers', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-base text-gray-300 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--gw-secondary-light)]">
              Services
            </h3>
            <ul className="mt-4 space-y-4">
              {['Primary Care', 'Pediatrics', 'Women\'s Health', 'Mental Health', 'LGBTQ+ Care'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-base text-gray-300 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--gw-secondary-light)]">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              {['Help Center', 'Press', 'Partners', 'Terms', 'Privacy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-base text-gray-300 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-[var(--gw-secondary)] pt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} One Medical. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

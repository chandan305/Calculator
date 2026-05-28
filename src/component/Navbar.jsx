import { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assest";
import { useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const serviceLinks = [
  { name: "Car Wash", path: "/services/car-wash" },
  { name: "Car Detailing", path: "/services/detailing" },
  { name: "AC Service", path: "/services/ac-service" },
  { name: "Wheel Care", path: "/services/wheel-care" },
];

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const isServicesActive = location.pathname.startsWith("/services");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/">
          <img className="w-30" src={assets.logoo} alt="Car wash logo" />
        </NavLink>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-indigo-600 underline decoration-2 underline-offset-8"
                      : "text-slate-600 hover:text-indigo-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          <li
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsServicesOpen((prev) => !prev)}
              className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 ${
                isServicesActive
                  ? "text-indigo-600 underline decoration-2 underline-offset-8"
                  : "text-slate-600 hover:text-indigo-600"
              }`}
            >
              Services
              <svg
                className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`absolute left-0 top-full mt-3 w-52 rounded-xl border border-slate-200 bg-white p-2 shadow-xl transition-all duration-200 ${
                isServicesOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              {serviceLinks.map((service) => (
                <NavLink
                  key={service.name}
                  to={service.path}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-indigo-50 font-semibold text-indigo-600"
                        : "text-slate-700 hover:bg-slate-100 hover:text-indigo-600"
                    }`
                  }
                >
                  {service.name}
                </NavLink>
              ))}
            </div>
          </li>
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-indigo-600 hover:text-indigo-600">
            Login
          </button>
          <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg">
            Signup
          </button>
        </div>

        <button
          type="button"
          onClick={toggleMobileMenu}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 transition-colors duration-300 hover:bg-slate-100 hover:text-indigo-600 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`h-6 w-6 transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-90" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-4 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block rounded-md px-2 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600 underline decoration-2 underline-offset-4"
                    : "text-slate-700 hover:bg-slate-100 hover:text-indigo-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="rounded-md border border-slate-200">
            <button
              type="button"
              onClick={() => setIsMobileServicesOpen((prev) => !prev)}
              className={`flex w-full items-center justify-between rounded-md px-2 py-2 text-sm font-medium ${
                isServicesActive ? "bg-indigo-50 text-indigo-600" : "text-slate-700"
              }`}
            >
              <span>Services</span>
              <svg
                className={`h-4 w-4 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isMobileServicesOpen ? "max-h-60 pb-2" : "max-h-0"
              }`}
            >
              {serviceLinks.map((service) => (
                <NavLink
                  key={service.name}
                  to={service.path}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileServicesOpen(false);
                  }}
                  className={({ isActive }) =>
                    `mx-2 mt-1 block rounded-md px-2 py-2 text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-indigo-50 font-semibold text-indigo-600"
                        : "text-slate-700 hover:bg-slate-100 hover:text-indigo-600"
                    }`
                  }
                >
                  {service.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-indigo-600 hover:text-indigo-600">
              Login
            </button>
            <button className="flex-1 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition-all duration-300 hover:bg-indigo-700">
              Signup
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

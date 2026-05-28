import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdOutlineAccessTime } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assest";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={assets.logo}
              alt="Car Wash Service Logo"
              className="h-12 w-12 rounded-full bg-white/10 p-1"
            />
            <h3 className="text-xl font-bold text-white">Car Wash Service</h3>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            We provide premium car wash and detailing with quick service, modern
            tools, and complete customer satisfaction.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="rounded-full border border-slate-700 p-2.5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-400"
                  aria-label="Social media"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ),
            )}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="text-sm transition-all duration-300 hover:pl-1 hover:text-cyan-400"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">Contact Information</h4>
          <div className="mt-4 space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <FaPhoneAlt className="mt-1 text-cyan-400" />
              <span>+91 98765 43210</span>
            </p>
            <p className="flex items-start gap-2">
              <MdEmail className="mt-1 text-cyan-400" />
              <span>support@carwashservice.com</span>
            </p>
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-cyan-400" />
              <span>24 Shine Street, Mumbai, India</span>
            </p>
            <p className="flex items-start gap-2">
              <MdOutlineAccessTime className="mt-1 text-cyan-400" />
              <span>Opening Hours: 8:00 AM - 10:00 PM</span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 px-4 py-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-slate-400">
          © 2026 Car Wash Service. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import {
  FaCalendarAlt,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { assets } from "../assets/assest";

const galleryImages = [

  {
    src: assets.one,
    alt: "Indian car wash exterior service",
  },
  {
    src: assets.two,
    alt: "Car cleaning with foam wash",
  },
  {
    src: assets.three,
    alt: "Premium car detailing station",
  },
  {
    src: assets.four,
    alt: "Modern car wash center",
  },
  {
    src: assets.five,
    alt: "Car polishing and maintenance",
  },
];

const ContactForm = () => {
  return (
    <section className="min-h-[calc(100vh-5rem)] bg-linear-to-br from-slate-100 via-cyan-50 to-blue-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl space-y-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-200"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-56 lg:h-52"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Contact & Book Your Car Wash
          </h1>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Share your details and our team will schedule your premium wash slot.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Booking & Contact Form
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Fill all fields correctly for fast booking confirmation.
            </p>

            <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +91 98XXXXXXX"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your valid email"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Car Type
                </label>
                <input
                  type="text"
                  placeholder="e.g. SUV / Sedan / Hatchback"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Booking Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition-all duration-300 focus:border-cyan-500 focus:bg-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us your car condition and preferred service time..."
                  className="w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-cyan-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-cyan-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-700 hover:shadow-xl"
                >
                  Submit Booking
                </button>
              </div>
            </form>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200 sm:p-8">
            <h3 className="text-2xl font-bold text-slate-900">Information Card</h3>
            <p className="mt-2 text-sm text-slate-600">
              Premium car washing with trained staff, quality products, and fast
              turnaround for daily and luxury vehicles.
            </p>

            <div className="mt-6 space-y-4 text-sm text-slate-700">
              <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
                <FaMapMarkerAlt className="mt-0.5 text-cyan-600" />
                <p>24 Shine Street, Downtown Car Care Hub, Mumbai</p>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                <FaPhoneAlt className="text-cyan-600" />
                <p>+91 98765 43210</p>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                <FaEnvelope className="text-cyan-600" />
                <p>support@shinewash.com</p>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                <FaClock className="text-cyan-600" />
                <p>Opening Time: 8:00 AM</p>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                <FaClock className="text-cyan-600" />
                <p>Closing Time: 10:00 PM</p>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                <FaCalendarAlt className="text-cyan-600" />
                <p>Working Days: Monday - Sunday</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-cyan-300 bg-cyan-50 p-6 text-center">
              <p className="text-sm font-semibold text-cyan-700">
                Google Maps Location Placeholder
              </p>
              <p className="mt-2 text-xs text-cyan-800">
                Embed map iframe here when location link is ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

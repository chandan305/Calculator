import Hero from "../component/Hero";
import ContactForm from "../component/ContactForm";
import { assets } from "../assets/assest";
import { Link } from "react-router-dom";
import {
  
  FaCheckCircle,
  FaClock,
  FaMoneyBillWave,
  FaShieldAlt,
  FaSnowflake,
  FaSoap,
  FaStar,
  FaUsers,
} from "react-icons/fa";

const serviceCards = [
  {
    title: "Car Wash",
    description: "Deep exterior foam wash with premium shine finishing.",
    image: assets.one,
    icon: FaSoap,
    path: "/services/car-wash",
  },
  {
    title: "Detailing",
    description: "Interior and exterior detailing for showroom-level results.",
    image: assets.four,
    icon: FaStar,
    path: "/services/detailing",
  },
  {
    title: "AC Service",
    description: "Improve cabin cooling with complete AC inspection and care.",
    image: assets.three,
    icon: FaSnowflake,
    path: "/services/ac-service",
  },
  {
    title: "Wheel Care",
    description: "Alignment, balancing, and tyre care for safer driving.",
    image: assets.two,
    icon: FaCheckCircle,
    path: "/services/wheel-care",
  },
];

const chooseUs = [
  { title: "Trusted Service", icon: FaShieldAlt },
  { title: "Fast Delivery", icon: FaClock },
  { title: "Expert Team", icon: FaUsers },
  { title: "Affordable Pricing", icon: FaMoneyBillWave },
];

const testimonials = [
  {
    name: "Ananya Sharma",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    text: "My car looked brand new after one wash. Great team and perfect finish.",
  },
  {
    name: "Rahul Mehta",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    text: "Fast booking and very professional service. I use them every month now.",
  },
  {
    name: "Simran Kaur",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80",
    text: "Best detailing service I have tried. Worth every rupee for premium quality.",
  },
];

const galleryItems = [
  { image: assets.one, title: "Premium Exterior Wash" },
  { image: assets.two, title: "Wheel & Tyre Detailing" },
  { image: assets.three, title: "Professional AC Care" },
  { image: assets.four, title: "Complete Car Polishing" },
  { image: assets.five, title: "Luxury Interior Cleaning" },
];

const Home = () => {
  return (
    <div className="bg-linear-to-b from-slate-100 via-cyan-50 to-blue-100">
      <Hero />

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 rounded-3xl bg-white/70 p-6 shadow-xl shadow-slate-200 backdrop-blur sm:p-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={assets.four}
              alt="Car service workshop"
              className="h-[320px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[420px]"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
              About Company
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Premium Care For Every Car
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              We are a trusted car care company focused on quality, speed, and
              complete customer satisfaction with modern tools and expert staff.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex rounded-xl bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-700"
            >
              Read More
            </Link>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { value: "500+", label: "Happy Clients" },
                { value: "5+", label: "Years Service" },
                { value: "1000+", label: "Cars Cleaned" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-white p-4 text-center shadow-md shadow-slate-200">
                  <p className="text-2xl font-extrabold text-cyan-700">{item.value}</p>
                  <p className="text-xs font-semibold text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
            Our Services
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="overflow-hidden rounded-2xl bg-white/80 shadow-lg shadow-slate-200 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-44 w-full object-cover"
                  />
                  <div className="p-5">
                    <div className="inline-flex rounded-lg bg-cyan-100 p-2 text-cyan-700">
                      <Icon />
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                    <Link
                      to={service.path}
                      className="mt-4 inline-flex rounded-lg border border-cyan-300 px-4 py-2 text-sm font-semibold text-cyan-700 transition-all duration-300 hover:bg-cyan-600 hover:text-white"
                    >
                      Learn More
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
            Our Premium Car Services
          </h2>
          <div className="mt-8 overflow-x-scroll no-scrollbar snap-x snap-mandatory">
            <div className="flex w-max gap-5 pb-2 home-scroll-track">
              {[...galleryItems, ...galleryItems].map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="group relative w-[320px] flex-none snap-center overflow-hidden rounded-2xl shadow-lg shadow-slate-300 sm:w-[380px]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/80 to-transparent p-4">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
            Why Choose Us
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {chooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white/80 p-6 text-center shadow-lg shadow-slate-200 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mx-auto inline-flex rounded-full bg-cyan-100 p-3 text-cyan-700">
                    <Icon />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((review) => (
              <article
                key={review.name}
                className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">{review.name}</p>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, index) => (
                        <FaStar key={index} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{review.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 w-full max-w-7xl rounded-2xl bg-white/60 p-6 text-center shadow-md shadow-slate-200 backdrop-blur">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Book Your Service Today
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Fill out the booking form below and our team will contact you quickly.
          </p>
        </div>
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;

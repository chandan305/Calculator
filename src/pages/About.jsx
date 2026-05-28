import {
  FaBolt,
  FaCheckCircle,
  FaHeadset,
  FaLeaf,
  FaShieldAlt,
  FaStar,
  FaUsers,
  FaWallet,
} from "react-icons/fa";

const stats = [
  { title: "500+", subtitle: "Happy Customers" },
  { title: "5+", subtitle: "Years Experience" },
  { title: "1000+", subtitle: "Cars Washed" },
  { title: "Fast", subtitle: "Premium Service" },
];

const whyChooseUs = [
  { icon: FaWallet, title: "Affordable Price", text: "Premium service at fair and transparent pricing." },
  { icon: FaUsers, title: "Expert Team", text: "Skilled professionals trained for all car types." },
  { icon: FaBolt, title: "Quick Service", text: "Efficient workflows for fast delivery without compromise." },
  { icon: FaLeaf, title: "Eco Friendly Washing", text: "Water-smart and eco-safe products for better care." },
  { icon: FaHeadset, title: "24/7 Support", text: "Helpful customer support whenever you need us." },
  { icon: FaShieldAlt, title: "Premium Quality", text: "Strict quality checks for spotless final results." },
];

const teamMembers = [
  {
    name: "Arjun Mehta",
    role: "Operations Manager",
    text: "Leads daily operations and ensures every wash meets quality standards.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Riya Sharma",
    role: "Detailing Specialist",
    text: "Expert in deep cleaning, interior care, and premium finishing techniques.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Karan Verma",
    role: "Customer Success Lead",
    text: "Handles customer bookings and guarantees a smooth service experience.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
];

const testimonials = [
  {
    name: "Neha Kapoor",
    review: "Amazing service. My car looked showroom new and the team was very polite.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Rohit Jain",
    review: "Fast booking, on-time delivery, and excellent detailing quality. Highly recommended.",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Simran Gill",
    review: "Affordable and premium both. Their eco-friendly wash really impressed me.",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80",
  },
];

const About = () => {
  return (
    <div className="scroll-smooth bg-linear-to-b from-slate-950 via-slate-900 to-slate-800 page-enter">
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1533636284078-79a0f3a4623f?auto=format&fit=crop&w=1600&q=80)",
        }}
      >
        <div className="bg-slate-950/70">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              Home / About
            </p>
            <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
              Know About Our Journey
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
              We are building India&apos;s most trusted premium car care brand with
              consistency, transparency, and service excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200 lg:grid-cols-2">
          <div className="p-6 sm:p-10">
            <p className="inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-700">
              Premium Car Care Company
            </p>
            <h1 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
              About Our Car Wash Service
            </h1>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              We deliver premium, reliable, and eco-friendly car washing with a
              customer-first approach. Our goal is simple: spotless results,
              faster turnaround, and complete peace of mind.
            </p>
          </div>

          <div className="group h-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=1400&q=80"
              alt="Premium car wash service"
              className="h-full min-h-[280px] w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 rounded-3xl bg-white p-6 shadow-xl shadow-slate-200 sm:p-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1200&q=80"
              alt="Car wash team working"
              className="h-[320px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[420px]"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              About Company
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              We started with one mission: make premium car care accessible to
              every vehicle owner. From daily cleanups to deep detailing, we
              follow professional methods and quality materials.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Customers trust us because we are transparent, punctual, and
              consistent. Every car is treated with attention, safety, and care.
            </p>

            <div className="mt-5 space-y-3">
              <div className="flex items-start gap-2 text-slate-700">
                <FaCheckCircle className="mt-1 text-cyan-600" />
                <p>
                  <span className="font-semibold">Mission:</span> Deliver
                  reliable, eco-conscious, and premium cleaning.
                </p>
              </div>
              <div className="flex items-start gap-2 text-slate-700">
                <FaCheckCircle className="mt-1 text-cyan-600" />
                <p>
                  <span className="font-semibold">Trust:</span> Proven results,
                  transparent pricing, and trained professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.subtitle}
              className="rounded-2xl bg-white p-6 text-center shadow-lg shadow-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-3xl font-extrabold text-cyan-700">{item.title}</h3>
              <p className="mt-2 text-sm font-medium text-slate-600">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Why Choose Us
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-3 inline-flex rounded-lg bg-cyan-100 p-3 text-cyan-700">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Meet Our Team
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-56 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                  <p className="text-sm font-semibold text-cyan-700">{member.role}</p>
                  <p className="mt-2 text-sm text-slate-600">{member.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Customer Reviews
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((review) => (
              <div
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
                    <h3 className="text-sm font-bold text-slate-900">{review.name}</h3>
                    <div className="flex text-amber-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">"{review.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

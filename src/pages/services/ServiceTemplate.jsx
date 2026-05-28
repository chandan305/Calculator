import { FaCheckCircle } from "react-icons/fa";

const ServiceTemplate = ({
  theme,
  title,
  description,
  heroImage,
  features,
  gallery,
  pricing,
}) => {
  const bookingSectionId = "service-booking-form";

  return (
    <div className={`bg-linear-to-b ${theme.pageGradient}`}>
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="bg-slate-950/65">
          <div className="mx-auto flex min-h-[52vh] w-full max-w-7xl flex-col items-start justify-center px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="max-w-3xl text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
              {description}
            </p>
            <a
              href={`#${bookingSectionId}`}
              className={`mt-7 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${theme.primaryButton}`}
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Service Features
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-lg shadow-slate-200 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`inline-flex rounded-lg p-3 ${theme.iconBg}`}>
                  <Icon className={`text-lg ${theme.iconColor}`} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {feature.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Service Gallery
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <div
              key={item}
              className="group overflow-hidden rounded-2xl shadow-lg shadow-slate-200"
            >
              <img
                src={item}
                alt="Car service work"
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Pricing Packages
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {pricing.map((pack) => (
            <article
              key={pack.name}
              className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-lg font-bold text-slate-900">{pack.name}</h3>
              <p className={`mt-2 text-3xl font-extrabold ${theme.priceColor}`}>
                {pack.price}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {pack.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <FaCheckCircle className={`mt-0.5 ${theme.iconColor}`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Why Choose Us
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Professional Staff",
            "Fast Service",
            "Affordable Price",
            "Customer Satisfaction",
          ].map((point) => (
            <div
              key={point}
              className="rounded-xl border border-white/70 bg-white/80 p-4 text-center text-sm font-semibold text-slate-700 shadow-md shadow-slate-200 backdrop-blur"
            >
              {point}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-14 pt-12 sm:px-6 lg:px-8">
        <div className={`rounded-3xl p-8 text-center text-white shadow-2xl ${theme.ctaBg}`}>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready to Give Your Car Premium Care?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/90 sm:text-base">
            Book your slot today and experience fast, reliable, and professional
            service from our expert team.
          </p>
          <a
            href={`#${bookingSectionId}`}
            className="mt-6 inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Book Service Now
          </a>
        </div>
      </section>

      <section
        id={bookingSectionId}
        className="mx-auto w-full max-w-7xl px-4 pb-16 pt-2 sm:px-6 lg:px-8"
      >
        <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-xl shadow-slate-200 backdrop-blur sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Book {title}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Fill this form and our team will call you shortly to confirm your
            booking.
          </p>

          <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Service
              </label>
              <input
                type="text"
                value={title}
                readOnly
                className="w-full rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm text-slate-700 outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your service requirement..."
                className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-500"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className={`w-full rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${theme.primaryButton}`}
              >
                Submit Booking
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ServiceTemplate;

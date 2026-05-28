import { assets } from "../assets/assest";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-5rem)] bg-linear-to-br from-slate-100 via-blue-50 to-cyan-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-11rem)] w-full max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Home / Premium Car Care
          </p>
          <span className="inline-flex animate-pulse rounded-full border border-cyan-200 bg-white/70 px-4 py-1 text-sm font-semibold text-cyan-700 shadow-sm">
            Best Car Wash Service
          </span>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
            Premium Car Care
          </p>

          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Make Your Car Shine Like New
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Fast, eco-friendly, and professional car washing service for every
            vehicle. We use premium products and expert techniques to keep your
            car spotless, protected, and road-ready.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="rounded-xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-700 hover:shadow-xl">
              Book Now
            </button>
            <button className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-600 hover:text-cyan-700">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            src={assets.four}
            alt=""
            className="h-[320px] w-full rounded-3xl object-cover shadow-2xl shadow-slate-300 transition-transform duration-500 hover:scale-[1.02] sm:h-[420px] lg:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

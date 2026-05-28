import { NavLink, Outlet } from "react-router-dom";

const serviceTabs = [
  { name: "Car Wash", path: "/services/car-wash" },
  { name: "Car Detailing", path: "/services/detailing" },
  { name: "AC Service", path: "/services/ac-service" },
  { name: "Wheel Care", path: "/services/wheel-care" },
];

const Services = () => {
  return (
    <section className="min-h-[calc(100vh-5rem)] bg-linear-to-b from-slate-100 via-indigo-50 to-blue-100 page-enter">
      <div
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1600&q=80)",
        }}
      >
        <div className="bg-slate-950/65">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              Home / Services
            </p>
            <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
              Professional Car Services
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
              Explore our trusted service categories and choose the perfect care
              package for your vehicle.
            </p>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white/80 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap gap-3">
          {serviceTabs.map((tab) => (
            <NavLink
              key={tab.name}
              to={tab.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                    : "bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
                }`
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </div>
      </div>

      <Outlet />
    </section>
  );
};

export default Services;

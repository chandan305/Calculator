import { Link } from "react-router-dom";
import { assets } from "../../assets/assest";

const overviewCards = [
  {
    title: "Car Wash",
    text: "Professional exterior wash and shine treatment.",
    path: "/services/car-wash",
    image: assets.one,
  },
  {
    title: "Car Detailing",
    text: "Interior and exterior premium detailing package.",
    path: "/services/detailing",
    image: assets.four,
  },
  {
    title: "AC Service",
    text: "Cooling optimization and complete AC care.",
    path: "/services/ac-service",
    image: assets.three,
  },
  {
    title: "Wheel Care",
    text: "Alignment, balancing and tyre maintenance.",
    path: "/services/wheel-care",
    image: assets.two,
  },
];

const ServicesOverview = () => {
  return (
    <section className="page-enter mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {overviewCards.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              <Link
                to={item.path}
                className="mt-4 inline-flex rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-700"
              >
                Explore Service
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;

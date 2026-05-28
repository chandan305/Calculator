import ContactForm from "../component/ContactForm";

const Contact = () => {
  return (
    <div className="bg-linear-to-b from-slate-50 to-cyan-50 page-enter">
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?auto=format&fit=crop&w=1600&q=80)",
        }}
      >
        <div className="bg-slate-950/60">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              Home / Contact
            </p>
            <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
              Get In Touch With Us
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
              Share your requirements and book your service slot with our team.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default Contact;

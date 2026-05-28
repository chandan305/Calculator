import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CarWash from "./pages/services/CarWash";
import Detailing from "./pages/services/Detailing";
import ACService from "./pages/services/ACService";
import WheelCare from "./pages/services/WheelCare";
import ServicesOverview from "./pages/services/ServicesOverview";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />}>
            <Route index element={<ServicesOverview />} />
            <Route path="car-wash" element={<CarWash />} />
            <Route path="detailing" element={<Detailing />} />
            <Route path="ac-service" element={<ACService />} />
            <Route path="wheel-care" element={<WheelCare />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;

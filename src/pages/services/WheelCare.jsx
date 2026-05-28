import { FaCheckCircle, FaCog, FaTachometerAlt, FaTruck } from "react-icons/fa";
import ServiceTemplate from "./ServiceTemplate";

const WheelCare = () => {
  return (
    <ServiceTemplate
      theme={{
        pageGradient: "from-emerald-100 via-teal-50 to-lime-100",
        primaryButton: "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-700",
        priceColor: "text-emerald-700",
        ctaBg: "bg-linear-to-r from-emerald-700 to-teal-700",
      }}
      title="Wheel Care & Alignment Service"
      description="Keep your wheels safe and stable with alignment checks, balancing, tyre care, and complete wheel maintenance."
      heroImage="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80"
      features={[
        { icon: FaCog, title: "Wheel Alignment", text: "Precision alignment improves handling and tyre life." },
        { icon: FaTachometerAlt, title: "Tyre Pressure Care", text: "Accurate pressure checks for comfort and mileage." },
        { icon: FaCheckCircle, title: "Wheel Balancing", text: "Balance corrections reduce vibration at high speed." },
        { icon: FaTruck, title: "Tyre Rotation", text: "Even tyre wear with planned front-rear rotation." },
      ]}
      gallery={[
        "https://images.unsplash.com/photo-1632823471565-1ecdf5c833ca?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=1000&q=80",
      ]}
      pricing={[
        { name: "Basic Package", price: "₹799", points: ["Tyre check", "Air pressure", "Quick wheel wash"] },
        { name: "Premium Package", price: "₹1,499", points: ["Alignment test", "Balancing", "Tyre rotation"] },
        { name: "Deluxe Package", price: "₹2,299", points: ["Full wheel care", "Deep rim cleaning", "Safety report"] },
      ]}
    />
  );
};

export default WheelCare;

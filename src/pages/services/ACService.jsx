import { FaFan, FaSnowflake, FaTemperatureLow, FaWind } from "react-icons/fa";
import ServiceTemplate from "./ServiceTemplate";

const ACService = () => {
  return (
    <ServiceTemplate
      theme={{
        pageGradient: "from-indigo-100 via-blue-50 to-cyan-100",
        primaryButton: "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-700",
        priceColor: "text-indigo-700",
        ctaBg: "bg-linear-to-r from-indigo-700 to-cyan-700",
      }}
      title="Car AC Service & Cooling Care"
      description="Improve cooling performance with gas refill, vent cleaning, filter replacement, and full AC system health check."
      heroImage="https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1600&q=80"
      features={[
        { icon: FaSnowflake, title: "Cooling Performance", text: "Fast cabin cooling restored with professional AC optimization." },
        { icon: FaWind, title: "Vent Sanitization", text: "Air vents cleaned and sanitized for fresh airflow." },
        { icon: FaFan, title: "Blower Inspection", text: "Fan and blower components checked for smooth operation." },
        { icon: FaTemperatureLow, title: "Gas Refill", text: "Correct refrigerant level for consistent cooling output." },
      ]}
      gallery={[
        "https://images.unsplash.com/photo-1537041373298-55dbb9d8b4de?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1000&q=80",
      ]}
      pricing={[
        { name: "Basic Package", price: "₹899", points: ["AC checkup", "Filter cleaning", "Cooling test"] },
        { name: "Premium Package", price: "₹1,699", points: ["Gas top-up", "Vent cleaning", "Leak inspection"] },
        { name: "Deluxe Package", price: "₹2,699", points: ["Full AC overhaul", "Component tuning", "Deep sanitization"] },
      ]}
    />
  );
};

export default ACService;

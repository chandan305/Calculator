import { FaShieldAlt, FaSoap, FaTint, FaWater } from "react-icons/fa";
import ServiceTemplate from "./ServiceTemplate";

const CarWash = () => {
  return (
    <ServiceTemplate
      theme={{
        pageGradient: "from-sky-100 via-cyan-50 to-blue-100",
        primaryButton: "bg-cyan-600 hover:bg-cyan-700 shadow-cyan-200",
        iconBg: "bg-cyan-100",
        iconColor: "text-cyan-700",
        priceColor: "text-cyan-700",
        ctaBg: "bg-linear-to-r from-cyan-700 to-blue-700",
      }}
      title="Professional Car Wash Service"
      description="Restore your car's shine with foam wash, deep exterior cleaning, spot-free rinse, and premium polish by trained professionals."
      heroImage="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1600&q=80"
      features={[
        { icon: FaSoap, title: "Foam Cleaning", text: "High-foam wash removes dirt safely without damaging paint." },
        { icon: FaWater, title: "Spot-Free Rinse", text: "Filtered water rinse for streak-free glossy finishing." },
        { icon: FaShieldAlt, title: "Paint Protection", text: "Protective coat keeps paint fresh against dust and UV." },
        { icon: FaTint, title: "Tyre Dressing", text: "Complete tyre and wheel cleaning with shine finish." },
      ]}
      gallery={[
        "https://images.unsplash.com/photo-1605514449459-5a2f8d9f4e44?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1000&q=80",
      ]}
      pricing={[
        { name: "Basic Package", price: "₹699", points: ["Exterior wash", "Tyre cleaning", "Quick dry"] },
        { name: "Premium Package", price: "₹1,299", points: ["Foam wash", "Wax coat", "Dashboard cleaning"] },
        { name: "Deluxe Package", price: "₹1,999", points: ["Full wash", "Paint protection", "Interior vacuum"] },
      ]}
    />
  );
};

export default CarWash;

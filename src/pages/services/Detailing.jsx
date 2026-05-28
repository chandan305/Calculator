import { FaBrush, FaCarSide, FaCrown, FaGem } from "react-icons/fa";
import ServiceTemplate from "./ServiceTemplate";

const Detailing = () => {
  return (
    <ServiceTemplate
      theme={{
        pageGradient: "from-amber-100 via-orange-50 to-yellow-100",
        primaryButton: "bg-amber-600 hover:bg-amber-700 shadow-amber-200",
        iconBg: "bg-amber-100",
        iconColor: "text-amber-700",
        priceColor: "text-amber-700",
        ctaBg: "bg-linear-to-r from-amber-700 to-orange-700",
      }}
      title="Premium Car Detailing Service"
      description="From deep interior restoration to high-gloss exterior correction, our detailing service brings showroom-level finish and protection."
      heroImage="https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=80"
      features={[
        { icon: FaGem, title: "Deep Interior Care", text: "Seats, dashboard, mats, and panels get complete premium detailing." },
        { icon: FaBrush, title: "Paint Correction", text: "Removes swirl marks and restores smooth, reflective surface." },
        { icon: FaCrown, title: "Luxury Finishing", text: "High-end polish and ceramic top coat for rich glossy look." },
        { icon: FaCarSide, title: "All Body Panels", text: "Uniform detail treatment on bonnet, doors, bumpers, and trims." },
      ]}
      gallery={[
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
      ]}
      pricing={[
        { name: "Basic Package", price: "₹1,299", points: ["Interior vacuum", "Dashboard polish", "Quick body wax"] },
        { name: "Premium Package", price: "₹2,499", points: ["Deep cleaning", "Paint correction", "Leather treatment"] },
        { name: "Deluxe Package", price: "₹3,999", points: ["Full detailing", "Ceramic layer", "Long-term protection"] },
      ]}
    />
  );
};

export default Detailing;

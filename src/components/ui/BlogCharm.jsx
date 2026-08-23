import {
  FaBookOpen,
  FaBookmark,
  FaStar,
  FaGraduationCap,
  FaFlask,
  FaBrain,
  FaLaptopCode,
  FaBriefcase,
  FaUsers,
  FaRocket,
  FaLightbulb,
  FaArrowTrendUp,
  FaPenNib,
} from "react-icons/fa6";
import { HiSparkles, HiDocumentText } from "react-icons/hi2";

export const BlogCharm = ({ type = "book", color = "bg-retroOrange" }) => {
  const renderIcon = () => {
    const iconClass = "w-4 h-4 text-black shrink-0";

    switch (type) {
      case "magazine":
      case "book":
        return <FaBookOpen className={iconClass} />;
      case "bookmark":
        return <FaBookmark className={iconClass} />;
      case "academic":
      case "research":
      case "brain":
        return <FaBrain className={iconClass} />;
      case "flask":
        return <FaFlask className={iconClass} />;
      case "document":
        return <HiDocumentText className={iconClass} />;
      case "sparkles":
        return <HiSparkles className={iconClass} />;
      case "code":
      case "tutorial":
        return <FaLaptopCode className={iconClass} />;
      case "career":
      case "briefcase":
        return <FaBriefcase className={iconClass} />;
      case "community":
      case "users":
        return <FaUsers className={iconClass} />;
      case "launch":
      case "rocket":
        return <FaRocket className={iconClass} />;
      case "idea":
      case "lightbulb":
        return <FaLightbulb className={iconClass} />;
      case "trend":
        return <FaArrowTrendUp className={iconClass} />;
      case "pen":
      case "write":
        return <FaPenNib className={iconClass} />;
      case "star":
      default:
        return <FaStar className={iconClass} />;
    }
  };

  return (
    <div className="absolute -top-3 right-4 z-40 pointer-events-none opacity-0 group-hover:opacity-100 animate-charm-swing flex flex-col items-center">
      {/* Metallic Keychain Ring & String */}
      <div className="w-2.5 h-2.5 rounded-full border-2 border-black bg-gray-300 shadow-sm" />
      <div className="w-0.5 h-3 bg-black" />

      {/* Tactile Charm Container */}
      <div
        className={`p-2 rounded-xl border-2 border-black ${color} shadow-brutal flex items-center justify-center`}
      >
        {renderIcon()}
      </div>
    </div>
  );
};

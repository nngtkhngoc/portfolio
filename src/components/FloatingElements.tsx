import { motion } from "framer-motion";
import { Heart, Cloud, Star, Coffee } from "lucide-react";

const FloatingElements = () => {
  // Generate random elements
  const generateElements = () => {
    const elements = [];
    const iconTypes = [Heart, Cloud, Star, Coffee];

    for (let i = 0; i < 15; i++) {
      const IconComponent =
        iconTypes[Math.floor(Math.random() * iconTypes.length)];
      const size = Math.floor(Math.random() * 16) + 10; // 10-25px
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const delay = Math.random() * 5;
      const duration = Math.random() * 3 + 4; // 4-7s

      elements.push({
        id: i,
        icon: IconComponent,
        size,
        left,
        top,
        delay,
        duration,
        color: "primary",
      });
    }

    return elements;
  };

  const floatingElements = generateElements();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute text-${element.color}`}
          style={{
            left: element.left,
            top: element.top,
          }}
          initial={{ opacity: 0.3, y: 0 }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            y: [0, -30, 0],
            x: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <element.icon size={element.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;

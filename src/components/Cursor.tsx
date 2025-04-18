import { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

const BubbleCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useSpring(0, { stiffness: 150, damping: 15 });
  const cursorY = useSpring(0, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };

    const handleCursorStyle = () => {
      const hoveredElement = document.elementFromPoint(
        mousePosition.x,
        mousePosition.y
      );
      const isClickable = hoveredElement?.matches(
        'button, a, input, textarea, [role="button"]'
      );
      setIsPointer(!!isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", handleCursorStyle);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", handleCursorStyle);
    };
  }, [cursorX, cursorY, mousePosition.x, mousePosition.y]);

  return (
    <>
      <motion.div
        className="hidden md:block fixed pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <div
          className={`relative ${
            isPointer ? "scale-150" : "scale-100"
          } transition-transform duration-200`}
        >
          <div className="absolute w-6 h-6 bg-side rounded-full opacity-30" />
          <div className="absolute w-3 h-3 bg-primary   rounded-full left-1.5 top-1.5" />
        </div>
      </motion.div>
    </>
  );
};

export default BubbleCursor;

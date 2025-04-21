"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedSectionProps {
  children: React.ReactNode;
  triggerKey: string; // use this to retrigger animation
}

const AnimatedSectionText = ({
  children,
  triggerKey,
}: AnimatedSectionProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // 🔁 retrigger animation on key change
  useEffect(() => {
    controls.set("hidden"); // reset first
    controls.start("visible");
  }, [triggerKey, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      variants={{
        visible: { opacity:1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSectionText;

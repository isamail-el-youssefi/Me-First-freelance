// app/components/PageLoader.tsx
"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Don't show preloader on homepage
    const isHomepage = pathname === "/" || pathname.match(/^\/[a-z]{2}(\/)?$/);

    if (isHomepage) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setLoading(true);

    const maxWaitTime = 5000; // Never wait more than 5s
    const minDisplayTime = 1400; // Always show at least 800ms

    const startTime = Date.now();
    let hasFinished = false;

    const hide = () => {
      if (hasFinished) return;
      hasFinished = true;

      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minDisplayTime - elapsed);

      setTimeout(() => setLoading(false), remaining);
    };

    // Hide when page loads OR after max time
    const maxTimer = setTimeout(hide, maxWaitTime);
    console.log("ismail", document.readyState === "complete");
    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide);
    }

    return () => {
      clearTimeout(maxTimer);
      window.removeEventListener("load", hide);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.1, ease: "circIn" }}
          className="fixed inset-0 z-50 bg-white flex items-center justify-center"
        >
          <div className="text-center">
            {/* Animated text with staggered letter animation */}
            <div className="text-2xl md:text-5xl text-amber-950 font-semibold tracking-wider">
              {"LOVER OF SAHARA".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(15px)" }}
              animate={{ opacity: 1, filter: "blur(0)" }}
              transition={{ duration: 0.7, delay: 0.15}}
              className="flex justify-center mt-8 space-x-2"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: "easeInOut",
                  }}
                  className="w-2 h-2 bg-amber-600 rounded-full"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

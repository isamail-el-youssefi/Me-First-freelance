
'use client';

import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-20 right-24 z-50 hidden lg:block">
      <button
        onClick={scrollToTop}
        className={`
          bg-amber-900 hover:bg-amber-950 text-white px-4 py-4 rounded-full 
          shadow-lg transition-all duration-700 ease-in-out hover:scale-105
          flex flex-col items-center gap-1 transform 
          ${isVisible 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-0 translate-y-4 pointer-events-none'
          }
        `}
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
        

      </button>
    </div>
  );
};

export default BackToTop;
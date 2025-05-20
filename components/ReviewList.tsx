import React, { useState, useRef, useEffect } from "react";
import { Review } from "@/app/api/reviews/route";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ReviewListProps {
  reviews: Review[];
  isLoading: boolean;
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews, isLoading }) => {
  const [expanded, setExpanded] = useState(false);
  const [needsExpansion, setNeedsExpansion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [heightThreshold, setHeightThreshold] = useState(530);
  
  // Update height threshold based on screen size
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768; // Common breakpoint for mobile
      setHeightThreshold(isMobile ? 361 : 550);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Check if content height exceeds threshold
  useEffect(() => {
    if (containerRef.current) {
      const contentHeight = containerRef.current.scrollHeight;
      setNeedsExpansion(contentHeight > heightThreshold);
    }
  }, [reviews, heightThreshold]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-amber-500 border-r-2 border-b-2 border-transparent"></div>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="p-6 text-center text-amber-800">
        No reviews yet. Be the first to share your experience!
      </div>
    );
  }

  return (
    <div className="relative">
      <div 
        ref={containerRef}
        className={`divide-y divide-amber-200 ${!expanded && needsExpansion ? 'overflow-hidden' : ''}`}
        style={{ maxHeight: !expanded && needsExpansion ? `${heightThreshold}px` : 'none' }}
      >
        {reviews.map((review) => (
          <div key={review.id} className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-amber-900">{review.fullName}</h3>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-500">
                        {i < review.rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-amber-700">{review.date}</span>
                </div>
              </div>
            </div>
            <div className="mt-2 w-full max-w-full overflow-hidden">
              <p 
                className="text-amber-800 break-all whitespace-pre-wrap text-sm" 
                style={{ 
                  wordBreak: 'break-word', 
                  overflowWrap: 'break-word',
                  maxWidth: '100%',
                  display: 'block'
                }}
              >
                {review.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Gradient overlay when collapsed */}
      {needsExpansion && !expanded && (
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"></div>
      )}
      
      {/* Show/Hide button if content needs expansion */}
      {needsExpansion && (
        <div className="flex justify-center mt-2">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-full px-4 py-2 transition-colors duration-300 mb-4 md:mb-4"
          >
            {expanded ? (
              <>
                Show Less <ChevronUp size={16} />
              </>
            ) : (
              <>
                Show More <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewList;
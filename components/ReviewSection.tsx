import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { User, Star } from "lucide-react";
import ReviewModal from "./ReviewModal";

// Define the Review interface
interface Review {
  id: string;
  fullName: string;
  rating: number;
  comment: string;
  tripId: string;
  createdAt: string;
}

interface ReviewSectionProps {
  tripId: string;
  tripName: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ tripId, tripName }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [displayCount, setDisplayCount] = useState(6); // Start by showing 6 reviews
  const [expandedReviews, setExpandedReviews] = useState<
    Record<string, boolean>
  >({});

  // Fetch reviews
  const fetchReviews = useCallback(async () => {
    try {
      setIsLoadingReviews(true);
      const response = await fetch(`/api/reviews?tripId=${tripId}`);
      if (response.ok) {
        const data = await response.json();
        setReviews(data.reviews);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setIsLoadingReviews(false);
    }
  }, [tripId]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  // Handle when a new review is added
  const handleReviewAdded = () => {
    fetchReviews();
  };

  // Load more or reset
  const handleLoadMore = () => {
    if (displayCount < reviews.length) {
      setDisplayCount((prev) => Math.min(prev + 4, reviews.length));
    } else {
      setDisplayCount(6); // Reset to 6
    }
  };

  // Toggle expanded state for a review
  const toggleExpand = (id: string) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Calculate average rating
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : "0.0";

  return (
    <section className="max-container padding-container py-12 bg-amber-50 rounded-xl mt-16">
      <div className="flex flex-row justify-between items-center pb-8 md:px-16">
        <div>
          <div className="flex md:gap-4 gap-[5px] items-center">
            <h2 className="text-lg md:text-3xl font-medium text-amber-900 pb-3">
              Reviews
            </h2>
            <span className="text-amber-700 text-md md:text-lg pb-2">
              ({reviews.length})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex gap-[6px]">
              <span className="text-amber-900 font-medium pl-1">
                {averageRating}
              </span>
              <Star
                size={15}
                className="text-amber-600 fill-amber-600 mt-[3px]"
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => setReviewModalOpen(true)}
          className="hover:bg-amber-50 border-[1px] border-amber-900 bg-amber-900 text-amber-50 duration-300 hover:text-amber-900 font-medium hover:font-medium py-2 md:px-6 px-3 rounded-full transition mt-4 md:mt-0 text-sm md:text-lg mb-7 md:mb-0"
        >
          Write a Review
        </button>
      </div>

      {isLoadingReviews ? (
        <div className="flex justify-center items-center p-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-amber-900"></div>
        </div>
      ) : reviews.length === 0 ? (
        <div className="text-center p-10 bg-amber-50 rounded-lg">
          <p className="text-amber-900">
            No reviews yet. Be the first to share your experience!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 2xl:px-16">
          {reviews.slice(0, displayCount).map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-amber-100"
            >
              <div className="flex items-center justify-between text-xl  gap-3 mb-1">
                <h3 className="font-medium text-amber-900">
                  {review.fullName}
                </h3>
                <p className="text-sm text-amber-700">
                  {new Date(review.createdAt).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={12}
                    className={`${
                      review.rating >= star
                        ? "text-amber-600 fill-amber-600"
                        : "text-amber-500"
                    }`}
                  />
                ))}
              </div>
              <p className="text-amber-900 break-words">
                {expandedReviews[review.id] || review.comment.length <= 150
                  ? review.comment
                  : `${review.comment.slice(0, 150)}...`}
              </p>
              {review.comment.length > 150 && (
                <button
                  onClick={() => toggleExpand(review.id)}
                  className="text-sm text-amber-700 underline mt-2"
                >
                  {expandedReviews[review.id] ? "Read less" : "Read more"}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {reviews.length > 6 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="bg-amber-100 text-amber-900 px-6 py-2 rounded-full hover:bg-amber-200 transition duration-300"
          >
            {displayCount >= reviews.length
              ? "Show Less"
              : `Read More (${displayCount} of ${reviews.length})`}
          </button>
        </div>
      )}

      {/* Review Modal */}
      <ReviewModal
        open={reviewModalOpen}
        onOpenChange={setReviewModalOpen}
        tripId={tripId}
        tripName={tripName}
        onReviewAdded={handleReviewAdded}
      />
    </section>
  );
};

export default ReviewSection;

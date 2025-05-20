import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { User, Star } from "lucide-react";
import ReviewModal from "./ReviewModal";

// Define the Review interface
interface Review {
  id: string;
  name: string;
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
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-amber-900 mb-2">
            Reviews
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex">
              <span className="text-amber-700">({reviews.length} reviews)</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className={`${
                      parseFloat(averageRating) >= star
                        ? "text-amber-800 fill-amber-800"
                        : "text-amber-500"
                    }`}
                  />
                ))}
              </div>
              <span className="text-amber-900 font-medium">
                {averageRating}
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setReviewModalOpen(true)}
          className="bg-amber-50 border-[1px] border-amber-900 hover:bg-amber-900 hover:text-amber-50 duration-300 text-amber-900 font-semibold hover:font-medium py-2 px-6 rounded-full transition mt-4 md:mt-0"
        >
          Write a Review
        </button>
      </div>

      {isLoadingReviews ? (
        <div className="flex justify-center items-center p-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-amber-900"></div>
        </div>
      ) : reviews.length === 0 ? (
        <div className="text-center p-10 bg-amber-100/50 rounded-lg">
          <p className="text-amber-900">
            No reviews yet. Be the first to share your experience!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-amber-100 rounded-full p-2">
                  <User className="text-amber-900" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-amber-900">{review.name}</h3>
                  <p className="text-xs text-amber-700">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className={`${
                      review.rating >= star
                        ? "text-amber-500 fill-amber-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-amber-800">{review.comment}</p>
            </motion.div>
          ))}
        </div>
      )}

      {reviews.length > 6 && (
        <div className="flex justify-center mt-8">
          <button className="bg-amber-100 text-amber-900 px-6 py-2 rounded-full hover:bg-amber-200 transition duration-300">
            View All Reviews
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

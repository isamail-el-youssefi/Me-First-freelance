import React from "react";
import { Review } from "@/app/api/reviews/route";

interface ReviewListProps {
  reviews: Review[];
  isLoading: boolean;
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews, isLoading }) => {
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
    <div className="divide-y divide-amber-200">
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
          <p className="mt-2 text-amber-800">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
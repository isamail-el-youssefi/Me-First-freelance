import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ReviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tripId: string;
  tripName: string;
  onReviewAdded: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({
  open,
  onOpenChange,
  tripId,
  tripName,
  onReviewAdded,
}) => {
  const { t } = useTranslation();
  const [fullName, setFullName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!fullName.trim()) {
      setError(t("reviewModal.errors.nameRequired"));
      return;
    }

    if (!comment.trim()) {
      setError(t("reviewModal.errors.reviewRequired"));
      return;
    }

    try {
      setIsSubmitting(true);
      setError("");

      // Send review to API
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tripId,
          fullName: fullName.trim(),
          rating,
          comment: comment.trim(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || t("reviewModal.errors.generic"));
      }

      // Reset form
      setFullName("");
      setRating(5);
      setComment("");

      // Notify parent component that a review was added
      onReviewAdded();

      // Close modal
      onOpenChange(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : t("reviewModal.errors.generic")
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Background overlay animation
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Modal animation
  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={overlayVariants}
      onClick={() => onOpenChange(false)}
    >
      <motion.div
        className="bg-white rounded-xl w-full max-w-md p-6"
        variants={modalVariants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-amber-900">
            {t("reviewModal.title")}
          </h2>
          <button
            onClick={() => onOpenChange(false)}
            className="text-amber-700 hover:text-amber-900"
          >
            <X size={20} />
          </button>
        </div>

        <p className="text-amber-800 mb-4">
          {t("reviewModal.shareExperience", { tripName })}
        </p>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-amber-800 mb-1">
              {t("reviewModal.nameLabel")}
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder={t("reviewModal.namePlaceholder")}
            />
          </div>

          <div className="mb-4">
            <label className="block text-amber-800 mb-1">
              {t("reviewModal.ratingLabel")}
            </label>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="text-2xl focus:outline-none"
                >
                  <span
                    className={
                      star <= rating ? "text-amber-500" : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-amber-800 mb-1">
              {t("reviewModal.reviewLabel")}
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-2 border border-amber-300 rounded-lg min-h-[100px] focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder={t("reviewModal.reviewPlaceholder")}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="mr-2 px-4 py-2 text-amber-900 rounded-lg hover:bg-amber-100"
              disabled={isSubmitting}
            >
              {t("reviewModal.cancelButton")}
            </button>
            <button
              type="submit"
              className="bg-amber-50 border-[1px] border-amber-900 hover:bg-amber-900 hover:text-amber-50 duration-300 text-amber-900 font-semibold hover:font-medium py-2 px-4 rounded-full transition mr-1"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? t("reviewModal.submitting")
                : t("reviewModal.submitButton")}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ReviewModal;

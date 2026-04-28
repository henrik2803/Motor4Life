import { createContext, useEffect, useState } from "react";

export const ReviewContext = createContext();

export function ReviewProvider({ children }) {
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem("reviews");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  function addReview(motoId, review) {
    setReviews((prev) => {
      const motoReviews = prev[motoId] || [];
      return {
        ...prev,
        [motoId]: [...motoReviews, review],
      };
    });
  }

  function getReviews(motoId) {
    return reviews[motoId] || [];
  }

  function getAverage(motoId) {
    const motoReviews = reviews[motoId] || [];
    if (motoReviews.length === 0) return 0;

    const total = motoReviews.reduce((acc, r) => acc + r.rating, 0);
    return (total / motoReviews.length).toFixed(1);
  }

  return (
    <ReviewContext.Provider
      value={{ addReview, getReviews, getAverage }}
    >
      {children}
    </ReviewContext.Provider>
  );
}
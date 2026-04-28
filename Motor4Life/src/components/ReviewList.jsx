import { useContext } from "react";
import { ReviewContext } from "../context/ReviewContext";

function ReviewList({ motoId }) {
  const { getReviews } = useContext(ReviewContext);

  const reviews = getReviews(motoId);

  if (reviews.length === 0) {
    return <p>Nenhuma avaliação ainda</p>;
  }

  return (
    <div>
      {reviews.map((r, index) => (
        <div key={index}>
          <p>{"⭐".repeat(r.rating)}</p>
          <p>{r.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
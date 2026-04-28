import { useState, useContext } from "react";
import { ReviewContext } from "../context/ReviewContext";

function ReviewForm({ motoId }) {
  const { addReview } = useContext(ReviewContext);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!rating || !comment) return;

    addReview(motoId, {
      rating,
      comment,
      date: new Date().toISOString(),
    });

    setRating(0);
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Avaliar</h3>

      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            style={{ cursor: "pointer", fontSize: "20px" }}
          >
            {star <= rating ? "⭐" : "☆"}
          </span>
        ))}
      </div>

      <textarea
        placeholder="Comentário..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button type="submit">Enviar</button>
    </form>
  );
}

export default ReviewForm;
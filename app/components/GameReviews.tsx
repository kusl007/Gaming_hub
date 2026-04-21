"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type ApiReview = {
  _id: string;
  username: string;
  rating: number;
  content: string;
  createdAt: string;
};

type GameReviewsProps = {
  productId: number;
  productType: "game" | "hardware";
};

export default function GameReviews({ productId, productType }: GameReviewsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [reviews, setReviews] = useState<ApiReview[]>([]);
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [statusMessage, setStatusMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const loadReviews = async () => {
    const res = await fetch(`/api/reviews/${productId}?type=${productType}`);
    if (!res.ok) return;
    const data = await res.json();
    setReviews(data.reviews ?? []);
  };

  useEffect(() => {
    loadReviews();
  }, [productId, productType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage("");
    setSubmitting(true);

    try {
      const res = await fetch(`/api/reviews/${productId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating, content, productType }),
      });

      let data: any = {};
      try {
        data = await res.json();
      } catch {
        data = {};
      }

      if (res.status === 401) {
        router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
        return;
      }
      if (!res.ok) {
        throw new Error(data.error || "Unable to submit review");
      }

      setContent("");
      setRating(5);
      setStatusMessage("Review submitted successfully.");
      await loadReviews();
      router.refresh();
    } catch (error: any) {
      setStatusMessage(error.message || "Failed to submit review");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="rounded-2xl border border-gray-800 bg-surface/40 p-6">
      <h2 className="text-3xl font-black text-white mb-2">Customer reviews</h2>
      <div className="mb-6">
        {(() => {
          const total = reviews.length;
          const avg = total
            ? reviews.reduce((sum, review) => sum + review.rating, 0) / total
            : 0;
          const percentages = [5, 4, 3, 2, 1].map((star) => {
            const count = reviews.filter((review) => review.rating === star).length;
            return total ? Math.round((count / total) * 100) : 0;
          });

          return (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="text-orange-400 text-2xl">
                  {"★".repeat(Math.round(avg || 0))}
                  <span className="text-gray-600">
                    {"★".repeat(5 - Math.round(avg || 0))}
                  </span>
                </div>
                <p className="text-3xl font-semibold text-white">
                  {avg.toFixed(1)} out of 5
                </p>
              </div>
              <p className="text-gray-400 text-sm">{total} global ratings</p>
              {[5, 4, 3, 2, 1].map((star, idx) => (
                <div key={star} className="flex items-center gap-3">
                  <span className="w-12 text-sm text-blue-400">{star} star</span>
                  <div className="h-3 flex-1 rounded border border-gray-600 overflow-hidden bg-background">
                    <div
                      className="h-full bg-orange-500"
                      style={{ width: `${percentages[idx]}%` }}
                    />
                  </div>
                  <span className="w-10 text-right text-blue-400 text-sm">
                    {percentages[idx]}%
                  </span>
                </div>
              ))}
            </div>
          );
        })()}
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
        <p className="text-sm text-gray-300">Give your rating</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex items-center gap-1 rounded-lg border border-gray-700 bg-black/40 px-3 py-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className={`text-xl leading-none transition-colors ${
                  star <= (hoverRating || rating)
                    ? "text-orange-500"
                    : "text-gray-600 hover:text-orange-300"
                }`}
                aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
              >
                ★
              </button>
            ))}
          </div>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="flex-1 rounded-lg border border-gray-700 bg-black/40 px-4 py-2 text-white"
            placeholder="Write your review..."
            required
          />
          <button
            type="submit"
            disabled={submitting}
            className="rounded-lg bg-neon-green px-4 py-2 font-bold text-black hover:brightness-110 transition"
          >
            {submitting ? "Posting..." : "Post Review"}
          </button>
        </div>
        {statusMessage ? <p className="text-xs text-gray-400">{statusMessage}</p> : null}
      </form>

      <div className="space-y-4">
        {reviews.length === 0 ? (
          <p className="text-gray-400 text-sm">No real reviews yet. Be the first to review this product.</p>
        ) : (
          reviews.map((review) => (
            <article key={review._id} className="rounded-xl border border-gray-800 p-4">
              <p className="font-semibold text-white">{review.username}</p>
              <p className="text-orange-400 text-sm mt-1">
                {"★".repeat(review.rating)}
                <span className="text-gray-600">{"★".repeat(5 - review.rating)}</span>
              </p>
              <p className="text-gray-300 text-sm mt-2">{review.content}</p>
              <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                <span>{new Date(review.createdAt).toLocaleDateString()}</span>
                <span>Verified user review</span>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

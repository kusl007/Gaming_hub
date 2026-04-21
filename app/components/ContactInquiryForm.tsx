"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  category: "Order issue" | "Activation issue" | "Tournament question" | "General inquiry" | "";
  message: string;
};

const initialState: FormData = {
  name: "",
  email: "",
  category: "",
  message: "",
};

export default function ContactInquiryForm() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onChange =
    (key: keyof FormData) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setMessage(data.message || "Inquiry submitted.");
      setFormData(initialState);
    } catch (submitError: any) {
      setError(submitError.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={formData.name}
        onChange={onChange("name")}
        className="w-full rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-neon-green"
        placeholder="Your name"
        required
      />
      <input
        type="email"
        value={formData.email}
        onChange={onChange("email")}
        className="w-full rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-neon-green"
        placeholder="Your email"
        required
      />
      <select
        value={formData.category}
        onChange={onChange("category")}
        className="w-full rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-neon-green"
        required
      >
        <option value="">Select category</option>
        <option value="Order issue">Order issue</option>
        <option value="Activation issue">Activation issue</option>
        <option value="Tournament question">Tournament question</option>
        <option value="General inquiry">General inquiry</option>
      </select>
      <textarea
        value={formData.message}
        onChange={onChange("message")}
        className="w-full rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-neon-green min-h-32"
        placeholder="Tell us what happened..."
        required
      />
      {error ? <p className="text-sm text-red-400">{error}</p> : null}
      {message ? <p className="text-sm text-neon-green">{message}</p> : null}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full rounded-lg px-5 py-3 font-bold transition ${
          isSubmitting
            ? "bg-gray-600 text-white cursor-not-allowed"
            : "bg-neon-green text-black hover:brightness-110"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}

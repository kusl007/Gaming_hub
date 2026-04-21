"use client";

import { useState } from "react";

type TournamentCard = {
  name: string;
  game: string;
  format: string;
  prize: string;
  date: string;
};

type FormData = {
  fullName: string;
  email: string;
  gamerTagOrTeamName: string;
  tournamentName: string;
  platform: "PC" | "PlayStation 5" | "Xbox Series X|S" | "";
  countryOrRegion: string;
  experience: string;
};

const initialState: FormData = {
  fullName: "",
  email: "",
  gamerTagOrTeamName: "",
  tournamentName: "",
  platform: "",
  countryOrRegion: "",
  experience: "",
};

export default function TournamentRegistrationForm({
  tournamentCards,
}: {
  tournamentCards: TournamentCard[];
}) {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onChange =
    (key: keyof FormData) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/tournaments/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to register.");
      }

      setMessage(data.message || "Tournament registration submitted.");
      setFormData(initialState);
    } catch (submitError: any) {
      setError(submitError.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input value={formData.fullName} onChange={onChange("fullName")} type="text" placeholder="Full name" className="rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-neon-purple" required />
      <input value={formData.email} onChange={onChange("email")} type="email" placeholder="Email address" className="rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-neon-purple" required />
      <input value={formData.gamerTagOrTeamName} onChange={onChange("gamerTagOrTeamName")} type="text" placeholder="Gamer tag / Team name" className="rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-neon-purple" required />
      <select value={formData.tournamentName} onChange={onChange("tournamentName")} className="rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-neon-purple" required>
        <option value="">Select tournament</option>
        {tournamentCards.map((card) => (
          <option key={card.name} value={card.name}>
            {card.name}
          </option>
        ))}
      </select>
      <select value={formData.platform} onChange={onChange("platform")} className="rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-neon-purple" required>
        <option value="">Choose platform</option>
        <option value="PC">PC</option>
        <option value="PlayStation 5">PlayStation 5</option>
        <option value="Xbox Series X|S">Xbox Series X|S</option>
      </select>
      <input value={formData.countryOrRegion} onChange={onChange("countryOrRegion")} type="text" placeholder="Country / Region" className="rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-neon-purple" required />
      <textarea value={formData.experience} onChange={onChange("experience")} placeholder="Tell us about your experience (optional)" className="md:col-span-2 rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-neon-purple min-h-32" />
      {error ? <p className="md:col-span-2 text-sm text-red-400">{error}</p> : null}
      {message ? <p className="md:col-span-2 text-sm text-neon-green">{message}</p> : null}
      <button type="submit" disabled={isSubmitting} className={`md:col-span-2 rounded-lg text-white font-bold py-3 transition ${isSubmitting ? "bg-gray-600 cursor-not-allowed" : "bg-neon-purple hover:brightness-110"}`}>
        {isSubmitting ? "Submitting..." : "Register for Tournament"}
      </button>
    </form>
  );
}

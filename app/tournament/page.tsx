const tournamentCards = [
  {
    name: "Neon Strike Invitational",
    game: "Split Fiction",
    format: "2v2 Co-op Speedrun",
    prize: "€25,000",
    date: "May 16, 2026",
  },
  {
    name: "Galactic Clash Open",
    game: "Pragmata",
    format: "Solo Bracket",
    prize: "€15,000",
    date: "June 2, 2026",
  },
  {
    name: "Arena Legends Cup",
    game: "Borderlands 4",
    format: "Squad Elimination",
    prize: "€40,000",
    date: "June 20, 2026",
  },
];

export default function TournamentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative border-b border-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(57,255,20,0.10),transparent_30%,rgba(130,87,230,0.14))]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-neon-purple uppercase tracking-[0.22em] text-xs mb-3">Tournament Hub</p>
          <h1 className="text-4xl md:text-6xl font-black text-white max-w-4xl">
            Competitive events, static schedule, and pro-level presentation.
          </h1>
          <p className="text-gray-300 text-lg mt-6 max-w-2xl">
            Explore upcoming tournaments, prize pools, and format details for top community and pro events.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="rounded-2xl border border-gray-800 bg-surface/40 p-6 md:p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-3">About Tournament Program</h2>
          <p className="text-gray-300 leading-relaxed">
            Sandeep Gaming Store tournaments are built for both casual competitors and serious esports teams.
            Every event includes transparent rules, anti-cheat checks, and structured brackets with live result tracking.
            Register below to join upcoming tournaments and receive match schedules directly by email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tournamentCards.map((card) => (
            <article key={card.name} className="rounded-2xl border border-gray-800 bg-surface/40 p-6 hover:border-neon-purple/50 transition-colors">
              <p className="text-xs uppercase text-neon-purple tracking-wider mb-3">{card.game}</p>
              <h2 className="text-2xl font-bold text-white mb-4">{card.name}</h2>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-white font-semibold">Format:</span> {card.format}</p>
                <p><span className="text-white font-semibold">Prize Pool:</span> {card.prize}</p>
                <p><span className="text-white font-semibold">Start Date:</span> {card.date}</p>
              </div>
              <button type="button" className="mt-6 w-full rounded-lg border border-neon-purple text-neon-purple py-2.5 font-bold hover:bg-neon-purple hover:text-white transition-colors">
                View Event
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-2xl border border-gray-800 bg-surface/40 p-6 md:p-8">
          <h2 className="text-3xl font-bold text-white mb-2">Tournament Registration Form</h2>
          <p className="text-gray-400 mb-6">
            Fill this form to register your team or solo profile for upcoming events.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full name" className="rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-neon-purple" />
            <input type="email" placeholder="Email address" className="rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-neon-purple" />
            <input type="text" placeholder="Gamer tag / Team name" className="rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-neon-purple" />
            <select className="rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-neon-purple">
              <option>Select tournament</option>
              {tournamentCards.map((card) => (
                <option key={card.name}>{card.name}</option>
              ))}
            </select>
            <select className="rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-neon-purple">
              <option>Choose platform</option>
              <option>PC</option>
              <option>PlayStation 5</option>
              <option>Xbox Series X|S</option>
            </select>
            <input type="text" placeholder="Country / Region" className="rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-neon-purple" />
            <textarea placeholder="Tell us about your experience (optional)" className="md:col-span-2 rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-neon-purple min-h-32" />
            <button type="button" className="md:col-span-2 rounded-lg bg-neon-purple text-white font-bold py-3 hover:brightness-110 transition">
              Register for Tournament
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

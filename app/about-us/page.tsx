import Image from "next/image";

export default function AboutUsPage() {
  const pillars = [
    {
      title: "Curated Catalog",
      description:
        "Every title and hardware product is manually selected for quality, performance, and player value.",
    },
    {
      title: "Instant Delivery",
      description:
        "Digital keys and account-safe workflows are optimized for speed, reliability, and regional clarity.",
    },
    {
      title: "Player-First Support",
      description:
        "Our team resolves order, activation, and compatibility issues with practical, human support.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(57,255,20,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(130,87,230,0.2),transparent_45%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-neon-green uppercase tracking-[0.25em] text-xs mb-4">About Sandeep Gaming Store</p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-4xl">
            A modern static storefront built for gamers who value speed, clarity, and trust.
          </h1>
          <p className="mt-6 text-gray-300 max-w-2xl text-lg">
            We design premium shopping journeys for digital games, hardware, and community-driven events, with a focus on clean visuals and high usability.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-gray-800 bg-surface/40 p-3">
              <Image
                src="/sandeep.jpeg"
                alt="Sandeep - Founder & CEO"
                width={800}
                height={900}
                className="w-full h-[360px] md:h-[420px] object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-neon-green uppercase tracking-[0.22em] text-xs mb-3">Founder & CEO</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Sandeep
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Sandeep Gaming Store was founded by <span className="text-white font-semibold">Sandeep</span> to deliver a premium, gamer-first storefront experience:
              clean design, fast browsing, transparent pricing, and modern community features like tournaments and verified reviews.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-gray-800 bg-black/30 p-4">
                <p className="text-white font-bold text-lg">Premium UI</p>
                <p className="text-gray-400 text-sm mt-1">Modern visuals with performance-first UX.</p>
              </div>
              <div className="rounded-xl border border-gray-800 bg-black/30 p-4">
                <p className="text-white font-bold text-lg">Trusted Flow</p>
                <p className="text-gray-400 text-sm mt-1">Secure auth, cart, and real user reviews.</p>
              </div>
              <div className="rounded-xl border border-gray-800 bg-black/30 p-4">
                <p className="text-white font-bold text-lg">Community</p>
                <p className="text-gray-400 text-sm mt-1">Tournaments & support built-in.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-2xl border border-gray-800 bg-surface/40 p-6 hover:border-neon-green/40 transition-colors">
              <h2 className="text-xl font-bold text-white mb-3">{pillar.title}</h2>
              <p className="text-gray-400">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

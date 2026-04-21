import Link from "next/link";
import { notFound } from "next/navigation";
import { getGameById, gamesData } from "@/lib/games-data";

type GameDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function GameDetailPage({ params }: GameDetailPageProps) {
  const { id } = await params;
  const game = getGameById(Number(id));

  if (!game) {
    notFound();
  }

  const similarFallback = gamesData
    .filter((item) => item.id !== game.id)
    .slice(0, 3)
    .map((item) => ({
      title: item.title,
      discount: item.discount ?? "",
      platform: item.platform,
      price: item.price,
    }));

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground pb-16">
      <div className="border-b border-gray-800 bg-surface py-4">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-gray-400">
            <Link href="/" className="hover:text-neon-green transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/games" className="hover:text-neon-green transition-colors">
              Games
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{game.title}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative mb-10 overflow-hidden rounded-2xl border border-gray-800">
          <img src={game.image} alt={game.title} className="h-64 w-full object-cover md:h-80" />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">{game.storeTitle}</h1>
            <p className="text-sm uppercase text-neon-green/90 mt-2">Microsoft Store - In stock - Digital download</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <section className="rounded-2xl border border-gray-800 bg-surface/40 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Game features</h2>
              <div className="flex flex-wrap gap-3">
                {game.features.map((feature) => (
                  <span key={feature} className="rounded-full border border-gray-700 bg-black/30 px-4 py-2 text-sm text-gray-200">
                    {feature}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-gray-800 bg-surface/40 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                {game.description.map((paragraph, index) => (
                  <p key={`${game.id}-desc-${index}`}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-gray-800 bg-surface/40 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Game&apos;s latest news</h2>
              <div className="space-y-5">
                {(game.latestNews.length ? game.latestNews : [{ title: `${game.title} update announced`, timeAgo: "recently", excerpt: "More game news will appear here soon." }]).map((newsItem) => (
                  <article key={newsItem.title} className="rounded-xl border border-gray-800 p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">{newsItem.timeAgo}</p>
                    <h3 className="text-white font-semibold mb-2">{newsItem.title}</h3>
                    <p className="text-gray-400 text-sm">{newsItem.excerpt}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <section className="rounded-2xl border border-gray-800 bg-surface/60 p-6">
              <p className="text-sm uppercase text-gray-400">{game.platform}</p>
              <div className="mt-4 flex items-end gap-3">
                {game.oldPrice ? <span className="text-gray-500 line-through">{game.oldPrice}</span> : null}
                {game.discount ? <span className="text-red-400">{game.discount}</span> : null}
                <span className="text-4xl font-black text-white">{game.price}</span>
              </div>
              <button className="mt-6 w-full rounded-lg bg-neon-green px-4 py-3 font-bold text-black transition hover:brightness-110">
                Add to cart
              </button>
            </section>

            <section className="rounded-2xl border border-gray-800 bg-surface/40 p-6">
              <h2 className="text-xl font-bold text-white mb-4">Similar products</h2>
              <div className="space-y-4">
                {(game.similarProducts.length ? game.similarProducts : similarFallback).map((item) => (
                  <div key={item.title} className="border-b border-gray-800 pb-3 last:border-b-0 last:pb-0">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    {item.discount ? <p className="text-red-400 text-sm">{item.discount}</p> : null}
                    <p className="text-xs text-gray-400">{item.platform}</p>
                    <p className="text-neon-green font-bold mt-1">{item.price}</p>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <section className="rounded-2xl border border-gray-800 bg-surface/40 p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{game.comments.length} comments</h2>
            <div className="space-y-4">
              {(game.comments.length
                ? game.comments
                : [{ author: "gamer-demo", text: "Great game and instant delivery. Waiting for more DLC.", timeAgo: "recently" }]
              ).map((comment) => (
                <article key={`${comment.author}-${comment.timeAgo}`} className="rounded-xl border border-gray-800 p-4">
                  <p className="font-semibold text-white">{comment.author}</p>
                  <p className="text-gray-300 text-sm mt-1">{comment.text}</p>
                  <p className="text-xs text-gray-500 mt-2">{comment.timeAgo}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-gray-800 bg-surface/40 p-6">
            <h2 className="text-2xl font-bold text-white mb-1">Reviews</h2>
            <p className="text-gray-400 text-sm mb-4">Game review score based on {game.reviewsCount} reviews</p>
            <div className="space-y-4">
              {(game.reviews.length
                ? game.reviews
                : [{ author: "player-one", text: "Very fun and polished experience.", date: "Recent", useful: 0 }]
              ).map((review) => (
                <article key={`${review.author}-${review.date}`} className="rounded-xl border border-gray-800 p-4">
                  <p className="font-semibold text-white">{review.author}</p>
                  <p className="text-gray-300 text-sm mt-1">{review.text}</p>
                  <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                    <span>{review.date}</span>
                    <span>Useful? {review.useful}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

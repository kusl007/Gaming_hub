"use client";

import Link from "next/link";
import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { gamesData } from "@/lib/games-data";
import { hardwareData } from "@/lib/hardware-data";
import MotionInView from "@/app/components/motion/MotionInView";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") || "").trim();
  const normalized = query.toLowerCase();

  const matchedGames = useMemo(() => {
    if (!normalized) return [];
    return gamesData.filter((game) =>
      [
        game.title,
        game.storeTitle,
        game.platform,
        ...game.features,
        ...game.description,
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalized)
    );
  }, [normalized]);

  const matchedHardware = useMemo(() => {
    if (!normalized) return [];
    return hardwareData.filter((item) =>
      [item.title, item.category, item.platform, item.description, ...item.specs]
        .join(" ")
        .toLowerCase()
        .includes(normalized)
    );
  }, [normalized]);

  const totalResults = matchedGames.length + matchedHardware.length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-black text-white mb-2">Search Results</h1>
        {query ? (
          <p className="text-gray-400 mb-10">
            Showing {totalResults} result{totalResults === 1 ? "" : "s"} for{" "}
            <span className="text-white font-semibold">&quot;{query}&quot;</span>
          </p>
        ) : (
          <p className="text-gray-400 mb-10">
            Enter a search term in the navbar to find games and hardware.
          </p>
        )}

        {query && totalResults === 0 ? (
          <div className="rounded-2xl border border-gray-800 bg-surface/40 p-8 text-gray-300">
            No products found. Try different keywords like game names, platform, or hardware type.
          </div>
        ) : null}

        {matchedGames.length > 0 ? (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-5">Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchedGames.map((game) => (
                <MotionInView key={game.id}>
                  <Link
                    href={`/games/${game.id}`}
                    className="block rounded-xl border border-gray-800 bg-surface/50 overflow-hidden hover:border-neon-green/50 transition-colors"
                  >
                    <img src={game.image} alt={game.title} className="h-44 w-full object-cover" />
                    <div className="p-4">
                      <h3 className="text-white font-semibold">{game.title}</h3>
                      <p className="text-xs text-gray-400 mt-1">{game.platform}</p>
                      <p className="text-neon-green font-bold mt-3">{game.price}</p>
                    </div>
                  </Link>
                </MotionInView>
              ))}
            </div>
          </div>
        ) : null}

        {matchedHardware.length > 0 ? (
          <div>
            <h2 className="text-2xl font-bold text-white mb-5">Hardware</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchedHardware.map((item) => (
                <MotionInView key={item.id}>
                  <Link
                    href={`/hardware/${item.id}`}
                    className="block rounded-xl border border-gray-800 bg-surface/50 overflow-hidden hover:border-neon-purple/50 transition-colors"
                  >
                    <div className="h-44 w-full bg-white/5 p-4 flex items-center justify-center">
                      <img src={item.image} alt={item.title} className="h-full object-contain" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold">{item.title}</h3>
                      <p className="text-xs text-gray-400 mt-1">
                        {item.category} - {item.platform}
                      </p>
                      <p className="text-neon-purple font-bold mt-3">{item.price}</p>
                    </div>
                  </Link>
                </MotionInView>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-white">
          Loading...
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}

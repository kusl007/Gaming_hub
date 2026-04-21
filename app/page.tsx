"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { gamesData } from "@/lib/games-data";
import { hardwareData } from "@/lib/hardware-data";
import AddToCartButton from "@/app/components/AddToCartButton";

const windowedItems = <T,>(items: T[], start: number, size: number) =>
  Array.from({ length: size }, (_, idx) => items[(start + idx) % items.length]);

export default function Home() {
  const [gameIndex, setGameIndex] = useState(0);
  const [hardwareIndex, setHardwareIndex] = useState(0);

  const featuredGames = useMemo(
    () => windowedItems(gamesData, gameIndex, 3),
    [gameIndex],
  );
  const featuredHardware = useMemo(
    () => windowedItems(hardwareData, hardwareIndex, 3),
    [hardwareIndex],
  );

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
            alt="Cyberpunk Game"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent"></div>
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent"></div>
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <p className="text-neon-green font-semibold tracking-widest mb-2 uppercase text-sm z-10 hidden sm:block">
            Dynamic Latest AAA Game
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter max-w-3xl leading-tight mb-6 mt-16 sm:mt-0">
            CYBERPUNK 2077: <br className="hidden md:block" />
            PHANTOM LIBERTY
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
            Experience Night City like never before. Navigate a web of espionage
            and political intrigue.{" "}
            <span className="text-neon-green font-semibold">BUY NOW!</span>
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/games/1"
              className="bg-neon-green text-black font-bold py-3 px-8 rounded-full shadow-[0_0_15px_rgba(57,255,20,0.5)] hover:shadow-[0_0_25px_rgba(57,255,20,0.8)] transition-all transform hover:scale-105 uppercase tracking-wider text-sm inline-block"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            FEATURED GAMES
            <div className="w-4 h-8 bg-neon-green transform skew-x-[-15deg]"></div>
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() =>
                setGameIndex((prev) => (prev - 1 + gamesData.length) % gamesData.length)
              }
              className="w-10 h-10 rounded-full bg-surface border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors hover:border-gray-600"
            >
              <span className="sr-only">Previous</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setGameIndex((prev) => (prev + 1) % gamesData.length)}
              className="w-10 h-10 rounded-full bg-surface border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors hover:border-gray-600"
            >
              <span className="sr-only">Next</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGames.map((game) => (
            <div key={game.id} className="bg-surface rounded-xl overflow-hidden border border-gray-800 hover:border-neon-green/50 transition-colors group flex flex-col h-full shadow-lg">
              <Link href={`/games/${game.id}`} className="block h-60 overflow-hidden relative p-3">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover rounded-lg group-hover:opacity-0 transition-all duration-500"
                />
                <video
                  src={game.video}
                  className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              </Link>
              <div className="p-4 flex flex-col flex-1">
                <Link href={`/games/${game.id}`}>
                  <h3 className="font-bold text-lg text-white mb-1 uppercase line-clamp-1 hover:text-neon-green transition-colors">{game.title}</h3>
                </Link>
                <p className="text-xs text-neon-green/80 mb-3 uppercase font-medium">{game.platform}</p>
                <div className="mt-auto pt-4 border-t border-gray-800/50 flex items-center justify-between">
                  <span className="font-bold text-white text-xl">{game.price}</span>
                  <div className="flex text-yellow-500 text-xs">
                    {"★".repeat(game.rating)}{"☆".repeat(5 - game.rating)}
                  </div>
                </div>
                <AddToCartButton
                  productId={game.id}
                  productType="game"
                  title={game.title}
                  platform={game.platform}
                  price={game.price}
                  image={game.image}
                  className="mt-3 w-full bg-black border border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-bold py-2.5 rounded-lg transition-all uppercase text-xs tracking-wider"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 w-full">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            GAMING HARDWARE
            <div className="w-4 h-8 bg-neon-purple transform skew-x-[-15deg]"></div>
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() =>
                setHardwareIndex(
                  (prev) => (prev - 1 + hardwareData.length) % hardwareData.length,
                )
              }
              className="w-10 h-10 rounded-full bg-surface border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors hover:border-gray-600"
            >
              <span className="sr-only">Previous hardware</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setHardwareIndex((prev) => (prev + 1) % hardwareData.length)}
              className="w-10 h-10 rounded-full bg-surface border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors hover:border-gray-600"
            >
              <span className="sr-only">Next hardware</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredHardware.map((item) => (
            <div key={item.id} className="bg-surface rounded-xl overflow-hidden border border-gray-800 hover:border-neon-purple/50 transition-all group flex flex-col shadow-lg">
              <Link href={`/hardware/${item.id}`} className="h-56 p-4 bg-white/5 flex items-center justify-center shrink-0">
                <img src={item.image} alt={item.title} className="object-contain h-full" />
              </Link>
              <div className="p-6 flex flex-col justify-center">
                <Link href={`/hardware/${item.id}`}>
                  <h3 className="font-bold text-xl text-white mb-2 uppercase hover:text-neon-purple transition-colors">{item.title}</h3>
                </Link>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{item.description}</p>
                <div className="mt-auto flex flex-col gap-3">
                  <span className="font-bold text-2xl text-white block">{item.price}</span>
                  <AddToCartButton
                    productId={item.id}
                    productType="hardware"
                    title={item.title}
                    platform={item.platform}
                    price={item.price}
                    image={item.image}
                    className="w-full bg-neon-purple/10 border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white font-bold py-2.5 rounded-lg transition-all uppercase text-xs tracking-wider"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { gamesData } from "@/lib/games-data";

export default function GamesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Premium Header */}
      <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden border-b border-surface/50">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop" 
            alt="Gaming Library" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-4">
            THE GAME <span className="text-neon-green">VAULT</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the latest and greatest in interactive entertainment. Next-gen graphics, compelling stories, and uncompromised gameplay.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="w-full">
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gamesData.map((game) => (
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
                  
                  <div className="mt-auto pt-4 border-t border-gray-800/50 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-xl">{game.price}</span>
                      <div className="flex text-yellow-500 text-xs">
                        {"★".repeat(game.rating)}{"☆".repeat(5-game.rating)}
                      </div>
                    </div>
                    <button className="w-full bg-black border border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-bold py-2.5 rounded-lg transition-all uppercase text-xs tracking-wider shadow-[0_0_10px_rgba(57,255,20,0.1)] hover:shadow-[0_0_15px_rgba(57,255,20,0.4)]">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}

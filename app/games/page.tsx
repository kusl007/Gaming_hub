import Link from "next/link";

export default function GamesPage() {
  const games = [
    { id: 1, title: "Starfield", platform: "PS5 / PC", price: "$69.99", rating: 5, image: "https://images.unsplash.com/photo-1627856013091-fed6e4e048c0?q=80&w=600&auto=format&fit=crop" },
    { id: 2, title: "Diablo IV", platform: "XSX / PC", price: "$89.99", rating: 5, image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop" },
    { id: 3, title: "Armored Core VI", platform: "PC / PS5", price: "$59.99", rating: 4, image: "https://images.unsplash.com/photo-1616450650567-c5d9ddcdccaa?q=80&w=600&auto=format&fit=crop" },
    { id: 4, title: "Baldur's Gate 3", platform: "PC / PS5", price: "$59.99", rating: 5, image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop", mixBlend: "hue-rotate(90deg)" },
    { id: 5, title: "Spider-Man 2", platform: "PS5", price: "$69.99", rating: 5, image: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=600&auto=format&fit=crop" },
    { id: 6, title: "Cyberpunk 2077", platform: "PC / PS5 / XSX", price: "$49.99", rating: 5, image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop", mixBlend: "sepia(50%)" },
    { id: 7, title: "Elden Ring", platform: "PC / PS5", price: "$59.99", rating: 5, image: "https://images.unsplash.com/photo-1627856013091-fed6e4e048c0?q=80&w=600&auto=format&fit=crop", mixBlend: "hue-rotate(180deg)" },
    { id: 8, title: "Final Fantasy XVI", platform: "PS5", price: "$69.99", rating: 4, image: "https://images.unsplash.com/photo-1616450650567-c5d9ddcdccaa?q=80&w=600&auto=format&fit=crop", mixBlend: "grayscale(30%)" },
  ];

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
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex flex-col md:flex-row gap-8">
        
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-8 bg-surface/30 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm">
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">Categories</h3>
              <ul className="space-y-3">
                {["Action", "Adventure", "RPG", "Shooter", "Sports", "Strategy"].map((cat) => (
                  <li key={cat}>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="form-checkbox text-neon-green bg-black border-gray-700 rounded focus:ring-neon-green/50 w-4 h-4 cursor-pointer" />
                      <span className="text-gray-400 group-hover:text-white transition-colors">{cat}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">Platform</h3>
              <ul className="space-y-3">
                {["PlayStation 5", "Xbox Series X", "PC", "Nintendo Switch"].map((plat) => (
                  <li key={plat}>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="form-checkbox text-neon-green bg-black border-gray-700 rounded focus:ring-neon-green/50 w-4 h-4 cursor-pointer" />
                      <span className="text-gray-400 group-hover:text-white transition-colors">{plat}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">Price</h3>
              <input type="range" className="w-full accent-neon-green bg-gray-800 h-1 rounded-lg appearance-none cursor-pointer" min="0" max="100" />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>$0</span>
                <span>$100+</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Games Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-400">Showing <span className="text-white font-bold">24</span> results</p>
            <select className="bg-surface border border-gray-800 text-white text-sm rounded-lg focus:ring-neon-green focus:border-neon-green block p-2.5 outline-none cursor-pointer">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {games.map((game) => (
              <div key={game.id} className="bg-surface rounded-xl overflow-hidden border border-gray-800 hover:border-neon-green/50 transition-colors group flex flex-col h-full shadow-lg">
                <div className="h-60 overflow-hidden relative p-3">
                  <img 
                    src={game.image} 
                    alt={game.title} 
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500" 
                    style={game.mixBlend ? { filter: game.mixBlend } : {}}
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-lg text-white mb-1 uppercase line-clamp-1">{game.title}</h3>
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
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-2">
              <button className="p-2 rounded-lg bg-surface border border-gray-800 text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button className="w-10 h-10 rounded-lg bg-neon-green text-black font-bold flex items-center justify-center">1</button>
              <button className="w-10 h-10 rounded-lg bg-surface border border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white flex items-center justify-center transition-colors">2</button>
              <button className="w-10 h-10 rounded-lg bg-surface border border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white flex items-center justify-center transition-colors">3</button>
              <span className="text-gray-500">...</span>
              <button className="p-2 rounded-lg bg-surface border border-gray-800 text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </nav>
          </div>
        </div>

      </section>
    </div>
  );
}

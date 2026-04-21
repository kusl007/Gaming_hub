import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
            alt="Cyberpunk Game"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <p className="text-neon-green font-semibold tracking-widest mb-2 uppercase text-sm z-10 hidden sm:block">
            Dynamic Latest AAA Game
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter max-w-3xl leading-tight mb-6 mt-16 sm:mt-0">
            CYBERPUNK 2077: <br className="hidden md:block"/>
            PHANTOM LIBERTY
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
            Experience Night City like never before. Navigate a web of espionage and political intrigue. <span className="text-neon-green font-semibold">BUY NOW!</span>
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-neon-green text-black font-bold py-3 px-8 rounded-full shadow-[0_0_15px_rgba(57,255,20,0.5)] hover:shadow-[0_0_25px_rgba(57,255,20,0.8)] transition-all transform hover:scale-105 uppercase tracking-wider text-sm">
              Shop Now
            </button>
            <button className="bg-transparent text-white font-bold py-3 px-8 rounded-full border-2 border-white/20 hover:border-white hover:bg-white/10 transition-all uppercase tracking-wider text-sm flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Watch Trailer
            </button>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            FEATURED GAMES
            <div className="w-4 h-8 bg-neon-green transform skew-x-[-15deg]"></div>
          </h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-surface border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors hover:border-gray-600">
              <span className="sr-only">Previous</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-surface border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors hover:border-gray-600">
              <span className="sr-only">Next</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {/* Game Card 1 */}
          <div className="bg-surface rounded-xl overflow-hidden border border-gray-800 hover:border-neon-green/50 transition-colors group">
            <div className="h-64 sm:h-72 overflow-hidden relative p-4">
              <img src="https://images.unsplash.com/photo-1627856013091-fed6e4e048c0?q=80&w=600&auto=format&fit=crop" alt="Starfield" className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-white mb-1 uppercase">Starfield</h3>
              <p className="text-xs text-gray-400 mb-3 uppercase">PS5 / PC</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">$69.99</span>
                <div className="flex text-yellow-500 text-xs">
                  ★★★★★
                </div>
              </div>
              <button className="w-full mt-4 bg-transparent border border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-bold py-2 rounded-full transition-colors uppercase text-xs">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Game Card 2 */}
          <div className="bg-surface rounded-xl overflow-hidden border border-gray-800 hover:border-neon-green/50 transition-colors group">
            <div className="h-64 sm:h-72 overflow-hidden relative p-4">
              <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop" alt="Diablo IV" className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-white mb-1 uppercase">Diablo IV</h3>
              <p className="text-xs text-gray-400 mb-3 uppercase">XSX / PC</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">$89.99</span>
                <div className="flex text-yellow-500 text-xs">
                  ★★★★★
                </div>
              </div>
              <button className="w-full mt-4 bg-transparent border border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-bold py-2 rounded-full transition-colors uppercase text-xs">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Game Card 3 */}
          <div className="bg-surface rounded-xl overflow-hidden border border-gray-800 hover:border-neon-green/50 transition-colors group hidden md:block">
            <div className="h-64 sm:h-72 overflow-hidden relative p-4">
              <img src="https://images.unsplash.com/photo-1616450650567-c5d9ddcdccaa?q=80&w=600&auto=format&fit=crop" alt="Armored Core VI" className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-white mb-1 uppercase w-full truncate">Armored Core VI</h3>
              <p className="text-xs text-gray-400 mb-3 uppercase">PC / PS5</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">$59.99</span>
                <div className="flex text-yellow-500 text-xs">
                  ★★★★☆
                </div>
              </div>
              <button className="w-full mt-4 bg-transparent border border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-bold py-2 rounded-full transition-colors uppercase text-xs">
                Add to Cart
              </button>
            </div>
          </div>
          
           {/* Game Card 4 */}
           <div className="bg-surface rounded-xl overflow-hidden border border-gray-800 hover:border-neon-green/50 transition-colors group hidden lg:block">
            <div className="h-64 sm:h-72 overflow-hidden relative p-4">
              <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop" alt="Baldur's Gate 3" className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500" style={{ filter: "hue-rotate(90deg)" }} />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-white mb-1 uppercase w-full truncate">Baldur's Gate 3</h3>
              <p className="text-xs text-gray-400 mb-3 uppercase">PC / PS5</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">$59.99</span>
                <div className="flex text-yellow-500 text-xs">
                  ★★★★★
                </div>
              </div>
              <button className="w-full mt-4 bg-transparent border border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-bold py-2 rounded-full transition-colors uppercase text-xs">
                Add to Cart
              </button>
            </div>
          </div>
          
           {/* Game Card 5 */}
           <div className="bg-surface rounded-xl overflow-hidden border border-gray-800 hover:border-neon-green/50 transition-colors group hidden lg:block">
            <div className="h-64 sm:h-72 overflow-hidden relative p-4">
              <img src="https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=600&auto=format&fit=crop" alt="Spider-Man 2" className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-white mb-1 uppercase w-full truncate">Spider-Man 2</h3>
              <p className="text-xs text-gray-400 mb-3 uppercase">PS5</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">$69.99</span>
                <div className="flex text-yellow-500 text-xs">
                  ★★★★★
                </div>
              </div>
              <button className="w-full mt-4 bg-transparent border border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-bold py-2 rounded-full transition-colors uppercase text-xs">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 w-full">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            GAMING HARDWARE
            <div className="w-4 h-8 bg-neon-purple transform skew-x-[-15deg]"></div>
          </h2>
          <Link href="/hardware" className="text-neon-purple hover:text-white transition-colors font-medium">
            View All &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Hardware Card 1 */}
          <div className="bg-surface rounded-xl overflow-hidden border border-gray-800 hover:border-neon-purple/50 transition-all group flex flex-col md:flex-row shadow-lg">
            <div className="h-48 md:h-auto md:w-2/5 p-4 bg-white/5 flex items-center justify-center">
               <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=600&auto=format&fit=crop" alt="PlayStation 5" className="object-contain h-full group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6 md:w-3/5 flex flex-col justify-center">
              <h3 className="font-bold text-xl text-white mb-2 uppercase">PlayStation 5 Console</h3>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">Lightning fast load times, immersive 3D audio, and breathtaking new generation games.</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-bold text-2xl text-white">$499.99</span>
                <button className="bg-neon-purple/10 border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white font-bold py-2 px-4 rounded-full transition-colors text-xs uppercase">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

           {/* Hardware Card 2 */}
           <div className="bg-surface rounded-xl overflow-hidden border border-gray-800 hover:border-neon-purple/50 transition-all group flex flex-col md:flex-row shadow-lg">
            <div className="h-48 md:h-auto md:w-2/5 p-4 bg-white/5 flex items-center justify-center">
               <img src="https://images.unsplash.com/photo-1621259182978-fbf93132e53d?q=80&w=600&auto=format&fit=crop" alt="Xbox Series X" className="object-contain h-full group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6 md:w-3/5 flex flex-col justify-center">
              <h3 className="font-bold text-xl text-white mb-2 uppercase">Xbox Series X</h3>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">The fastest, most powerful Xbox ever. Explore thousands of games across four generations.</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-bold text-2xl text-white">$499.99</span>
                <button className="bg-neon-purple/10 border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white font-bold py-2 px-4 rounded-full transition-colors text-xs uppercase">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          
           {/* Hardware Card 3 */}
           <div className="bg-surface rounded-xl overflow-hidden border border-gray-800 hover:border-neon-purple/50 transition-all group flex flex-col md:flex-row shadow-lg">
            <div className="h-48 md:h-auto md:w-2/5 p-4 bg-white/5 flex items-center justify-center">
               <img src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=600&auto=format&fit=crop" alt="Razer Keyboard" className="object-contain h-full group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6 md:w-3/5 flex flex-col justify-center">
              <h3 className="font-bold text-xl text-white mb-2 uppercase">Pro Gaming Keyboard</h3>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">Mechanical RGB keyboard with extremely fast response times for pro competitive play.</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-bold text-2xl text-white">$129.99</span>
                <button className="bg-neon-purple/10 border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white font-bold py-2 px-4 rounded-full transition-colors text-xs uppercase">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

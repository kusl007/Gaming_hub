import Link from "next/link";

export default function Home() {
  const featuredGames = [
    { id: 1, title: "Starfield", platform: "PS5 / PC", price: "$69.99", rating: 5, image: "https://images.unsplash.com/photo-1627856013091-fed6e4e048c0?q=80&w=600&auto=format&fit=crop", hiddenOn: "" },
    { id: 2, title: "Diablo IV", platform: "XSX / PC", price: "$89.99", rating: 5, image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop", hiddenOn: "" },
    { id: 3, title: "Armored Core VI", platform: "PC / PS5", price: "$59.99", rating: 4, image: "https://images.unsplash.com/photo-1616450650567-c5d9ddcdccaa?q=80&w=600&auto=format&fit=crop", hiddenOn: "hidden md:flex" },
    { id: 4, title: "Baldur's Gate 3", platform: "PC / PS5", price: "$59.99", rating: 5, image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop", mixBlend: "hue-rotate(90deg)", hiddenOn: "hidden lg:flex" },
    { id: 5, title: "Spider-Man 2", platform: "PS5", price: "$69.99", rating: 5, image: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=600&auto=format&fit=crop", hiddenOn: "hidden lg:flex" },
  ];

  const featuredHardware = [
    { id: "h1", title: "PlayStation 5 Console", category: "Console", price: "$499.99", rating: 5, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=600&auto=format&fit=crop", desc: "Lightning fast load times, immersive 3D audio, and breathtaking new generation games." },
    { id: "h2", title: "Xbox Series X", category: "Console", price: "$499.99", rating: 5, image: "https://images.unsplash.com/photo-1621259182978-fbf93132e53d?q=80&w=600&auto=format&fit=crop", desc: "The fastest, most powerful Xbox ever. Explore thousands of games across four generations." },
    { id: "h3", title: "Pro Gaming Keyboard", category: "Peripherals", price: "$129.99", rating: 4, image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=600&auto=format&fit=crop", desc: "Mechanical RGB keyboard with extremely fast response times for pro competitive play." },
  ];

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
            <Link href="/product/1" className=" text-white bg-neon-green text-black font-bold py-3 px-8 rounded-full shadow-[0_0_15px_rgba(57,255,20,0.5)] hover:shadow-[0_0_25px_rgba(57,255,20,0.8)] transition-all transform hover:scale-105 uppercase tracking-wider text-sm inline-block">
              Shop Now
            </Link>
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
          {featuredGames.map(game => (
            <div key={game.id} className={`bg-surface rounded-xl overflow-hidden border border-gray-800 hover:border-neon-green/50 transition-colors group flex-col shadow-lg ${game.hiddenOn ? game.hiddenOn : 'flex'}`}>
              <Link href={`/product/${game.id}`} className="block h-64 sm:h-72 overflow-hidden relative p-4">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500" 
                  style={game.mixBlend ? { filter: game.mixBlend } : {}}
                />
              </Link>
              <div className="p-4 flex flex-col flex-1">
                <Link href={`/product/${game.id}`}>
                  <h3 className="font-bold text-lg text-white mb-1 uppercase w-full truncate hover:text-neon-green transition-colors">{game.title}</h3>
                </Link>
                <p className="text-xs text-gray-400 mb-3 uppercase">{game.platform}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">{game.price}</span>
                  <div className="flex text-yellow-500 text-xs">
                    {"★".repeat(game.rating)}{"☆".repeat(5-game.rating)}
                  </div>
                </div>
                <button className="w-full mt-auto pt-4 bg-transparent border border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-bold py-2 rounded-full transition-colors uppercase text-xs inline-block text-center mt-4">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
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
          {featuredHardware.map(item => (
            <div key={item.id} className="bg-surface rounded-xl overflow-hidden border border-gray-800 hover:border-neon-purple/50 transition-all group flex flex-col md:flex-row shadow-lg">
              <Link href={`/product/${item.id}`} className="block h-48 md:h-auto md:w-2/5 p-4 bg-white/5 flex items-center justify-center shrink-0">
                 <img src={item.image} alt={item.title} className="object-contain h-full group-hover:scale-105 transition-transform duration-300" />
              </Link>
              <div className="p-6 md:w-3/5 flex flex-col justify-center">
                <Link href={`/product/${item.id}`}>
                  <h3 className="font-bold text-xl text-white mb-2 uppercase hover:text-neon-purple transition-colors">{item.title}</h3>
                </Link>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{item.desc}</p>
                <div className="mt-auto flex flex-col gap-3">
                  <span className="font-bold text-2xl text-white block">{item.price}</span>
                  <button className="bg-neon-purple/10 border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white font-bold py-2 px-4 rounded-full transition-colors text-xs uppercase w-fit">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

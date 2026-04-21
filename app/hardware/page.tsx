import Link from "next/link";

export default function HardwarePage() {
  const hardware = [
    { id: 1, title: "PlayStation 5 Console", category: "Console", price: "$499.99", rating: 5, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=600&auto=format&fit=crop" },
    { id: 2, title: "Xbox Series X", category: "Console", price: "$499.99", rating: 5, image: "https://images.unsplash.com/photo-1621259182978-fbf93132e53d?q=80&w=600&auto=format&fit=crop" },
    { id: 3, title: "Pro Gaming Keyboard", category: "Peripherals", price: "$129.99", rating: 4, image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=600&auto=format&fit=crop" },
    { id: 4, title: "Precision Wireless Mouse", category: "Peripherals", price: "$89.99", rating: 5, image: "https://images.unsplash.com/photo-1615663245857-ac93bbda61fa?q=80&w=600&auto=format&fit=crop" },
    { id: 5, title: "Virtual Reality Headset VR2", category: "Accessories", price: "$549.99", rating: 5, image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=600&auto=format&fit=crop" },
    { id: 6, title: "High-Fidelity Gaming Headset", category: "Audio", price: "$149.99", rating: 4, image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647bcb?q=80&w=600&auto=format&fit=crop" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Premium Header - Hardware is purple themed */}
      <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden border-b border-surface/50">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" 
            alt="Hardware Arsenal" 
            className="w-full h-full object-cover opacity-20"
            style={{ filter: "grayscale(100%)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent"></div>
          {/* Subtle purple glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-neon-purple/20 blur-[120px] rounded-full pointer-events-none"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-4">
            THE <span className="text-neon-purple">ARSENAL</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Upgrade your setup with premium consoles, high-performance peripherals, and immersive accessories. Form meets function.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex flex-col md:flex-row gap-8">
        
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-8 bg-surface/30 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm shadow-[0_0_20px_rgba(176,38,255,0.05)]">
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">Category</h3>
              <ul className="space-y-3">
                {["Consoles", "Peripherals", "Monitors", "Audio", "Accessories", "Chairs & Desks"].map((cat) => (
                  <li key={cat}>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="form-checkbox text-neon-purple bg-black border-gray-700 rounded focus:ring-neon-purple/50 w-4 h-4 cursor-pointer" />
                      <span className="text-gray-400 group-hover:text-white transition-colors">{cat}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">Brand</h3>
              <ul className="space-y-3">
                {["Sony", "Microsoft", "Razer", "Logitech", "Corsair"].map((brand) => (
                  <li key={brand}>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="form-checkbox text-neon-purple bg-black border-gray-700 rounded focus:ring-neon-purple/50 w-4 h-4 cursor-pointer" />
                      <span className="text-gray-400 group-hover:text-white transition-colors">{brand}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Hardware Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-400">Showing <span className="text-white font-bold">12</span> results</p>
            <select className="bg-surface border border-gray-800 text-white text-sm rounded-lg focus:ring-neon-purple focus:border-neon-purple block p-2.5 outline-none cursor-pointer">
              <option>Sort by: Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Highest Rated</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hardware.map((item) => (
              <div key={item.id} className="bg-surface rounded-2xl overflow-hidden border border-gray-800 hover:border-neon-purple/50 transition-all group flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
                <Link href={`/product/${item.id}`} className="block h-64 sm:h-80 bg-white/5 flex items-center justify-center p-8 relative overflow-hidden">
                  {/* Backdrop glow effect on hover */}
                  <div className="absolute inset-0 bg-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl" 
                  />
                </Link>
                <div className="p-6 flex flex-col flex-1 relative z-20 bg-surface">
                  <div className="flex justify-between items-start mb-2">
                    <Link href={`/product/${item.id}`}>
                      <h3 className="font-bold text-xl text-white uppercase hover:text-neon-purple transition-colors">{item.title}</h3>
                    </Link>
                  </div>
                  <p className="text-sm text-neon-purple/80 mb-6 uppercase font-medium tracking-wide">{item.category}</p>
                  
                  <div className="mt-auto flex items-end justify-between border-t border-gray-800/50 pt-5">
                    <div>
                      <div className="flex text-yellow-500 text-xs mb-1">
                        {"★".repeat(item.rating)}{"☆".repeat(5-item.rating)}
                      </div>
                      <span className="font-bold text-white text-2xl tracking-tight">{item.price}</span>
                    </div>
                    <button className="bg-transparent border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white font-bold py-3 px-6 rounded-lg transition-all uppercase text-sm tracking-wider shadow-[0_0_10px_rgba(176,38,255,0.1)] hover:shadow-[0_0_20px_rgba(176,38,255,0.4)]">
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

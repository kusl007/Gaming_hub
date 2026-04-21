import Link from "next/link";
import { hardwareData } from "@/lib/hardware-data";

export default function HardwarePage() {
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
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/90 to-transparent"></div>
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="w-full">
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-400">Showing <span className="text-white font-bold">12</span> results</p>
            <select className="bg-surface border border-gray-800 text-white text-sm rounded-lg focus:ring-neon-purple focus:border-neon-purple block p-2.5 outline-none cursor-pointer">
              <option>Sort by: Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Highest Rated</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hardwareData.map((item) => (
              <div key={item.id} className="bg-surface rounded-2xl overflow-hidden border border-gray-800 transition-colors group flex flex-col h-full shadow-lg">
                <Link href={`/hardware/${item.id}`} className="h-64 bg-white/5 flex items-center justify-center p-8 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-contain relative z-10 drop-shadow-2xl" 
                  />
                </Link>
                <div className="p-6 flex flex-col flex-1 relative z-20 bg-surface">
                  <div className="flex justify-between items-start mb-2">
                    <Link href={`/hardware/${item.id}`}>
                      <h3 className="font-bold text-xl text-white uppercase hover:text-neon-purple transition-colors">{item.title}</h3>
                    </Link>
                  </div>
                  <p className="text-sm text-neon-purple/80 mb-6 uppercase font-medium tracking-wide">{item.category}</p>
                  <p className="text-sm text-gray-400 mb-6 line-clamp-3">{item.description}</p>
                  
                  <div className="mt-auto flex items-end justify-between border-t border-gray-800/50 pt-5">
                    <div>
                      <div className="flex text-yellow-500 text-xs mb-1">
                        {"★".repeat(item.rating)}{"☆".repeat(5-item.rating)}
                      </div>
                      <span className="font-bold text-white text-2xl tracking-tight">{item.price}</span>
                    </div>
                    <Link href={`/hardware/${item.id}`} className="bg-transparent border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white font-bold py-3 px-6 rounded-lg transition-all uppercase text-sm tracking-wider shadow-[0_0_10px_rgba(176,38,255,0.1)] hover:shadow-[0_0_20px_rgba(176,38,255,0.4)]">
                      View Details
                    </Link>
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

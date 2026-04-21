"use client";

import { useState } from "react";
import Link from "next/link";
// Using React.use temporarily since this is static for now

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("description");

  // In a real app, we would fetch product by ID from MongoDB here
  const product = {
    id: "1",
    title: "Cyberpunk 2077: Phantom Liberty",
    category: "Action RPG",
    platform: "PC / PS5 / Xbox Series X",
    price: "$49.99",
    rating: 4.8,
    reviewsCount: 1245,
    description: "Phantom Liberty is a new spy-thriller expansion for the open-world action-adventure RPG Cyberpunk 2077. As cyber-enhanced mercenary V, join secret agent Solomon Reed to unravel a web of shattered loyalties and sinister political machinations.",
    features: [
      "Infiltrate Dogtown, a city-within-a-city run by a trigger-happy militia.",
      "Experience an intricate espionage story blending political intrigue and cyberware.",
      "Unlock a new skill tree, fresh weapons, and vehicles.",
      "Action-packed missions that test your stealth and combat to the limit."
    ],
    specs: {
      developer: "CD Projekt Red",
      publisher: "CD Projekt",
      releaseDate: "Sep 26, 2023",
      esrb: "Mature 17+",
      fileSize: "70 GB Minimum"
    },
    images: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1627856013091-fed6e4e048c0?q=80&w=600&auto=format&fit=crop"
    ]
  };

  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground pb-20">
      
      {/* Breadcrumbs */}
      <div className="bg-surface border-b border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-gray-400">
            <Link href="/" className="hover:text-neon-green transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/games" className="hover:text-neon-green transition-colors">Games</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">{product.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        
        {/* Top Product Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          
          {/* Image Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="border border-gray-800 rounded-2xl overflow-hidden bg-surface p-2 shadow-2xl relative group h-[400px] md:h-[500px]">
              {/* Subtle background glow behind the image */}
              <div className="absolute inset-0 bg-neon-green/5 blur-[100px] pointer-events-none"></div>
              <img 
                src={mainImage} 
                alt={product.title} 
                className="w-full h-full object-cover rounded-xl shadow-inner transition-opacity duration-300"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setMainImage(img)}
                  className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${mainImage === img ? 'border-neon-green selected-ring' : 'border-gray-800 hover:border-gray-500'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx+1}`} className="w-full h-full object-cover" />
                  {mainImage === img && <div className="absolute inset-0 bg-neon-green/20"></div>}
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col pt-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-neon-green/10 text-neon-green border border-neon-green/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {product.category}
              </span>
              <span className="text-gray-400 text-sm uppercase">{product.platform}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 uppercase">
              {product.title}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex text-yellow-500">
                ★★★★★
              </div>
              <span className="text-white font-bold">{product.rating}</span>
              <span className="text-gray-500 text-sm">({product.reviewsCount} Reviews)</span>
            </div>
            
            <div className="text-4xl font-black text-white mb-8 border-b border-gray-800 pb-8 flex items-baseline gap-2">
              {product.price}
              <span className="text-sm font-normal text-gray-500 line-through">$69.99</span>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {product.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button className="flex-1 bg-neon-green text-black font-bold py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)] transition-all transform hover:scale-[1.02] uppercase tracking-wider text-lg flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>
              <button className="w-full sm:w-auto bg-surface border-2 border-gray-700 hover:border-white text-white font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center group">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-red-500 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Added Perks Area */}
            <div className="mt-8 grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                <span className="text-sm text-gray-400">Secure Checkout</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                <span className="text-sm text-gray-400">Instant Digital Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Content Section */}
        <div className="bg-surface border border-gray-800 rounded-2xl overflow-hidden mt-12">
          {/* Tabs */}
          <div className="flex border-b border-gray-800 overflow-x-auto">
            <button 
              onClick={() => setActiveTab('description')}
              className={`flex-1 py-5 px-6 font-bold uppercase tracking-wider text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === 'description' ? 'border-neon-green text-neon-green bg-black/40' : 'border-transparent text-gray-400 hover:text-white hover:bg-black/20'}`}
            >
              Key Features
            </button>
            <button 
              onClick={() => setActiveTab('specs')}
              className={`flex-1 py-5 px-6 font-bold uppercase tracking-wider text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === 'specs' ? 'border-neon-green text-neon-green bg-black/40' : 'border-transparent text-gray-400 hover:text-white hover:bg-black/20'}`}
            >
              Specifications
            </button>
            <button 
              onClick={() => setActiveTab('reviews')}
              className={`flex-1 py-5 px-6 font-bold uppercase tracking-wider text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === 'reviews' ? 'border-neon-green text-neon-green bg-black/40' : 'border-transparent text-gray-400 hover:text-white hover:bg-black/20'}`}
            >
              User Reviews
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="p-8 md:p-12 min-h-[300px]">
            {activeTab === 'description' && (
              <div className="animate-in fade-in duration-500">
                <h3 className="text-2xl font-bold text-white mb-6 uppercase">Why Play {product.title}?</h3>
                <ul className="space-y-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-neon-green"></div>
                      <p className="text-lg text-gray-300">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'specs' && (
              <div className="animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex border-b border-gray-800 pb-4">
                      <span className="w-1/3 text-gray-500 font-bold uppercase text-sm tracking-wider">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="w-2/3 text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="animate-in fade-in duration-500">
                <div className="flex items-center gap-8 mb-8 pb-8 border-b border-gray-800">
                  <div className="text-6xl font-black text-white">{product.rating}</div>
                  <div>
                    <div className="flex text-yellow-500 text-xl mb-1">★★★★★</div>
                    <span className="text-gray-400">Based on {product.reviewsCount} reviews</span>
                  </div>
                  <button className="ml-auto bg-transparent border border-white text-white hover:bg-white hover:text-black font-bold py-2 px-6 rounded-lg transition-colors uppercase text-sm">
                    Write a Review
                  </button>
                </div>
                {/* Mock Review */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold">JD</div>
                    <div>
                      <h4 className="text-white font-bold">John Doe</h4>
                      <div className="flex text-yellow-500 text-xs">★★★★★</div>
                    </div>
                    <span className="ml-auto text-gray-500 text-sm">2 days ago</span>
                  </div>
                  <p className="text-gray-300">Absolutely breathtaking expansion. The new district is incredibly dense and the storyline kept me hooked from start to finish. Essential for any Cyberpunk fan!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call and redirect
    setTimeout(() => {
      alert("Order placed successfully! Thank you for shopping with Evolution.");
      router.push("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Link href="/cart" className="text-neon-purple hover:text-white transition-colors text-sm font-bold uppercase tracking-wider flex items-center gap-2 mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Cart
          </Link>
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Secure <span className="text-neon-purple">Checkout</span></h1>
        </div>

        <form onSubmit={handleCheckout} className="flex flex-col lg:flex-row gap-8">
          
          {/* Checkout Details */}
          <div className="w-full lg:w-2/3 space-y-8">
            
            {/* Contact Info */}
            <div className="bg-surface/60 border border-gray-800 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-white mb-6 uppercase border-b border-gray-800 pb-4">1. Contact Information</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Email Address</label>
                  <input type="email" required className="w-full bg-black/50 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-neon-purple focus:border-transparent block p-3 transition-all outline-none" placeholder="you@example.com" />
                </div>
                <label className="flex items-center gap-3 cursor-pointer group mt-2">
                  <input type="checkbox" defaultChecked className="form-checkbox text-neon-purple bg-black border-gray-700 rounded focus:ring-neon-purple/50 w-4 h-4 cursor-pointer" />
                  <span className="text-gray-400 text-sm group-hover:text-white transition-colors">Keep me up to date on news and exclusive offers</span>
                </label>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-surface/60 border border-gray-800 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-white mb-6 uppercase border-b border-gray-800 pb-4">2. Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">First Name</label>
                  <input type="text" required className="w-full bg-black/50 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-neon-purple focus:border-transparent block p-3 transition-all outline-none" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Last Name</label>
                  <input type="text" required className="w-full bg-black/50 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-neon-purple focus:border-transparent block p-3 transition-all outline-none" placeholder="Doe" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Address</label>
                  <input type="text" required className="w-full bg-black/50 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-neon-purple focus:border-transparent block p-3 transition-all outline-none" placeholder="123 Gaming Street" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">City</label>
                  <input type="text" required className="w-full bg-black/50 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-neon-purple focus:border-transparent block p-3 transition-all outline-none" placeholder="New York" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Postal Code</label>
                  <input type="text" required className="w-full bg-black/50 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-neon-purple focus:border-transparent block p-3 transition-all outline-none" placeholder="10001" />
                </div>
              </div>
            </div>

            {/* Payment Gateway */}
            <div className="bg-surface/60 border border-gray-800 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-white mb-6 uppercase border-b border-gray-800 pb-4">3. Payment Method</h2>
              <div className="space-y-4">
                
                {/* Credit Card Mock Toggle */}
                <label className="relative flex items-center justify-between p-4 border-2 border-neon-purple bg-neon-purple/5 rounded-xl cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" defaultChecked className="text-neon-purple focus:ring-neon-purple bg-black border-gray-700 w-5 h-5 cursor-pointer" />
                    <span className="text-white font-bold">Credit Card</span>
                  </div>
                  <div className="flex gap-2">
                     <svg className="h-6 text-white" viewBox="0 0 38 24" fill="currentColor"><rect width="38" height="24" rx="4" fillOpacity="0.2"/></svg>
                  </div>
                </label>

                <div className="p-4 bg-black/30 border border-gray-800 rounded-xl space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Card Number</label>
                    <input type="text" required pattern="[0-9]{16}" placeholder="0000 0000 0000 0000" className="w-full bg-black/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-neon-purple block p-3 outline-none" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Expiration</label>
                      <input type="text" required placeholder="MM/YY" className="w-full bg-black/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-neon-purple block p-3 outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Security Code</label>
                      <input type="text" required placeholder="CVC" className="w-full bg-black/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-neon-purple block p-3 outline-none" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Checkout Summary Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-surface/60 backdrop-blur-md border border-gray-800 rounded-2xl p-6 lg:sticky lg:top-24 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 uppercase border-b border-gray-800 pb-4">In Your Bag</h3>
              
              {/* Mini Cart Display */}
              <div className="space-y-4 mb-6">
                {[
                   { title: "Cyberpunk 2077: Phantom Liberty", price: 49.99, img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600" },
                   { title: "Pro Gaming Keyboard", price: 129.99, img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=600" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <div className="w-16 h-16 rounded border border-gray-700 overflow-hidden flex-shrink-0">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white font-bold line-clamp-1">{item.title}</p>
                      <p className="text-xs text-gray-400">Qty: 1</p>
                    </div>
                    <span className="text-sm font-bold text-white">${item.price}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 pt-4 border-t border-gray-800 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-white">$179.98</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Estimated Tax</span>
                  <span className="text-white">$14.40</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span className="text-neon-green uppercase font-bold text-xs">Free</span>
                </div>
              </div>
              
              <div className="border-t border-gray-800 pt-4 mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-lg text-white font-bold">Total</span>
                  <span className="text-3xl font-black text-white">${(179.98 + 14.40).toFixed(2)}</span>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isProcessing}
                className={`w-full font-bold py-4 rounded-xl transition-all uppercase tracking-wider text-sm flex items-center justify-center gap-3 ${isProcessing ? 'bg-gray-600 text-white cursor-not-allowed' : 'bg-neon-purple text-white shadow-[0_0_15px_rgba(176,38,255,0.3)] hover:shadow-[0_0_25px_rgba(176,38,255,0.6)]'}`}
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Pay ${(179.98 + 14.40).toFixed(2)}
                  </>
                )}
              </button>
            </div>
          </div>
          
        </form>
        
      </div>
    </div>
  );
}

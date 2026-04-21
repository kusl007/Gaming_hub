"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type CartItem = {
  _id: string;
  productId: number;
  productType: "game" | "hardware";
  title: string;
  platform: string;
  price: number;
  quantity: number;
  image: string;
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  const loadCart = async () => {
    setLoading(true);
    setAuthError("");
    try {
      const res = await fetch("/api/cart");
      if (res.status === 401) {
        setAuthError("Please log in to view your cart.");
        setCartItems([]);
        return;
      }
      const data = await res.json();
      if (res.ok) {
        setCartItems(data.items ?? []);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const updateQuantity = async (itemId: string, delta: number) => {
    const current = cartItems.find((item) => item._id === itemId);
    if (!current) return;
    const newQuantity = Math.max(1, current.quantity + delta);
    const res = await fetch(`/api/cart/${itemId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: newQuantity }),
    });
    if (res.ok) {
      const data = await res.json();
      setCartItems(data.items ?? []);
    }
  };

  const removeItem = async (itemId: string) => {
    const res = await fetch(`/api/cart/${itemId}`, { method: "DELETE" });
    if (res.ok) {
      const data = await res.json();
      setCartItems(data.items ?? []);
    }
  };

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Your <span className="text-neon-purple">Cart</span></h1>
          <span className="bg-surface border border-gray-800 text-gray-400 py-1 px-3 rounded-full text-sm font-bold">
            {cartItems.reduce((sum, item) => sum + item.quantity, 0)} Items
          </span>
        </div>

        {loading ? (
          <div className="bg-surface/50 border border-gray-800 rounded-2xl p-16 text-center text-white">
            Loading cart...
          </div>
        ) : authError ? (
          <div className="bg-surface/50 border border-gray-800 rounded-2xl p-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">{authError}</h2>
            <Link href="/login?redirect=/cart" className="bg-neon-purple text-white font-bold py-3 px-8 rounded-full hover:shadow-[0_0_20px_rgba(176,38,255,0.4)] transition-all uppercase tracking-wider text-sm inline-block">
              Log In
            </Link>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="bg-surface/50 border border-gray-800 rounded-2xl p-16 text-center">
            <svg className="w-24 h-24 text-gray-600 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h2 className="text-2xl font-bold text-white mb-4">Your cart is currently empty</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">Looks like you haven't added anything to your cart yet. Browse our top categories to find something you'll love.</p>
            <Link href="/games" className="bg-neon-purple text-white font-bold py-3 px-8 rounded-full hover:shadow-[0_0_20px_rgba(176,38,255,0.4)] transition-all uppercase tracking-wider text-sm inline-block">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Cart Items List */}
            <div className="w-full lg:w-2/3 space-y-4">
              {cartItems.map(item => (
                <div key={item._id} className="bg-surface border border-gray-800 rounded-xl p-4 flex flex-col sm:flex-row items-center gap-6 relative group">
                  
                  {/* Remove Button */}
                  <button 
                    onClick={() => removeItem(item._id)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors bg-background p-1.5 rounded-full border border-gray-800 hover:border-red-500/50 hidden sm:block group-hover:opacity-100 opacity-60"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>

                  <div className="w-full sm:w-32 h-32 shrink-0 rounded-lg overflow-hidden border border-gray-700 relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col w-full">
                    <div className="flex justify-between items-start mb-1 pr-8">
                      <Link href={item.productType === "game" ? `/games/${item.productId}` : `/hardware/${item.productId}`}>
                        <h3 className="text-xl font-bold text-white hover:text-neon-purple transition-colors line-clamp-1">{item.title}</h3>
                      </Link>
                    </div>
                    <p className="text-xs text-neon-purple/80 uppercase font-medium mb-4">{item.platform}</p>
                    
                    <div className="mt-auto flex items-end justify-between border-t border-gray-800 pt-4">
                      <div className="flex items-center gap-4 bg-background border border-gray-700 rounded-lg p-1">
                        <button onClick={() => updateQuantity(item._id, -1)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                        </button>
                        <span className="w-6 text-center font-bold text-white">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item._id, 1)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500 mb-1">Unit Price: ${item.price.toFixed(2)}</p>
                        <span className="font-bold text-xl text-white">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Remove */}
                  <button onClick={() => removeItem(item._id)} className="w-full mt-2 sm:hidden text-red-500 text-sm border border-red-500/30 rounded py-2 hover:bg-red-500/10 transition-colors uppercase font-bold tracking-wider">
                    Remove Item
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary Checkout Panel */}
            <div className="w-full lg:w-1/3">
              <div className="bg-surface/60 backdrop-blur-md border border-gray-800 rounded-2xl p-6 lg:sticky lg:top-24 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6 uppercase border-b border-gray-800 pb-4">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center text-gray-300">
                    <span>Subtotal</span>
                    <span className="font-medium text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300">
                    <span>Estimated Tax (8%)</span>
                    <span className="font-medium text-white">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300">
                    <span>Shipping</span>
                    <span className="font-medium text-neon-green uppercase text-xs">Free</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-800 pt-4 mb-8">
                  <div className="flex justify-between items-end">
                    <span className="text-lg text-white font-bold">Total</span>
                    <span className="text-3xl font-black text-white">${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/checkout" className="w-full text-center bg-neon-purple text-white font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(176,38,255,0.3)] hover:shadow-[0_0_25px_rgba(176,38,255,0.6)] transition-all uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Secure Checkout
                  </Link>
                  <Link href="/games" className="w-full block text-center bg-transparent border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white font-bold py-3.5 rounded-xl transition-all uppercase tracking-wider text-xs">
                    Continue Shopping
                  </Link>
                </div>
                
                <div className="mt-6 flex items-center justify-center gap-4 border-t border-gray-800 pt-6">
                  {/* Simple generic svg icons for payments */}
                  <svg className="h-8 text-gray-500" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="38" height="24" rx="4" fill="currentColor" fillOpacity="0.2"/></svg>
                  <svg className="h-8 text-gray-500" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="38" height="24" rx="4" fill="currentColor" fillOpacity="0.2"/></svg>
                  <svg className="h-8 text-gray-500" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="38" height="24" rx="4" fill="currentColor" fillOpacity="0.2"/></svg>
                </div>
              </div>
            </div>
            
          </div>
        )}
        
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only mock action for now
    console.log("Login attempted with:", email, password);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center relative overflow-hidden bg-background">
      {/* Background visual effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-green/10 rounded-full blur-[150px] opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[150px] opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="w-full max-w-md px-4 relative z-10">
        <div className="bg-surface/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 md:p-10 shadow-2xl">
          
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black tracking-tighter text-white mb-2 uppercase">
              Welcome <span className="text-neon-green">Back</span>
            </h1>
            <p className="text-gray-400 text-sm">
              Enter your credentials to access your library.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-black/50 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent block p-4 transition-all outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2 relative">
              <div className="flex justify-between items-center pl-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Password</label>
                <a href="#" className="text-xs text-neon-green hover:underline">Forgot?</a>
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-black/50 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent block p-4 transition-all outline-none"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-neon-green text-black font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:shadow-[0_0_25px_rgba(57,255,20,0.6)] transition-all uppercase tracking-wider text-sm mt-4"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <Link href="/register" className="text-white font-bold hover:text-neon-green transition-colors border-b border-transparent hover:border-neon-green pb-0.5">
              Create one now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchParams?.get("registered") === "true") {
      setSuccessMsg("Registration successful! Please log in.");
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      const redirectTo = searchParams?.get("redirect") || "/";
      router.push(redirectTo);
      router.refresh(); // Refresh to catch new cookies in layouts
      
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
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

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-xl mb-6 text-sm">
              {error}
            </div>
          )}

          {successMsg && (
            <div className="bg-green-500/10 border border-green-500 text-green-500 px-4 py-3 rounded-xl mb-6 text-sm">
              {successMsg}
            </div>
          )}

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
                <button type="button" className="text-xs text-neon-green/80 hover:text-neon-green transition-colors">Forgot?</button>
              </div>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-black/50 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent block p-4 pr-12 transition-all outline-none"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 px-4 text-gray-400 hover:text-white transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-10-7a18.07 18.07 0 012.859-4.227m3.111-2.184A9.956 9.956 0 0112 5c5 0 9 4 10 7a18.091 18.091 0 01-4.243 5.586M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 9L3 3" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.27 2.944 9.542 7-1.272 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="mt-2 text-xs text-gray-400 hover:text-white hidden"
              >
                {showPassword ? "Hide password" : "Show password"}
              </button>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full text-black font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all uppercase tracking-wider text-sm mt-4 ${isLoading ? 'bg-gray-600 cursor-not-allowed text-white shadow-none' : 'bg-neon-green hover:shadow-[0_0_25px_rgba(57,255,20,0.6)]'}`}
            >
              {isLoading ? "Signing In..." : "Sign In"}
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

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading...</div>}>
      <LoginContent />
    </Suspense>
  )
}

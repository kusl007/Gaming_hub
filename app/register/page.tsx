"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong during registration");
      }

      const redirectTo = searchParams.get("redirect") || "/";
      router.push(redirectTo);
      router.refresh();
      
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center relative overflow-hidden bg-background py-16">
      {/* Background visual effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-neon-green/10 rounded-full blur-[150px] opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-neon-green/10 rounded-full blur-[150px] opacity-40"></div>
      </div>

      <div className="w-full max-w-lg px-4 relative z-10">
        <div className="bg-surface/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 md:p-10 shadow-2xl">
          
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black tracking-tighter text-white mb-2 uppercase">
              Join <span className="text-neon-green">Sandeep Store</span>
            </h1>
            <p className="text-gray-400 text-sm">
              Create an account to track orders and save your wishlist.
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-xl mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Username</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full bg-black/50 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent block p-4 transition-all outline-none"
                placeholder="GamerTag99"
              />
            </div>

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Password</label>
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
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Confirm</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-xs text-gray-400 hover:text-white hidden"
            >
              {showPassword ? "Hide passwords" : "Show passwords"}
            </button>

            <div className="pt-2 pb-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" required className="form-checkbox text-neon-green bg-black border-gray-700 rounded focus:ring-neon-green/50 w-5 h-5 cursor-pointer" />
                <span className="text-gray-400 text-sm group-hover:text-white transition-colors">
                  I agree to the <a href="#" className="text-neon-green hover:underline">Terms of Service</a> & <a href="#" className="text-neon-green hover:underline">Privacy Policy</a>.
                </span>
              </label>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full text-black font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all uppercase tracking-wider text-sm ${isLoading ? 'bg-gray-600 cursor-not-allowed text-white shadow-none' : 'bg-neon-green hover:shadow-[0_0_25px_rgba(57,255,20,0.6)]'}`}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-white font-bold hover:text-neon-green transition-colors border-b border-transparent hover:border-neon-green pb-0.5">
              Sign in instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

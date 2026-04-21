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
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[150px] opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-neon-green/10 rounded-full blur-[150px] opacity-40"></div>
      </div>

      <div className="w-full max-w-lg px-4 relative z-10">
        <div className="bg-surface/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 md:p-10 shadow-2xl">
          
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black tracking-tighter text-white mb-2 uppercase">
              Join <span className="text-neon-purple">Sandeep Store</span>
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
                className="w-full bg-black/50 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-neon-purple focus:border-transparent block p-4 transition-all outline-none"
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
                className="w-full bg-black/50 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-neon-purple focus:border-transparent block p-4 transition-all outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Password</label>
                <input 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-black/50 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-neon-purple focus:border-transparent block p-4 transition-all outline-none"
                  placeholder="••••••••"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Confirm</label>
                <input 
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full bg-black/50 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-neon-purple focus:border-transparent block p-4 transition-all outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-xs text-gray-400 hover:text-white"
            >
              {showPassword ? "Hide passwords" : "Show passwords"}
            </button>

            <div className="pt-2 pb-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" required className="form-checkbox text-neon-purple bg-black border-gray-700 rounded focus:ring-neon-purple/50 w-5 h-5 cursor-pointer" />
                <span className="text-gray-400 text-sm group-hover:text-white transition-colors">
                  I agree to the <a href="#" className="text-neon-purple hover:underline">Terms of Service</a> & <a href="#" className="text-neon-purple hover:underline">Privacy Policy</a>.
                </span>
              </label>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full text-white font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(176,38,255,0.3)] transition-all uppercase tracking-wider text-sm ${isLoading ? 'bg-gray-600 cursor-not-allowed' : 'bg-neon-purple hover:shadow-[0_0_25px_rgba(176,38,255,0.6)]'}`}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-white font-bold hover:text-neon-purple transition-colors border-b border-transparent hover:border-neon-purple pb-0.5">
              Sign in instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

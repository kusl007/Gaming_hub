"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/hardware", label: "Hardware" },
  { href: "/tournament", label: "Tournament" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const loadUserAndCart = async () => {
      const meRes = await fetch("/api/auth/me");
      if (!meRes.ok) return;
      const meData = await meRes.json();
      const currentUser = meData.user ? { username: meData.user.username } : null;
      setUser(currentUser);

      if (!currentUser) {
        setCartCount(0);
        return;
      }

      const cartRes = await fetch("/api/cart");
      if (!cartRes.ok) {
        setCartCount(0);
        return;
      }
      const cartData = await cartRes.json();
      const totalItems = (cartData.items ?? []).reduce(
        (sum: number, item: { quantity: number }) => sum + item.quantity,
        0,
      );
      setCartCount(totalItems);
    };
    loadUserAndCart();
  }, [pathname]);

  useEffect(() => {
    // Avoid useSearchParams in layout-level navbar to prevent prerender errors.
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    setQuery(url.searchParams.get("q") ?? "");
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    setCartCount(0);
    setIsMobileMenuOpen(false);
    window.location.href = "/";
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      router.push("/search");
      return;
    }
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="border-b border-surface/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center shrink-0">
              <Image src="/logo.png" alt="Sandeep Gaming Store logo" width={60} height={60} className="rounded-md w-full" />
            </Link>
            <div className="hidden lg:block">
              <div className="flex items-baseline space-x-2 lg:space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium uppercase transition-colors border-b-2 ${
                      isActive(link.href)
                        ? "text-neon-green border-neon-green"
                        : "text-gray-300 hover:text-neon-green border-transparent hover:border-neon-green/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <form onSubmit={handleSearchSubmit} className="relative hidden lg:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-surface border border-gray-700 text-sm rounded-full focus:ring-neon-green focus:border-neon-green block w-full pl-10 pr-4 p-2 placeholder-gray-400 text-white"
                placeholder="Search games & hardware..."
              />
            </form>
            
            <Link href="/cart" className="text-gray-300 hover:text-white p-2 relative">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 ? (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center min-w-5 h-5 px-1.5 text-xs font-bold leading-none text-black bg-neon-green rounded-full transform translate-x-1/4 -translate-y-1/4">
                  {cartCount}
                </span>
              ) : null}
            </Link>
            
            {user ? (
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center gap-2 text-xs uppercase border border-neon-green/40 bg-neon-green/10 rounded-lg px-3 py-1.5 text-neon-green hover:bg-neon-green hover:text-black transition-colors font-semibold"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h5a2 2 0 012 2v1" />
                </svg>
                Logout
              </button>
            ) : (
              <Link href="/login" className="text-gray-300 hover:text-white p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
            )}

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="lg:hidden text-gray-300 hover:text-white p-2"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-800 bg-background/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-2">
            <form onSubmit={handleSearchSubmit} className="mb-3">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search games & hardware..."
                className="w-full rounded-lg border border-gray-700 bg-black/30 px-3 py-2 text-sm text-white"
              />
            </form>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block rounded-lg px-3 py-2 text-sm font-medium uppercase transition-colors ${
                  isActive(link.href)
                    ? "text-neon-green bg-neon-green/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {user ? (
              <button
                type="button"
                onClick={handleLogout}
                className="w-full rounded-lg border border-neon-green/40 bg-neon-green/10 px-3 py-2 text-left text-sm font-medium uppercase text-neon-green hover:bg-neon-green hover:text-black transition-colors"
              >
                Logout ({user.username})
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium uppercase text-gray-300 hover:text-white hover:bg-white/5"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

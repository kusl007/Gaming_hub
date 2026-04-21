"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="border-b border-surface/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image src="/logo.png" alt="Sandeep Gaming Store logo" width={36} height={36} className="rounded-md" />
              <span className="text-lg lg:text-xl font-bold tracking-tight text-white">
                Sandeep Gaming Store
              </span>
            </Link>
            <div className="hidden md:block">
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
          
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="bg-surface border border-gray-700 text-sm rounded-full focus:ring-neon-green focus:border-neon-green block w-full pl-10 p-2 placeholder-gray-400 text-white"
                placeholder="Search Games..."
              />
            </div>
            
            <Link href="/cart" className="text-gray-300 hover:text-white p-2 relative">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-black bg-neon-green rounded-full transform translate-x-1/4 -translate-y-1/4">
                3
              </span>
            </Link>
            
            <Link href="/login" className="text-gray-300 hover:text-white p-2">
               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
               </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

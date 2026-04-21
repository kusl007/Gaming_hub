import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold tracking-tighter text-white">
              EVOLUTION<span className="text-neon-purple">.</span>
            </span>
               <Image src="/logo.png" alt="Logo"className=" w-1/3" width={40} height={40}/>
            <p className="mt-4 text-gray-400 max-w-sm">
              The ultimate destination for next-gen gaming. Discover the latest AAA titles, cutting-edge hardware, and exclusive gear.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Store</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/games" className="text-base text-gray-400 hover:text-neon-purple transition-colors">
                  Video Games
                </Link>
              </li>
              <li>
                <Link href="/hardware" className="text-base text-gray-400 hover:text-neon-purple transition-colors">
                  Consoles & Gear
                </Link>
              </li>
              <li>
                <Link href="/new-releases" className="text-base text-gray-400 hover:text-neon-purple transition-colors">
                  New Releases
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/contact" className="text-base text-gray-400 hover:text-neon-purple transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-base text-gray-400 hover:text-neon-purple transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-base text-gray-400 hover:text-neon-purple transition-colors">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">
            &copy; 2026 Evolution Gaming Hub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             {/* Simple social icons */}
             <a href="#" className="text-gray-400 hover:text-white">
               <span className="sr-only">Twitter</span>
               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                 <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
               </svg>
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

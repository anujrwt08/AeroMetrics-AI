"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardTopBar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Features', path: '/capabilities' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: '|', path: '#', isSeparator: true },
    { name: 'Predictive Models', path: '/dashboard' },
    { name: 'Satellite Feeds', path: '/dashboard/atmospheric-feed' },
    { name: 'Global Logistics', path: '/dashboard/logistics-routing' },
  ];

  return (
    <header className="flex justify-between items-center w-full px-8 h-16 fixed top-0 z-50 bg-slate-950/40 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,242,255,0.05)]">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-cyan-400 drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] font-['Space_Grotesk']">
          AeroMetrics AI
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item, index) => {
            if (item.isSeparator) {
              return <span key={`sep-${index}`} className="text-white/20 select-none">|</span>;
            }
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={
                  isActive
                    ? "text-cyan-400 font-semibold border-b-2 border-cyan-400 py-1 transition-all duration-300"
                    : "text-slate-400 font-medium hover:bg-white/5 hover:text-cyan-300 px-3 py-1 rounded transition-all duration-300"
                }
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
          <input 
            type="text" 
            placeholder="Search parameters..." 
            className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-cyan-400/50 w-64 transition-all"
          />
        </div>
        <button className="p-2 text-slate-400 hover:text-cyan-300 transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="p-2 text-slate-400 hover:text-cyan-300 transition-colors">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <div className="h-8 w-8 rounded-full border border-cyan-400/30 p-0.5 overflow-hidden">
          <img 
            alt="Analyst Profile" 
            className="w-full h-full object-cover rounded-full" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3nyrtmvV-EZ7CLpK5UvYDOnv3i61b5BsAvFuG_UfHBYPJttI1euRukJMcQdG9mseLk-S0vIrJFzVpyf504NkYUYiYlNOcGdxo5baDon99Jig3AOBDeLiEj-MX1K1iS6mydtE2JL-M4xUhq9us7iwcN7qRfn1jD3p11WTMbXtSdfrhLQo8FuwX_cUnPDC-TtRss0lg8Hl6pi3qpkXXOsGuLsLHsgcgjtspP_p9Xd5Nb2Gyi4oSEekKPvlnL1sB_0DGYlm4BnKiaRDz"
          />
        </div>
      </div>
    </header>
  );
}

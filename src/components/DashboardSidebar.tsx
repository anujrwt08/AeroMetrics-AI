"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardSidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Atmospheric Feed', path: '/dashboard/atmospheric-feed', icon: 'cyclone' },
    { name: 'Logistics Routing', path: '/dashboard/logistics-routing', icon: 'alt_route' },
    { name: 'Historical Trends', path: '/dashboard/historical-trends', icon: 'history' },
    { name: 'Predictive Models', path: '/dashboard', icon: 'query_stats' },
  ];

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-72 flex flex-col z-40 bg-slate-950/60 backdrop-blur-2xl border-r border-white/10">
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 rounded bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
            <span className="material-symbols-outlined text-cyan-400">hub</span>
          </div>
          <div>
            <h2 className="text-xl font-black text-white font-['Space_Grotesk'] leading-tight">Weather Systems</h2>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Global Logistics Node</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 py-4">
        <div className="px-4 py-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Navigation</div>
        
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={
                isActive
                  ? "bg-cyan-500/10 text-cyan-400 border-r-2 border-cyan-400 flex items-center gap-3 px-6 py-4 active:translate-x-1 transition-transform"
                  : "text-slate-400 flex items-center gap-3 px-6 py-4 hover:bg-white/5 hover:text-white transition-colors"
              }
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-['Space_Grotesk'] text-sm">{item.name}</span>
            </Link>
          );
        })}

        <div className="mt-8 px-6">
          <div className="glass-card rounded-xl p-4 border border-cyan-400/20 bg-cyan-950/20">
            <h3 className="text-label-md text-cyan-300 mb-2">SYSTEM FILTERS</h3>
            <div className="mb-4">
              <label className="block text-[10px] text-slate-400 mb-1">CITY SELECTION</label>
              <select className="w-full bg-slate-900/50 border-b border-cyan-500/50 text-white text-sm py-1 focus:outline-none appearance-none">
                <option>Reykjavik, IS</option>
                <option>Tokyo, JP</option>
                <option>New York, US</option>
                <option>London, UK</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-[10px] text-slate-400 mb-1">DATE RANGE</label>
              <div className="flex items-center gap-2 text-xs text-white">
                <span className="material-symbols-outlined text-xs text-cyan-400">calendar_today</span>
                Oct 01 — Oct 31
              </div>
            </div>
            <button className="w-full bg-cyan-500 text-on-primary-container font-bold text-xs py-2 rounded-lg hover:bg-cyan-400 transition-colors neon-glow-primary">
              Export Dataset
            </button>
          </div>
        </div>
      </nav>
      <div className="p-6 border-t border-white/10 flex flex-col gap-4">
        <a className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors" href="#">
          <span className="material-symbols-outlined text-sm">help</span>
          <span className="text-xs">Support</span>
        </a>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-slate-400">
            <span className="material-symbols-outlined text-sm text-cyan-400">sensors</span>
            <span className="text-xs">System Status</span>
          </div>
          <div className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(67,236,219,0.8)]"></div>
        </div>
      </div>
    </aside>
  );
}

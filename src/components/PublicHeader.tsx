import Link from 'next/link';

export default function PublicHeader({ activePath }: { activePath?: string }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <nav className="flex items-center justify-between px-6 py-4 max-w-full font-['Space_Grotesk'] text-slate-100 tracking-tight">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-cyan-400 drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]">
            AeroAnalytics
          </Link>
          <div className="hidden md:flex gap-6">
            <Link 
              href="/capabilities" 
              className={`${activePath === '/capabilities' ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1 font-bold' : 'text-slate-400 font-medium hover:text-slate-100 hover:bg-white/5 transition-all duration-300 rounded-lg px-3 py-1'}`}
            >
              Features
            </Link>
            <Link 
              href="/pricing" 
              className={`${activePath === '/pricing' ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1 font-bold' : 'text-slate-400 font-medium hover:text-slate-100 hover:bg-white/5 transition-all duration-300 rounded-lg px-3 py-1'}`}
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className={`${activePath === '/about' ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1 font-bold' : 'text-slate-400 font-medium hover:text-slate-100 hover:bg-white/5 transition-all duration-300 rounded-lg px-3 py-1'}`}
            >
              About
            </Link>
            <Link 
              href="/dashboard" 
              className={`${activePath === '/dashboard' ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1 font-bold' : 'text-slate-400 font-medium hover:text-slate-100 hover:bg-white/5 transition-all duration-300 rounded-lg px-3 py-1'}`}
            >
              Dashboard
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/pricing" className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-bold transition-all hover:bg-primary-fixed-dim active:scale-95 shadow-[0_0_20px_rgba(0,242,255,0.2)]">
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}

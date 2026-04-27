import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-slate-950/90 backdrop-blur-lg border-t border-white/5 font-['Space_Grotesk'] text-slate-300 text-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 py-16 max-w-7xl mx-auto">
        <div className="space-y-6">
          <Link href="/" className="text-xl font-bold text-cyan-400">AeroAnalytics</Link>
          <p className="max-w-md text-slate-500 leading-relaxed">
            The world&apos;s most advanced atmospheric data platform. Bridging the gap between orbital observation and enterprise intelligence.
          </p>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-400/10 hover:text-cyan-400 transition-all">
              <span className="material-symbols-outlined text-lg">share</span>
            </button>
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-400/10 hover:text-cyan-400 transition-all">
              <span className="material-symbols-outlined text-lg">mail</span>
            </button>
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-400/10 hover:text-cyan-400 transition-all">
              <span className="material-symbols-outlined text-lg">public</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-slate-100 font-bold uppercase tracking-widest text-xs">Platform</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-slate-500 hover:text-cyan-300 transition-colors hover:underline decoration-cyan-400 underline-offset-4">API Docs</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-cyan-300 transition-colors hover:underline decoration-cyan-400 underline-offset-4">System Status</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-cyan-300 transition-colors hover:underline decoration-cyan-400 underline-offset-4">Changelog</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-slate-100 font-bold uppercase tracking-widest text-xs">Legal & Support</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-slate-500 hover:text-cyan-300 transition-colors hover:underline decoration-cyan-400 underline-offset-4">Privacy Policy</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-cyan-300 transition-colors hover:underline decoration-cyan-400 underline-offset-4">Terms of Service</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-cyan-300 transition-colors hover:underline decoration-cyan-400 underline-offset-4">Contact Support</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-8 text-center">
        <p className="text-slate-500">© 2024 AeroAnalytics. Atmospheric Precision for Global Logistics.</p>
      </div>
    </footer>
  );
}

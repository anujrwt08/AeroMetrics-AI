export default function Dashboard() {
  return (
    <div className="max-w-container-max mx-auto space-y-stack-lg">
      {/* Dashboard Header */}
      <div className="flex items-end justify-between">
        <div>
          <span className="text-cyan-400 text-label-md tracking-[0.2em] uppercase font-bold">Logistics Command Center</span>
          <h1 className="font-headline-xl text-primary mt-2">Atmospheric Intelligence Dash</h1>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full border-white/5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-label-md text-white">LIVE FEED: NORTH ATLANTIC</span>
          </div>
        </div>
      </div>

      {/* Scorecard Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="glass-card rounded-xl p-stack-lg group hover:border-cyan-400/40 transition-all duration-500">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>device_thermostat</span>
            </div>
            <span className="text-xs font-bold text-orange-500">+2.4° vs avg</span>
          </div>
          <p className="text-label-md text-slate-400 uppercase tracking-widest">Max Temperature</p>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="font-data-display text-white">32.4</span>
            <span className="text-headline-md text-slate-500">°C</span>
          </div>
        </div>

        <div className="glass-card rounded-xl p-stack-lg group hover:border-cyan-400/40 transition-all duration-500">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <span className="material-symbols-outlined text-cyan-400">ac_unit</span>
            </div>
            <span className="text-xs font-bold text-cyan-400">-0.8° vs avg</span>
          </div>
          <p className="text-label-md text-slate-400 uppercase tracking-widest">Min Temperature</p>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="font-data-display text-white">18.1</span>
            <span className="text-headline-md text-slate-500">°C</span>
          </div>
        </div>

        <div className="glass-card rounded-xl p-stack-lg group hover:border-cyan-400/40 transition-all duration-500">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/20">
              <span className="material-symbols-outlined text-secondary">humidity_low</span>
            </div>
            <span className="text-xs font-bold text-secondary">Optimal Range</span>
          </div>
          <p className="text-label-md text-slate-400 uppercase tracking-widest">Average Humidity</p>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="font-data-display text-white">64.2</span>
            <span className="text-headline-md text-slate-500">%</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Graph (Time-Series) */}
      <div className="grid grid-cols-12 gap-gutter">
        <div className="col-span-12 glass-card rounded-2xl p-8 min-h-[480px] flex flex-col relative">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="font-headline-lg text-white">Daily Temperature Trends</h2>
              <p className="text-body-sm text-slate-400">Time-series variance analysis for current operational window.</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs font-bold">24H</button>
              <button className="px-4 py-1.5 rounded-full border border-white/10 text-slate-400 text-xs font-bold hover:bg-white/5 transition-colors">7D</button>
              <button className="px-4 py-1.5 rounded-full border border-white/10 text-slate-400 text-xs font-bold hover:bg-white/5 transition-colors">30D</button>
            </div>
          </div>

          {/* SVG Chart Simulation */}
          <div className="flex-1 w-full relative group">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 300">
              {/* Grid Lines */}
              <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="1000" y1="0" y2="0"></line>
              <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="1000" y1="75" y2="75"></line>
              <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="1000" y1="150" y2="150"></line>
              <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="1000" y1="225" y2="225"></line>
              <line stroke="rgba(255,255,255,0.1)" strokeWidth="1" x1="0" x2="1000" y1="300" y2="300"></line>

              {/* Gradient Path Area */}
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#00f2ff" stopOpacity="0.3"></stop>
                  <stop offset="100%" stopColor="#00f2ff" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <path d="M0,250 Q100,180 200,220 T400,150 T600,200 T800,100 T1000,140 V300 H0 Z" fill="url(#chartGradient)"></path>

              {/* Main Line */}
              <path d="M0,250 Q100,180 200,220 T400,150 T600,200 T800,100 T1000,140" fill="none" stroke="#00dbe7" strokeLinecap="round" strokeWidth="3"></path>

              {/* Data Point Indicator */}
              <g className="cursor-pointer">
                <circle className="animate-pulse" cx="800" cy="100" fill="#00dbe7" r="6"></circle>
                <circle cx="800" cy="100" fill="none" r="12" stroke="#00dbe7" strokeOpacity="0.3"></circle>
              </g>
            </svg>

            {/* Tooltip Mockup */}
            <div className="absolute top-10 left-[760px] glass-card p-3 rounded-lg border border-cyan-400/50 shadow-lg pointer-events-none">
              <p className="text-[10px] text-slate-400 font-bold uppercase">Oct 24, 14:00</p>
              <p className="text-body-md font-bold text-white">28.4°C</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-[10px] text-orange-500">trending_up</span>
                <span className="text-[10px] text-orange-500 font-bold">+1.2° vs yesterday</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-6 text-label-md text-slate-500 px-2">
            <span>00:00</span>
            <span>04:00</span>
            <span>08:00</span>
            <span>12:00</span>
            <span>16:00</span>
            <span>20:00</span>
            <span>23:59</span>
          </div>
        </div>

        {/* Monthly Bar Chart */}
        <div className="col-span-12 lg:col-span-8 glass-card rounded-2xl p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="font-headline-md text-white">Average Temperature by Month</h3>
              <p className="text-body-sm text-slate-400">Historical performance aggregated for global logistics.</p>
            </div>
            <div className="p-2 glass-card rounded-lg border-white/5">
              <span className="material-symbols-outlined text-slate-400">filter_list</span>
            </div>
          </div>
          <div className="flex items-end gap-3 h-[240px] px-2">
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full bg-white/5 rounded-t-lg relative overflow-hidden transition-all duration-300 group-hover:bg-cyan-500/20" style={{ height: "40%" }}>
                <div className="absolute bottom-0 left-0 right-0 bg-cyan-500/40 h-2 transition-all duration-300 group-hover:h-full"></div>
              </div>
              <span className="text-label-md text-slate-500 uppercase">Jan</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full bg-white/5 rounded-t-lg relative overflow-hidden transition-all duration-300 group-hover:bg-cyan-500/20" style={{ height: "45%" }}>
                <div className="absolute bottom-0 left-0 right-0 bg-cyan-500/40 h-2 transition-all duration-300 group-hover:h-full"></div>
              </div>
              <span className="text-label-md text-slate-500 uppercase">Feb</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full bg-white/5 rounded-t-lg relative overflow-hidden transition-all duration-300 group-hover:bg-cyan-500/20" style={{ height: "55%" }}>
                <div className="absolute bottom-0 left-0 right-0 bg-cyan-500/40 h-2 transition-all duration-300 group-hover:h-full"></div>
              </div>
              <span className="text-label-md text-slate-500 uppercase">Mar</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full bg-white/5 rounded-t-lg relative overflow-hidden transition-all duration-300 group-hover:bg-cyan-500/20" style={{ height: "70%" }}>
                <div className="absolute bottom-0 left-0 right-0 bg-cyan-500/40 h-2 transition-all duration-300 group-hover:h-full"></div>
              </div>
              <span className="text-label-md text-slate-500 uppercase text-cyan-400 font-bold">Apr</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full bg-white/5 rounded-t-lg relative overflow-hidden transition-all duration-300 group-hover:bg-cyan-500/20" style={{ height: "85%" }}>
                <div className="absolute bottom-0 left-0 right-0 bg-cyan-500/40 h-2 transition-all duration-300 group-hover:h-full"></div>
              </div>
              <span className="text-label-md text-slate-500 uppercase">May</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full bg-white/5 rounded-t-lg relative overflow-hidden transition-all duration-300 group-hover:bg-cyan-500/20" style={{ height: "100%" }}>
                <div className="absolute bottom-0 left-0 right-0 bg-cyan-500 h-2 transition-all duration-300 group-hover:h-full"></div>
              </div>
              <span className="text-label-md text-slate-500 uppercase">Jun</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full bg-white/5 rounded-t-lg relative overflow-hidden transition-all duration-300 group-hover:bg-cyan-500/20" style={{ height: "95%" }}>
                <div className="absolute bottom-0 left-0 right-0 bg-cyan-500/40 h-2 transition-all duration-300 group-hover:h-full"></div>
              </div>
              <span className="text-label-md text-slate-500 uppercase">Jul</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full bg-white/5 rounded-t-lg relative overflow-hidden transition-all duration-300 group-hover:bg-cyan-500/20" style={{ height: "90%" }}>
                <div className="absolute bottom-0 left-0 right-0 bg-cyan-500/40 h-2 transition-all duration-300 group-hover:h-full"></div>
              </div>
              <span className="text-label-md text-slate-500 uppercase">Aug</span>
            </div>
          </div>
        </div>

        {/* Secondary Data Widget (Interactive Gauge / Meta Info) */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
          <div className="glass-card rounded-2xl p-6 flex-1 bg-gradient-to-br from-cyan-950/20 to-transparent">
            <h3 className="font-headline-md text-white mb-6">Regional Stability</h3>
            <div className="flex justify-center py-4">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" fill="none" r="45" stroke="rgba(255,255,255,0.05)" strokeWidth="8"></circle>
                  <circle className="drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]" cx="50" cy="50" fill="none" r="45" stroke="#00f2ff" strokeDasharray="283" strokeDashoffset="70" strokeLinecap="round" strokeWidth="8"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-data-display text-white">75%</span>
                  <span className="text-label-md text-slate-400">STABLE</span>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex justify-between items-center text-body-sm">
                <span className="text-slate-400">Anomaly Detection</span>
                <span className="text-secondary font-bold">LOW</span>
              </div>
              <div className="flex justify-between items-center text-body-sm">
                <span className="text-slate-400">Satellite Health</span>
                <span className="text-secondary font-bold">NOMINAL</span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 h-[120px] flex items-center gap-4 overflow-hidden relative">
            <img 
              alt="Space Satellite View" 
              className="absolute inset-0 w-full h-full object-cover opacity-20" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc_WUZejHC-31EnN2bn8urWfp9vrHue6wZEal0nsd-f-PtFP3qOSsDbwZS46rtrfU0zAfaYV2Ym5Dt1U2kBzZ_aSGIvkIoJJAIBUqGDYRutqUfZHSBsqnJBUPy1w_Hxkrrlz-fcHHq7UaRGQiX9BFim_bBvWzHO1_gLgv8JyNyNzjJWBSr5he4cO22OgogEXUW9eFPkBUXAYWoYWRZDnUT8sPFxKabI_WkejC5rXpDFy4lAZrw0VbbfkTBoDcFwhbUcX5kuMOHP8r-"
            />
            <div className="relative z-10 flex items-center gap-4">
              <div className="p-3 rounded-full bg-cyan-500/20 border border-cyan-400/30">
                <span className="material-symbols-outlined text-cyan-400">satellite_alt</span>
              </div>
              <div>
                <h4 className="text-white font-bold font-['Space_Grotesk']">AERO-7 METEOR NODE</h4>
                <p className="text-xs text-slate-400">Active Orbit - Scanning Sector 4B</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Details */}
      <footer className="mt-stack-lg pt-stack-lg border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-body-sm text-slate-500">
          © 2024 AeroMetrics AI. Advanced Atmospheric Analytics for Global Enterprise.
        </div>
        <div className="flex gap-6">
          <a className="text-label-md text-slate-400 hover:text-cyan-400 transition-colors" href="#">Privacy Protocol</a>
          <a className="text-label-md text-slate-400 hover:text-cyan-400 transition-colors" href="#">Security Audit</a>
          <a className="text-label-md text-slate-400 hover:text-cyan-400 transition-colors" href="#">System API</a>
        </div>
      </footer>
    </div>
  );
}

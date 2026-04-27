import PublicHeader from '@/components/PublicHeader';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <PublicHeader activePath="/about" />
      <main className="flex-grow pt-24 min-h-screen">
        {/* Hero / Our Mission */}
        <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-stack-lg">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-fixed-dim text-label-md uppercase tracking-widest">
                  Our Mission
                </div>
                <h1 className="font-headline-xl text-headline-xl text-primary">Mastering the Atmospheric Frontier.</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                  AeroAnalytics was founded on a singular premise: that global logistics should never be at the mercy of unpredictable weather. We leverage hyperspectral satellite data and neural-mesh forecasting to provide a crystal-clear window into the future of flight paths and supply chains.
                </p>
                <div className="grid grid-cols-2 gap-stack-md pt-8">
                  <div className="glass-card p-stack-md rounded-xl">
                    <span className="text-data-display font-data-display text-primary-container block">99.9%</span>
                    <span className="text-label-md text-outline">FORECAST ACCURACY</span>
                  </div>
                  <div className="glass-card p-stack-md rounded-xl">
                    <span className="text-data-display font-data-display text-secondary block">14ms</span>
                    <span className="text-label-md text-outline">LATENCY ON DATA</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="glass-card rounded-2xl overflow-hidden aspect-video lg:aspect-square relative z-20 group">
                  <img 
                    alt="Modern laboratory with weather visualization screens" 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdfrzFuuN1PqS9XKAi_-PN5yceQYQ3GxBZiXHqPq2GzFOek4T0yMS-c8fZHMzksoLSnaDQI90k822DfEjeFnmQjux1M_SOj-0Y1oA8M5hNn8bWOG1XGtf_kNKLEnyr0sP0rYiyWKhx6EE555yzdkHnxyIpgGdz_n_8eI8LjC6qOjbS11dFDx9GGbjaKhsIc8CQ8VpwtD5yoQJmYBfMwSUb1UG336yzQFp06l54spCEmp_A3kRrJE8pxztgnbdUXoy8FXsozM9zCGei"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl z-30 flex items-center gap-4 border-primary-container/30">
                  <div className="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-container">explore</span>
                  </div>
                  <div>
                    <div className="font-headline-md text-body-md text-primary">Global Reach</div>
                    <div className="text-body-sm text-outline">140+ Integration Nodes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-surface-container-lowest/50 py-24 border-y border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-headline-lg text-headline-lg text-primary-fixed-dim mb-4">A Legacy of Innovation</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">From a research lab in Oslo to a global logistics powerhouse, our journey has been defined by precision.</p>
            </div>
            {/* Weather Timeline Component */}
            <div className="relative overflow-x-auto pb-12 scrollbar-hide">
              <div className="flex min-w-[1200px] items-start justify-between relative px-12">
                {/* Horizontal connector line */}
                <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                {/* Timeline Point 1 */}
                <div className="relative flex flex-col items-center text-center w-64 pt-12">
                  <div className="absolute top-5 w-3 h-3 rounded-full bg-cyan-400 neon-glow z-10"></div>
                  <div className="glass-card p-stack-md rounded-xl hover:bg-white/5 hover:border-cyan-400/30 transition-all">
                    <span className="text-label-md text-cyan-400 font-bold mb-2 block">2020: Genesis</span>
                    <p className="text-body-sm text-on-surface-variant">Prototype Alpha launched using localized sensor grids.</p>
                  </div>
                </div>
                {/* Timeline Point 2 */}
                <div className="relative flex flex-col items-center text-center w-64 pt-12">
                  <div className="absolute top-5 w-3 h-3 rounded-full bg-white/20 z-10"></div>
                  <div className="glass-card p-stack-md rounded-xl hover:bg-white/5 hover:border-cyan-400/30 transition-all">
                    <span className="text-label-md text-cyan-400 font-bold mb-2 block">2021: Orbit</span>
                    <p className="text-body-sm text-on-surface-variant">First satellite data ingestion pipeline established.</p>
                  </div>
                </div>
                {/* Timeline Point 3 */}
                <div className="relative flex flex-col items-center text-center w-64 pt-12">
                  <div className="absolute top-5 w-3 h-3 rounded-full bg-cyan-400 neon-glow z-10"></div>
                  <div className="glass-card p-stack-md rounded-xl hover:bg-white/5 hover:border-cyan-400/30 transition-all">
                    <span className="text-label-md text-cyan-400 font-bold mb-2 block">2022: Expansion</span>
                    <p className="text-body-sm text-on-surface-variant">Expansion to maritime and air-freight logistics clusters.</p>
                  </div>
                </div>
                {/* Timeline Point 4 */}
                <div className="relative flex flex-col items-center text-center w-64 pt-12">
                  <div className="absolute top-5 w-3 h-3 rounded-full bg-white/20 z-10"></div>
                  <div className="glass-card p-stack-md rounded-xl hover:bg-white/5 hover:border-cyan-400/30 transition-all">
                    <span className="text-label-md text-cyan-400 font-bold mb-2 block">2024: Intelligence</span>
                    <p className="text-body-sm text-on-surface-variant">Integration of Large Action Models for autonomous routing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Team: Bento Grid Layout */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Architects of the Air</h2>
              <p className="text-on-surface-variant text-body-lg">The diverse minds solving the world&apos;s most complex atmospheric challenges.</p>
            </div>
            <button className="border border-cyan-400/30 text-cyan-400 px-6 py-2 rounded-lg font-medium hover:bg-cyan-400/10 transition-colors">View All Experts</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Lead Architect */}
            <div className="md:col-span-2 md:row-span-2 glass-card rounded-2xl overflow-hidden relative group">
              <img 
                alt="Lead Engineer Profile" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4OFHxzCVqVNN3kSANlHQRAOoi4cDVd9uSSVLXPXG1YT0Cv_Vkr7eJoL4Z1ua4jH0-Nd_g5NPjoskOB3dFYRHmfsnjT39oR6rjuCdrMPWKxt-cz9J8Ggi6zv4Y49GlZuktQNhFwLIfWYRaJ9GTqzAKBCsY4u4PSZv18Avj4tialmBcxCUYBvWpkvrSjT9mtVvXP3q8yGFmauHqGYxSCgJNaG3LqkR7-pnQNzpKvvE_KVsahP9gFZaSp0A3rLgPWDUD9ynX-53HMAF_"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="text-cyan-400 text-label-md uppercase font-bold tracking-widest mb-1">Chief Science Officer</div>
                <h3 className="font-headline-md text-headline-md text-primary">Dr. Elena Volkov</h3>
                <p className="text-body-sm text-on-surface-variant mt-2 max-w-xs">PhD in Atmospheric Physics, former head of European Satellite Consortium.</p>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-end min-h-[300px] relative overflow-hidden group">
              <img 
                alt="Head of Engineering" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfuP-o2FNsE2vZh_puWcOwGLjbMgptAVaQ1UZm-D8pyFOBko4kgDTudG0BTN0qkOuzsv1dasH-TkQjC9wiS7lQTKvdk5uSW4eDO6mrg0RTal7aRSNjsMDZPRmwiJNThYLj7JSwx11YReN2HWSPrraPethPkbfMDH1t8ehBJ3jrkbfHkixjLibkml48nrGnTt2HVfnX3P4-R_PYZqRZGTi0HSRnQlDbnoyVmkkfbJNdn7VWl7G8uZNXuxIHnrHBvFOk_cP-NViY38Da"
              />
              <div className="relative z-10">
                <div className="text-cyan-400 text-label-md font-bold mb-1">Head of Engineering</div>
                <h3 className="font-headline-md text-body-lg text-primary">Marcus Thorne</h3>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-end min-h-[300px] relative overflow-hidden group">
              <img 
                alt="Data Science Lead" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA55liQZPOw3NHwheaThTOqD4OnkgCjW0HhcpM4URc06HWNCgXbZfc5xyg3fthjaYR-5g-kBjv8ttUAOJ0wENOpERUAYQxqS5AIBEVqBF2788IXShjO2qu9daOc3zHVU7R7x_KfuORDI18EaadO9iSpDv0074aP6-hFbEAlV-W7vMkCGLETpqXhlluRC-ObYJ9EwEvKeMgT8hKkJo9jj7N-yhhm8axPfBpCj-FNpcarHm7WMqHh2xF3YP58CmLae-BTnK8V6fdtQp3L"
              />
              <div className="relative z-10">
                <div className="text-cyan-400 text-label-md font-bold mb-1">Data Science Lead</div>
                <h3 className="font-headline-md text-body-lg text-primary">Sarah Jenkins</h3>
              </div>
            </div>
            {/* Core Values Box */}
            <div className="md:col-span-2 glass-card rounded-2xl p-8 flex items-center gap-8 border-primary-container/20">
              <div className="hidden sm:block p-4 rounded-full bg-primary-container/10 border border-primary-container/20">
                <span className="material-symbols-outlined text-4xl text-primary-container">verified_user</span>
              </div>
              <div>
                <h3 className="text-primary font-headline-md mb-2">Ethics in Data</h3>
                <p className="text-on-surface-variant text-body-sm leading-relaxed">Our algorithms are built on transparency. We utilize open-source foundational models to ensure that our forecasting is unbiased and verifiable by any of our global partners.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Partners */}
        <section className="py-24 bg-gradient-to-b from-transparent to-surface-container-lowest/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary-fixed-dim">Integrated Ecosystem</h2>
              <p className="text-on-surface-variant mt-4">We ingest real-time telemetry from the world&apos;s most trusted sources.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {/* Placeholder Logos with Glassmorphism */}
              <div className="glass-card py-10 px-4 rounded-xl flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all border-white/5">
                <span className="text-label-md font-headline-xl opacity-30">NOAA</span>
              </div>
              <div className="glass-card py-10 px-4 rounded-xl flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all border-white/5">
                <span className="text-label-md font-headline-xl opacity-30">EUMET</span>
              </div>
              <div className="glass-card py-10 px-4 rounded-xl flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all border-white/5">
                <span className="text-label-md font-headline-xl opacity-30">NASA</span>
              </div>
              <div className="glass-card py-10 px-4 rounded-xl flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all border-white/5">
                <span className="text-label-md font-headline-xl opacity-30">JMA</span>
              </div>
              <div className="glass-card py-10 px-4 rounded-xl flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all border-white/5">
                <span className="text-label-md font-headline-xl opacity-30">MET</span>
              </div>
              <div className="glass-card py-10 px-4 rounded-xl flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all border-white/5">
                <span className="text-label-md font-headline-xl opacity-30">WMO</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="glass-card rounded-3xl p-12 lg:p-24 relative overflow-hidden text-center border-primary-container/20">
            <div className="absolute inset-0 bg-primary-container/5 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h2 className="font-headline-xl text-headline-xl text-primary mb-6">Ready for Atmospheric Clarity?</h2>
              <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-10">Join 500+ global enterprises using AeroAnalytics to secure their logistical future.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-cyan-400 text-slate-950 px-10 py-4 rounded-xl font-bold text-lg active:scale-95 transition-transform duration-200 neon-glow">Start Your Assessment</button>
                <button className="glass-card px-10 py-4 rounded-xl font-bold text-lg text-primary border-primary/20 hover:border-primary-container/50 transition-all">Download Media Kit</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

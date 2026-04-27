import PublicHeader from '@/components/PublicHeader';
import Footer from '@/components/Footer';

export default function Capabilities() {
  return (
    <>
      <PublicHeader activePath="/capabilities" />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
        {/* Hero Section */}
        <header className="text-center space-y-stack-md max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container/20 border border-secondary/30 text-secondary text-label-md mb-stack-sm">
            <span className="material-symbols-outlined text-[14px] mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            ATMOSPHERIC PRECISION ECOSYSTEM
          </div>
          <h1 className="font-headline-xl text-headline-xl text-primary leading-none">Engineering the Future of Global Logistics</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Our integrated suite leverages orbital data and AI to solve the most complex atmospheric routing challenges in real-time.
          </p>
        </header>

        {/* Feature Section 1: Global Satellite Mesh */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 space-y-stack-lg">
            <div className="space-y-stack-sm">
              <span className="text-primary-fixed-dim font-label-md uppercase tracking-widest">Core Infrastructure</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Global Satellite Mesh</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Continuous, low-latency telemetry from 142 orbital nodes providing sub-meter resolution of atmospheric pressure and moisture density across every square mile of the planet.
              </p>
            </div>
            <ul className="space-y-stack-md">
              <li className="flex items-start space-x-4">
                <div className="mt-1 bg-primary-container/20 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-primary-fixed-dim">satellite_alt</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-body-md font-bold text-on-surface">Sub-60s Latency</h4>
                  <p className="text-body-sm text-on-surface-variant">Data travels from orbit to your dashboard in less than a minute.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="mt-1 bg-primary-container/20 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-primary-fixed-dim">grid_view</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-body-md font-bold text-on-surface">Mesh Density</h4>
                  <p className="text-body-sm text-on-surface-variant">Proprietary hexagonal grid minimizes data interpolation errors.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="glass-card rounded-xl overflow-hidden aspect-video relative group">
              <img 
                alt="Global Satellite Mesh Visualization" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkCkbb_eI__h8ykVyZaVpmdJlX29wn9oJ-rs5Tew6Do4BRDnsYt06m-i9zROff1St3-K90mGyPXttCQqVDrFQAPFTugpqt8Uu9Pg6awaUn0qZoJTGGcSFEbqltOATFXRUR13-4ZmE4Y6H0d8gDNuCuofpGKXpm6xHBVhCf1GtRC6wV-bczuGHOE19U_tn68r33QeR-fr5vMCloK0BvFERPFSd7MvHCJjN4Vd61ge7CHAqqyzJcRjfZCJQg0SMFFcAMFZV4v1TnSE59"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              {/* Mockup Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                <div className="glass-card p-4 rounded-lg flex-1 border-white/10">
                  <span className="text-label-md text-primary-fixed-dim">UPLINK STATUS</span>
                  <div className="text-headline-md font-data-display text-white">99.98%</div>
                </div>
                <div className="glass-card p-4 rounded-lg flex-1 border-white/10">
                  <span className="text-label-md text-primary-fixed-dim">ACTIVE NODES</span>
                  <div className="text-headline-md font-data-display text-white">142/144</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section 2: Predictive Meteorological Engine */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7 order-last lg:order-first">
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-xl aspect-square flex flex-col justify-between border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>thunderstorm</span>
                  <div className="bg-secondary/10 px-2 py-1 rounded text-[10px] text-secondary font-bold">ALGO_V4</div>
                </div>
                <div className="space-y-2">
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[85%]"></div>
                  </div>
                  <p className="text-label-md text-on-surface-variant">TURBULENCE PROBABILITY</p>
                  <p className="text-headline-lg font-data-display text-white">84.2%</p>
                </div>
              </div>
              <div className="glass-card p-6 rounded-xl aspect-square flex flex-col justify-between border-white/10 bg-gradient-to-tr from-white/5 to-transparent">
                <div className="flex justify-between items-center">
                  <div className="conic-gauge w-16 h-16 rounded-full flex items-center justify-center p-[2px]">
                    <div className="bg-background w-full h-full rounded-full flex items-center justify-center">
                      <span className="text-[10px] font-bold">75%</span>
                    </div>
                  </div>
                  <span className="text-label-md text-on-surface-variant text-right">MODEL<br/>CONFIDENCE</span>
                </div>
                <img 
                  alt="Radar Visualization" 
                  className="rounded-lg h-24 object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-M4CBs7cBUfkCseRCForY6epKCVZs9Bv-Cmfa9WC5wHZQ8S8vG2oc9diaPAPyDRqwMVlfZffxSKLhNDBYa5CmNqs5IddH5Vn3iqOD96AaV2Zag63K7mkgcA3ZTW9G_v5vrBFhPyY3vYxRVWtnjxKnC8nB95wqq_et3MATS-xjuU4mDDr5uF3jn65FcPQi7pHiVP6VJneZRcJSe5S1M79VY2YfrzLdxN9pj_i4vQGD6_rkdxo9ahi0BZokY8CVL7KexktVW-cjiReB"
                />
              </div>
              <div className="glass-card p-6 rounded-xl col-span-2 border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-label-md text-white font-bold">ATMOSPHERIC PRESSURE TIMELINE</h5>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  </div>
                </div>
                <div className="flex items-end justify-between gap-1 h-32">
                  <div className="w-full bg-secondary/30 h-[40%] rounded-t-sm"></div>
                  <div className="w-full bg-secondary/40 h-[60%] rounded-t-sm"></div>
                  <div class="w-full bg-secondary/20 h-[30%] rounded-t-sm"></div>
                  <div className="w-full bg-secondary/60 h-[80%] rounded-t-sm"></div>
                  <div className="w-full bg-secondary/80 h-[95%] rounded-t-sm"></div>
                  <div className="w-full bg-secondary/50 h-[70%] rounded-t-sm"></div>
                  <div className="w-full bg-secondary/40 h-[55%] rounded-t-sm"></div>
                  <div className="w-full bg-secondary/90 h-full rounded-t-sm"></div>
                  <div className="w-full bg-secondary/30 h-[45%] rounded-t-sm"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-stack-lg">
            <div className="space-y-stack-sm">
              <span className="text-secondary font-label-md uppercase tracking-widest">Artificial Intelligence</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Predictive Meteorological Engine</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Go beyond forecasting. Our engine simulates trillions of atmospheric particles to predict extreme weather events with 94% accuracy up to 72 hours in advance.
              </p>
            </div>
            <div className="p-6 bg-surface-container rounded-xl border border-outline-variant/30">
              <p className="text-body-sm italic text-on-surface-variant">&quot;AeroAnalytics allowed us to pre-emptively reroute 400 cargo flights during the Arctic Vortex, saving $12M in fuel and delays.&quot;</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
                  <img alt="Executive Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe2HhRDt3lqKbUr1jlh4c0YrnHbDQIT4xW8PBvC0Gomecatf_Wcyr7g4cphwazvnT8iBKGo9PycFV5oXKVtZPkRcFjdwfemuSaNLSmxJwMutM1OAeGYMkdU1Ft2EHuL1WxfU8nuCIwreMYLDGKs-_put8BHgwveQN1aroewsa0BRT9XuTwuQATbQckC9J2v-xpXSIkNCvt4wQzeLvnkE0ojN4iBk0XCKIWnEY9_bRfNUjCFXxUHL5fOt7FjyTTyCqpYHsko5naZzUG" />
                </div>
                <div>
                  <p className="text-label-md text-white">Marcus Thorne</p>
                  <p className="text-[10px] text-on-surface-variant uppercase">Director of Ops, SkyBound Global</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section 3: Logistics Routing API */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 space-y-stack-lg">
            <div className="space-y-stack-sm">
              <span className="text-tertiary-fixed-dim font-label-md uppercase tracking-widest">Developer First</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Logistics Routing API</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Seamlessly integrate our atmospheric intelligence into your existing TMS or flight planning software. Built for scale, security, and developer joy.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white group-hover:border-tertiary-fixed-dim group-hover:text-tertiary-fixed-dim transition-colors">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <span className="text-body-md font-medium">RESTful & GraphQL Support</span>
              </div>
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white group-hover:border-tertiary-fixed-dim group-hover:text-tertiary-fixed-dim transition-colors">
                  <span className="material-symbols-outlined">lock</span>
                </div>
                <span className="text-body-md font-medium">AES-256 Payload Encryption</span>
              </div>
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white group-hover:border-tertiary-fixed-dim group-hover:text-tertiary-fixed-dim transition-colors">
                  <span className="material-symbols-outlined">speed</span>
                </div>
                <span className="text-body-md font-medium">100ms API Response Times</span>
              </div>
            </div>
            <button className="border border-tertiary-fixed-dim text-tertiary-fixed-dim px-8 py-3 rounded-lg font-bold hover:bg-tertiary-fixed-dim/10 transition-all active:scale-95">Read Documentation</button>
          </div>
          <div className="lg:col-span-7">
            <div className="glass-card rounded-xl overflow-hidden border-white/10 shadow-2xl">
              <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-[10px] text-on-surface-variant font-mono">POST /v2/route-optimization</div>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <pre className="text-blue-300"><code>{`{
  "origin": "SFO",
  "destination": "LHR",
  "constraints": {
    "min_altitude": 32000,
    "max_turbulence_g": 0.4
  },
  "optimizer": "fuel_efficiency"
}`}</code></pre>
                <div className="mt-6 border-t border-white/5 pt-6">
                  <pre className="text-green-300"><code>{`{
  "optimal_path_id": "AA-99812",
  "eta_adjustment": -14.2, // minutes
  "fuel_saved_lbs": 4210
}`}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="glass-card rounded-3xl p-12 text-center space-y-stack-lg border-primary-container/20 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-container/10 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary-container/10 blur-[100px] rounded-full"></div>
          <h2 className="font-headline-xl text-headline-xl text-white relative z-10">Ready for atmospheric clarity?</h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto relative z-10">Join the world&apos;s most advanced logistics teams and gain a literal birds-eye view of your global operations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 pt-4">
            <button className="bg-cyan-400 text-slate-950 font-bold px-10 py-4 rounded-xl text-lg hover:bg-cyan-300 transition-all hover:scale-105 active:scale-95 neon-glow-primary">Request Live Demo</button>
            <button className="glass-card text-white font-bold px-10 py-4 rounded-xl text-lg hover:bg-white/10 transition-all active:scale-95">Speak to an Expert</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

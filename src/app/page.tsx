import PublicHeader from '@/components/PublicHeader';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <PublicHeader activePath="/" />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          {/* Background Visualization */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary-container/10 rounded-full blur-[120px]"></div>
            <img 
              className="w-full h-full object-cover opacity-60 mix-blend-screen" 
              alt="Futuristic 3D wireframe globe" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAah4ND2eZvbwDPw0-NR7hrBTP7vI5hEOATDyfIdmoJdG_5PY5ZOU7FiemglHAgxGdKvL_Upsqzst9twVKT6Kow6qZz-4O0fN-Cnjrhs5MgZPnPlsWRajXPzOFkhVmUgWQGBvfr4gFj2Rmj2xy4NyYQy-4pLz0t6_f-dH-RDASGlV7-E-NjAi5hXx6J23LZTMezepxkRlSAMZN-kM35Mx6ts9ajzl_jS9LKGFbgFN9kphGKbfOp49FxE8d3JIpgB6VpuaD_pQIMSgT2"
            />
          </div>
          
          <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="font-label-md text-secondary uppercase tracking-widest">Live Atmospheric Data v4.2</span>
              </div>
              
              <h1 className="font-headline-xl text-primary max-w-2xl text-glow">
                Atmospheric Intelligence for the Global Enterprise
              </h1>
              
              <p className="font-body-lg text-on-surface-variant max-w-xl">
                AeroAnalytics provides high-fidelity meteorological modeling powered by predictive AI. Secure your logistics chain against volatile atmospheric shifts with sub-meter precision.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95 neon-glow">
                  Explore the Platform
                </button>
                <button className="px-8 py-4 rounded-xl border border-primary-container/30 text-primary-fixed-dim font-bold text-lg backdrop-blur-xl hover:bg-white/5 transition-all active:scale-95">
                  Watch Demo
                </button>
              </div>
              
              <div className="flex gap-12 pt-8 border-t border-white/5">
                <div>
                  <p className="font-data-display text-primary leading-none">99.9%</p>
                  <p className="font-label-md text-on-surface-variant mt-2">Prediction Accuracy</p>
                </div>
                <div>
                  <p className="font-data-display text-primary leading-none">5ms</p>
                  <p className="font-label-md text-on-surface-variant mt-2">Data Latency</p>
                </div>
                <div>
                  <p className="font-data-display text-primary leading-none">140+</p>
                  <p className="font-label-md text-on-surface-variant mt-2">Global Satellites</p>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="glass-card rounded-3xl p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  className="rounded-xl shadow-2xl relative z-10" 
                  alt="High-fidelity UI dashboard" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjcd32YapPAT2RnbnaU6UUsfwajZA_Nt6iJ5oD_betOpBE8JxXt_ewclliAom8HKPshFq0dJR0QypLwuOnPLisUH-2gBziTZZKaBl6Stb9bAQ_fau8yNzEQekdWGPVlVr-ylHItMqRjswCWe0JfmapOQKuh9VKs6Xn24vNF6RoNF6Y8WAezgQFZ9ynFwF7aZIVCWf7VOqj5L05_S1-_CCrIVw4DX5-PeahIHEUA2lhbqtz_yZLtUWvYGA9J1nqGfch6PWkL4MY7Y7I"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-container/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="container mx-auto px-6">
            <div className="mb-16 space-y-4">
              <h2 className="font-headline-lg text-primary text-center">Precision Infrastructure</h2>
              <p className="font-body-md text-on-surface-variant text-center max-w-2xl mx-auto">
                Our distributed sensor network and proprietary AI models deliver unprecedented clarity into the world&apos;s most complex systems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
              {/* Satellite Tracking */}
              <div className="md:col-span-8 glass-card rounded-3xl p-8 flex flex-col justify-between group cursor-pointer overflow-hidden relative">
                <div className="flex justify-between items-start">
                  <div className="p-4 rounded-2xl bg-primary-container/10 border border-primary-container/20">
                    <span className="material-symbols-outlined text-4xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>satellite_alt</span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">north_east</span>
                </div>
                <div className="mt-8">
                  <h3 className="font-headline-md text-primary mb-2">Satellite Tracking</h3>
                  <p className="font-body-md text-on-surface-variant max-w-md">Real-time telemetry from over 140 low-orbit satellites providing sub-meter resolution of atmospheric phenomena.</p>
                </div>
                <div className="absolute -right-10 bottom-0 w-1/2 h-full opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity">
                  <img className="w-full h-full object-contain" alt="Satellite" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvp2g9B6yaDP6qrb5a4OYTrTPEMDXjYgjbt7jCp_n_-QBMxLjX9hI6aN6PC6vhpe8Azs5CoEv_WMdi12V4YhM8_a_oCJovwOdJ6lmOX05eZcj-3g0_NvPHbCANGDtlgMbU8Q5CWMeal5VSi3XXUlrteOlVUID5tILvJyZmSTOVtfFgEkEyVvetEFqOxqleR9w3W6UDowFXQrsgY8bBq70pem3k9Zi6_-6SKKryyrPgG83AxkxUQZf88lfIZb5TuR8c67uY2afIkCIE"/>
                </div>
              </div>

              {/* Predictive AI */}
              <div className="md:col-span-4 glass-card rounded-3xl p-8 flex flex-col items-center text-center justify-center space-y-6 group cursor-pointer hover:bg-white/[0.08] transition-all">
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <span className="material-symbols-outlined text-6xl text-secondary relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-primary mb-2">Predictive AI</h3>
                  <p className="font-body-sm text-on-surface-variant">Neural networks trained on 50 years of climate data to forecast events with 99.9% accuracy.</p>
                </div>
              </div>

              {/* Logistics Optimization */}
              <div className="md:col-span-4 glass-card rounded-3xl p-8 flex flex-col justify-between group cursor-pointer hover:bg-white/[0.08] transition-all">
                <div className="p-4 w-fit rounded-2xl bg-tertiary-container/10 border border-tertiary-container/20">
                  <span className="material-symbols-outlined text-4xl text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>dynamic_feed</span>
                </div>
                <div className="mt-12">
                  <h3 className="font-headline-md text-primary mb-2">Logistics Optimization</h3>
                  <p className="font-body-sm text-on-surface-variant">Route adaptation in real-time to avoid high-risk atmospheric cells and turbulence.</p>
                </div>
              </div>

              {/* Global Coverage */}
              <div className="md:col-span-8 glass-card rounded-3xl p-1 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
                <div className="absolute inset-0 z-0">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="World map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-ilIJhkY0Fc3IVAxQX2FgWGPqcL6vHT2rt3sMNM8GLLR2rI5hgvaejmR3a54dmrmrzFS5C0RCYRJyD6H7feutAMt5X-Ljt5zRFRCYmC2FEukrJTF43_gqgHlGbZjEG7VgbZi2T2nhgs9Br5KXhDJbYNw036umnElZfIXBfBKhDWomY-dXhtteASrYkvhfu6M0SyJSGgeU4nCJQOTUwiF-zTf9Di5rO1QodG1OfgKNhM6kEvv4IvTRZzp6BJs8mC7qUj8xHXKZvlp8"/>
                </div>
                <div className="relative z-20 p-8 flex flex-col justify-end h-full">
                  <h3 className="font-headline-md text-primary">Universal Coverage</h3>
                  <p className="font-body-sm text-on-surface-variant">Every coordinate on Earth monitored in 4K resolution every 60 seconds.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-primary-container/5 mix-blend-overlay"></div>
          <div className="container mx-auto px-6">
            <div className="glass-card rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden border-primary-container/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent"></div>
              <h2 className="font-headline-xl text-primary mb-8 max-w-4xl mx-auto">Ready to secure your operations against the elements?</h2>
              <p className="font-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
                Join the world&apos;s leading logistics and aviation firms already using AeroAnalytics for mission-critical decision making.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-primary-container text-on-primary-container px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 active:scale-95 neon-glow">
                  Start Free Integration
                </button>
                <button className="px-10 py-5 rounded-2xl border border-white/20 text-on-surface font-bold text-xl backdrop-blur-xl hover:bg-white/10 transition-all active:scale-95">
                  Talk to an Analyst
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

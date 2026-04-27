import PublicHeader from '@/components/PublicHeader';
import Footer from '@/components/Footer';

export default function Pricing() {
  return (
    <>
      <PublicHeader activePath="/pricing" />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-6 overflow-hidden">
          <div className="absolute inset-0 z-[-1]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center space-y-stack-md">
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-cyan-400 text-label-md font-label-md uppercase tracking-widest border-cyan-400/30">Atmospheric Precision</span>
            <h1 className="font-headline-xl text-headline-xl text-primary leading-tight">Elevate Your Logistics with Intelligent Data</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Choose the tier that matches your operational complexity. From personal monitoring to global enterprise coordination.</p>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Starter Tier */}
            <div className="glass-card p-stack-lg rounded-xl flex flex-col hover:border-cyan-400/40 transition-all duration-500 group">
              <div className="space-y-unit mb-8">
                <h3 className="font-headline-md text-headline-md text-white">Starter</h3>
                <p className="text-on-surface-variant font-body-sm text-body-sm">For enthusiasts and small-scale atmospheric research.</p>
              </div>
              <div className="mb-8">
                <span className="font-data-display text-data-display text-primary-fixed-dim">$49</span>
                <span className="text-on-surface-variant">/mo</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-cyan-400 text-sm">check_circle</span>
                  <span className="text-body-md font-body-md">5 Active Weather Nodes</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-cyan-400 text-sm">check_circle</span>
                  <span className="text-body-md font-body-md">Real-time Dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-cyan-400 text-sm">check_circle</span>
                  <span className="text-body-md font-body-md">24h Historical Archive</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant/50">
                  <span className="material-symbols-outlined text-sm">cancel</span>
                  <span className="text-body-md font-body-md">API Access</span>
                </li>
              </ul>
              <button className="w-full py-4 glass-card border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all active:scale-[0.98]">Choose Starter</button>
            </div>

            {/* Professional Tier (Featured) */}
            <div className="glass-card p-stack-lg rounded-xl flex flex-col border-cyan-400/50 shadow-[0_0_40px_rgba(0,219,231,0.1)] relative scale-105 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-background px-4 py-1 rounded-full text-label-md font-bold uppercase tracking-tighter">Most Popular</div>
              <div className="space-y-unit mb-8">
                <h3 className="font-headline-md text-headline-md text-white">Professional</h3>
                <p className="text-on-surface-variant font-body-sm text-body-sm">For regional logistics teams requiring predictive precision.</p>
              </div>
              <div className="mb-8">
                <span className="font-data-display text-data-display text-primary-fixed-dim">$199</span>
                <span className="text-on-surface-variant">/mo</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-cyan-400 text-sm">check_circle</span>
                  <span className="text-body-md font-body-md">50 Active Weather Nodes</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-cyan-400 text-sm">check_circle</span>
                  <span className="text-body-md font-body-md">AI-Driven Predictive Alerts</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-cyan-400 text-sm">check_circle</span>
                  <span className="text-body-md font-body-md">30-Day Historical Archive</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-cyan-400 text-sm">check_circle</span>
                  <span className="text-body-md font-body-md">Standard REST API</span>
                </li>
              </ul>
              <button className="w-full py-4 bg-primary-container text-on-primary-container font-bold rounded-lg neon-glow hover:brightness-110 transition-all active:scale-[0.98]">Choose Professional</button>
            </div>

            {/* Enterprise Tier */}
            <div className="glass-card p-stack-lg rounded-xl flex flex-col hover:border-cyan-400/40 transition-all duration-500 group">
              <div className="space-y-unit mb-8">
                <h3 className="font-headline-md text-headline-md text-white">Enterprise</h3>
                <p className="text-on-surface-variant font-body-sm text-body-sm">Global network access with dedicated infrastructure.</p>
              </div>
              <div className="mb-8">
                <span className="font-data-display text-data-display text-primary-fixed-dim">Custom</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-cyan-400 text-sm">check_circle</span>
                  <span className="text-body-md font-body-md">Unlimited Global Nodes</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-cyan-400 text-sm">check_circle</span>
                  <span className="text-body-md font-body-md">Custom Atmospheric Models</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-cyan-400 text-sm">check_circle</span>
                  <span className="text-body-md font-body-md">Real-time Webhook Stream</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-cyan-400 text-sm">check_circle</span>
                  <span className="text-body-md font-body-md">Dedicated Account Manager</span>
                </li>
              </ul>
              <button className="w-full py-4 glass-card border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all active:scale-[0.98]">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="px-6 py-24 bg-surface-container-low">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-white mb-4">Compare Capabilities</h2>
              <p className="text-on-surface-variant font-body-md text-body-md">Detailed breakdown of atmospheric analytical tools.</p>
            </div>
            <div className="glass-card rounded-xl overflow-hidden overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-6 font-headline-md text-white">Feature</th>
                    <th className="p-6 text-center text-on-surface-variant">Starter</th>
                    <th className="p-6 text-center text-cyan-400">Professional</th>
                    <th className="p-6 text-center text-on-surface-variant">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="p-6 font-medium">Data Refresh Rate</td>
                    <td className="p-6 text-center text-on-surface-variant">5 min</td>
                    <td className="p-6 text-center text-white">1 min</td>
                    <td className="p-6 text-center text-white">Real-time</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Predictive Window</td>
                    <td className="p-6 text-center text-on-surface-variant">6 Hours</td>
                    <td className="p-6 text-center text-white">72 Hours</td>
                    <td className="p-6 text-center text-white">14 Days</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Logistics Integration</td>
                    <td className="p-6 text-center text-on-surface-variant">—</td>
                    <td className="p-6 text-center text-white">Standard</td>
                    <td className="p-6 text-center text-white">Custom SDK</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Custom Reporting</td>
                    <td className="p-6 text-center text-on-surface-variant">Manual</td>
                    <td className="p-6 text-center text-white">Automated</td>
                    <td className="p-6 text-center text-white">White-label</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-24 max-w-4xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-white text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-stack-md">
            <div className="glass-card p-6 rounded-lg">
              <h4 className="font-headline-md text-primary mb-2">How accurate is the predictive modeling?</h4>
              <p className="text-on-surface-variant font-body-md">Our models utilize the Unified Atmospheric Mesh (UAM), achieving 98.4% accuracy for 24-hour forecasts and 92% for 72-hour windows in urban logistics zones.</p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h4 className="font-headline-md text-primary mb-2">Can we migrate between tiers?</h4>
              <p className="text-on-surface-variant font-body-md">Yes, you can upgrade at any time. Downgrades take effect at the end of your current billing cycle. Data history is preserved during transitions.</p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h4 className="font-headline-md text-primary mb-2">What qualifies as an &quot;Active Node&quot;?</h4>
              <p className="text-on-surface-variant font-body-md">An active node is any unique geographical coordinate or IoT sensor point currently being monitored for real-time atmospheric updates.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-24">
          <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden glass-card p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-slate-900/20 z-[-1]"></div>
            <h2 className="font-headline-xl text-headline-xl text-white mb-6">Ready to harness the atmosphere?</h2>
            <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl mx-auto mb-10">Join over 1,400 logistics providers using AeroAnalytics for mission-critical weather intelligence.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-primary-container text-on-primary-container px-10 py-4 rounded-xl font-bold text-body-lg neon-glow hover:brightness-110 active:scale-95 transition-all">Start Free Trial</button>
              <button className="glass-card px-10 py-4 rounded-xl font-bold text-body-lg hover:bg-white/10 active:scale-95 transition-all">Request Demo</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import React from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardTopBar from '@/components/DashboardTopBar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background min-h-screen text-on-background">
      {/* TopAppBar */}
      <DashboardTopBar />

      {/* SideNavBar */}
      <DashboardSidebar />

      {/* Main Content */}
      <main className="ml-72 pt-16 min-h-screen p-8 bg-gradient-to-br from-background via-[#161a24] to-background">
        {children}
        
        {/* Contextual FAB - Restricted to Dashboard */}
        <button className="fixed bottom-8 right-8 h-14 w-14 rounded-full bg-cyan-500 text-on-primary shadow-[0_8px_32px_rgba(0,242,255,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 z-50">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>add_chart</span>
        </button>
      </main>
    </div>
  );
}

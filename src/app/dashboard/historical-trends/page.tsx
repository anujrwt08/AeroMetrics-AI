export default function HistoricalTrends() {
  return (
    <div className="max-w-container-max mx-auto space-y-stack-lg flex items-center justify-center min-h-[70vh]">
      <div className="text-center space-y-4">
        <span className="material-symbols-outlined text-6xl text-cyan-400 opacity-50">history</span>
        <h1 className="font-headline-lg text-primary">Historical Trends</h1>
        <p className="text-slate-400">Archived telemetry data is currently being fetched...</p>
      </div>
    </div>
  );
}

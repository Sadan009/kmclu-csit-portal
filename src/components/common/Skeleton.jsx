export function SkeletonBlock({ className = "" }) {
  return <div className={`animate-pulse bg-slate-200 rounded ${className}`} />;
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-card border border-slate-100 p-5">
      <SkeletonBlock className="w-10 h-10 rounded-lg mb-4" />
      <SkeletonBlock className="h-4 w-3/4 mb-2" />
      <SkeletonBlock className="h-3 w-full mb-1.5" />
      <SkeletonBlock className="h-3 w-5/6 mb-4" />
      <SkeletonBlock className="h-8 w-24" />
    </div>
  );
}

export function CardSkeletonGrid({ count = 6, columns = "sm:grid-cols-2 lg:grid-cols-3" }) {
  return (
    <div className={`grid grid-cols-1 ${columns} gap-5`}>
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export function ListSkeleton({ count = 5 }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white rounded-xl shadow-card border border-slate-100 p-5">
          <SkeletonBlock className="h-3 w-24 mb-3" />
          <SkeletonBlock className="h-5 w-2/3 mb-3" />
          <SkeletonBlock className="h-3 w-full mb-1.5" />
          <SkeletonBlock className="h-3 w-4/5" />
        </div>
      ))}
    </div>
  );
}

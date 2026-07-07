import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  color?: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  color = "#0F4C81",
}: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h2 className="mt-2 text-3xl font-bold text-slate-800">{value}</h2>
        </div>

        {/* Right */}
        <div
          className="flex h-14 w-14 items-center justify-center rounded-xl"
          style={{
            backgroundColor: `${color}15`,
          }}
        >
          <Icon
            size={28}
            style={{
              color,
            }}
          />
        </div>
      </div>
    </div>
  );
}

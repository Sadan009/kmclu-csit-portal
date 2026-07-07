import { Inbox } from "lucide-react";

export default function EmptyState({
  icon: Icon = Inbox,
  title = "Nothing to show yet",
  description = "There is no data available for this selection.",
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4">
      <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-4">
        <Icon size={28} className="text-primary-400" />
      </div>
      <h3 className="text-lg font-semibold text-slate-700">{title}</h3>
      <p className="text-slate-500 text-sm mt-1 max-w-sm">{description}</p>
    </div>
  );
}

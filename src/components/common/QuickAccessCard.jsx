import { ArrowRight } from "lucide-react";
import Card from "./Card";
import { getIcon } from "../../utils/iconMap";
import Button from "./Button";

export default function QuickAccessCard({ title, description, icon, to, cta }) {
  const Icon = getIcon(icon);
  return (
    <Card className="p-6 group">
      <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-105 transition-all duration-200">
        <Icon size={22} className="text-primary group-hover:text-white transition-colors" />
      </div>
      <h3 className="font-semibold text-slate-800 mb-1.5">{title}</h3>
      <p className="text-sm text-slate-500 mb-4 leading-relaxed">{description}</p>
      <Button to={to} variant="ghost" size="sm" icon={ArrowRight} className="!px-0">
        {cta}
      </Button>
    </Card>
  );
}

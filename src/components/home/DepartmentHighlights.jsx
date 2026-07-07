import SectionTitle from "../common/SectionTitle";
import { getIcon } from "../../utils/iconMap";
import { stats } from "../../data/stats";

export default function DepartmentHighlights() {
  return (
    <section className="container-page py-14 sm:py-16">
      <SectionTitle eyebrow="At a Glance" title="Department Highlights" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => {
          const Icon = getIcon(stat.icon);
          return (
            <div
              key={stat.id}
              className="bg-white rounded-xl shadow-card border border-slate-100 p-6 text-center hover:shadow-card-hover transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-3">
                <Icon size={22} className="text-primary" />
              </div>
              <p className="text-xl sm:text-2xl font-bold text-primary-800 font-display">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

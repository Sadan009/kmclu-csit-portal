import SectionTitle from "../common/SectionTitle";
import QuickAccessCard from "../common/QuickAccessCard";
import { quickAccess } from "../../data/stats";

export default function QuickAccessGrid() {
  return (
    <section className="container-page py-14 sm:py-16">
      <SectionTitle
        eyebrow="Quick Access"
        title="Everything you need, in one place"
        description="Jump straight to the resources students and faculty use most."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {quickAccess.map((item, i) => (
          <div
            key={item.id}
            className="animate-slide-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <QuickAccessCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}

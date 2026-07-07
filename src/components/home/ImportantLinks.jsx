import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import { getIcon } from "../../utils/iconMap";
import { importantLinks } from "../../data/downloads";

const linkTargets = {
  "Academic Calendar": "/downloads",
  Examination: "/previous-papers",
  "Holiday List": "/downloads",
  Downloads: "/downloads",
};

export default function ImportantLinks() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="container-page py-14 sm:py-16">
        <SectionTitle eyebrow="Resources" title="Important Links" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {importantLinks.map((link) => {
            const Icon = getIcon(link.icon);
            return (
              <Link
                key={link.id}
                to={linkTargets[link.title] || "/"}
                className="group bg-surface rounded-xl border border-slate-100 p-5 flex items-start gap-4 hover:border-primary-200 hover:bg-primary-50/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-white shadow-card flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-800 text-sm flex items-center gap-1">
                    {link.title}
                    <ArrowUpRight
                      size={14}
                      className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{link.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

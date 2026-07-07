import { Mail, BookMarked, GraduationCap, Phone } from "lucide-react";
import Card from "../common/Card";

export default function FacultyCard({ member }) {
  const initials = member.name
    .replace(/^(Dr\.|Mr\.|Ms\.|Mrs\.)\s*/, "")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <Card className="p-6 text-center flex flex-col items-center">
      <div className="w-20 h-20 rounded-full bg-primary-50 flex items-center justify-center text-primary font-display font-bold text-xl mb-4 ring-4 ring-primary-50/50">
        {initials}
      </div>
      <h3 className="font-semibold text-slate-800">{member.name}</h3>
      <p className="text-accent-dark text-sm font-medium mt-0.5">
        {member.designation}
      </p>

      <div className="w-full mt-4 pt-4 border-t border-slate-100 space-y-2.5 text-left">
        <p className="flex items-start gap-2 text-xs text-slate-500">
          <GraduationCap
            size={14}
            className="mt-0.5 shrink-0 text-primary-400"
          />
          {member.qualification}
        </p>
        <p className="flex items-center gap-2 text-xs text-slate-500">
          <Phone size={14} className="shrink-0 text-primary-400" />
          {member.phone}
        </p>
        <p className="flex items-start gap-2 text-xs text-slate-500">
          <BookMarked size={14} className="mt-0.5 shrink-0 text-primary-400" />
          {member.interest}
        </p>
        <a
          href={`mailto:${member.email}`}
          className="flex items-center gap-2 text-xs text-primary hover:text-primary-700 font-medium transition-colors"
        >
          <Mail size={14} className="shrink-0" />
          <span className="truncate">{member.email}</span>
        </a>
      </div>
    </Card>
  );
}

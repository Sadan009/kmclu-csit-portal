import Card from "../common/Card";
import { Briefcase } from "lucide-react";

export default function PlacementCard({ student }) {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
          <Briefcase size={18} className="text-primary" />
        </div>

        <div>
          <h3 className="font-semibold">{student.student}</h3>

          <p className="text-xs text-slate-500">{student.role}</p>
        </div>
      </div>

      <p className="text-sm font-medium">{student.company}</p>

      <p className="text-sm text-slate-500 mt-1">{student.location}</p>
    </Card>
  );
}

import Card from "../common/Card";
import { Award } from "lucide-react";

const medalColor = {
  Gold: "bg-yellow-100 text-yellow-700",
  Silver: "bg-slate-200 text-slate-700",
  Bronze: "bg-orange-100 text-orange-700",
};

export default function MedalCard({ student }) {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">{student.student}</h3>

          <p className="text-sm text-slate-500 mt-1">{student.convocation}</p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${medalColor[student.medal]}`}
        >
          {student.medal}
        </span>
      </div>

      <div className="mt-5 space-y-2 text-sm">
        <p>
          <strong>Position:</strong> {student.position}
        </p>

        <p>
          <strong>Company:</strong> {student.company}
        </p>

        <p>
          <strong>Package:</strong> {student.package}
        </p>
      </div>
    </Card>
  );
}

import Card from "../common/Card";
import { Award, Star, GraduationCap } from "lucide-react";

export default function SpecialAchievement({ achievement }) {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-800 to-secondary text-white p-8">
      {/* Decorative background */}
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative flex flex-col lg:flex-row items-center gap-10">
        {/* Left */}

        <div className="flex flex-col items-center">
          <div className="h-32 w-32 rounded-full bg-white/15 border-4 border-white/20 flex items-center justify-center">
            <GraduationCap size={58} className="text-white" />
          </div>

          <span className="mt-5 rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-slate-900">
            ⭐ Outstanding Student
          </span>
        </div>

        {/* Right */}

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-5">
            <Award className="text-yellow-300" size={30} />

            <h2 className="text-2xl font-bold">Special Recognition</h2>
          </div>

          <h3 className="text-4xl font-bold mb-2">{achievement.student}</h3>

          <p className="text-primary-100 mb-6">BCA V Semester Student</p>

          <p className="leading-8 text-primary-100 text-lg">
            {achievement.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/15 px-5 py-3">
              🏅 OTA Chennai Attachment Camp 2024
            </span>

            <span className="rounded-full bg-white/15 px-5 py-3">
              👏 Hon'ble Governor of Uttar Pradesh
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}

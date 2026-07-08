import Card from "../common/Card";
import { Award } from "lucide-react";

export default function SpecialAchievement({ achievement }) {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-800 to-primary-900 text-white p-8">
      {/* Background Effects */}
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Photo */}

        <div className="relative">
          <img
            src={achievement.image}
            alt="Sheeri Fatima receiving recognition from the Hon'ble Governor"
            className="w-full h-[380px] rounded-2xl object-cover shadow-2xl border-4 border-white/20"
          />

          <div className="absolute bottom-4 left-4 rounded-full bg-black/60 backdrop-blur-md px-4 py-2 text-sm font-medium">
            📸 {achievement.title}
          </div>
        </div>

        {/* Content */}

        <div>
          <div className="flex items-center gap-3 mb-4">
            <Award size={30} className="text-yellow-300" />

            <h2 className="text-3xl font-bold">Special Recognition</h2>
          </div>

          <span className="inline-flex rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-900 mb-5">
            ⭐ Outstanding Student Achievement
          </span>

          <h3 className="text-4xl font-bold">{achievement.student}</h3>

          <p className="mt-2 text-primary-100 font-medium">
            {achievement.programme}
          </p>

          <p className="mt-6 text-lg leading-8 text-primary-100">
            {achievement.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {achievement.badges.map((badge) => (
              <span key={badge} className="rounded-full bg-white/15 px-5 py-3">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

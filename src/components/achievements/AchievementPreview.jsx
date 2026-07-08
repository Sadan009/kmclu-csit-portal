import { Award, Briefcase, Star, ArrowRight } from "lucide-react";

import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import Button from "../common/Button";

import {
  achievementStats,
  medalists,
  specialAchievement,
} from "../../data/achievements";

const icons = {
  "Chancellor Medalists": Award,
  "Top Placements": Briefcase,
  "Recruiting Companies": Briefcase,
  "Outstanding Student Achievements": Star,
};

export default function AchievementPreview() {
  return (
    <section className="bg-slate-50 border-y border-slate-100">
      <div className="container-page py-14 sm:py-16">
        <SectionTitle
          eyebrow="Student Success"
          title="Achievements & Placements"
          description="Celebrating academic excellence, leadership and career success of our students."
          action={
            <Button to="/achievements" variant="outline" icon={ArrowRight}>
              View All
            </Button>
          }
        />

        {/* Statistics */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {achievementStats.map((item) => {
            const Icon = icons[item.title];

            return (
              <Card key={item.id} className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-primary" />
                </div>

                <h3 className="text-2xl font-bold text-primary">
                  {item.value}
                </h3>

                <p className="text-sm text-slate-500 mt-1">{item.title}</p>
              </Card>
            );
          })}
        </div>

        {/* Bottom */}

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Medalists */}

          <Card className="p-6 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-6">
              <Award className="text-amber-500" size={22} />

              <h3 className="text-lg font-semibold">
                Chancellor Medal Recipients
              </h3>
            </div>

            <div className="space-y-5 flex-1">
              {medalists.slice(0, 5).map((student) => (
                <div
                  key={student.id}
                  className="flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      {student.student}
                    </h4>

                    <p className="text-sm text-slate-500">{student.company}</p>
                  </div>

                  <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary">
                    {student.convocation}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100">
              <Button
                to="/achievements"
                variant="outline"
                icon={ArrowRight}
                className="w-full justify-center"
              >
                View All Achievements
              </Button>
            </div>
          </Card>

          {/* Special Achievement */}

          <Card className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-800 to-primary-900 text-white p-0">
            {/* Decorative background */}

            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col">
              {/* Image */}

              <div className="relative h-56 overflow-hidden">
                <img
                  src={specialAchievement.image}
                  alt={specialAchievement.student}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/30 to-transparent" />

                <div className="absolute bottom-4 left-5">
                  <span className="inline-flex items-center rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-slate-900 mb-3">
                    ⭐ Featured Achievement
                  </span>

                  <h3 className="text-2xl font-bold">
                    {specialAchievement.student}
                  </h3>

                  <p className="text-primary-100">
                    {specialAchievement.programme}
                  </p>
                </div>
              </div>

              {/* Content */}

              <div className="p-6">
                <h4 className="font-semibold text-lg mb-3">
                  {specialAchievement.title}
                </h4>

                <p className="text-primary-100 text-sm leading-7 line-clamp-3">
                  {specialAchievement.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {specialAchievement.badges.slice(0, 2).map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full bg-white/15 px-3 py-1.5 text-xs"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

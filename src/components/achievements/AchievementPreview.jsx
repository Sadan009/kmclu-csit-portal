import { Award, Briefcase, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <Award className="text-amber-500" size={22} />

              <h3 className="text-lg font-semibold">
                Chancellor Medal Recipients
              </h3>
            </div>

            <div className="space-y-4">
              {medalists.slice(0, 3).map((student) => (
                <div
                  key={student.id}
                  className="flex justify-between items-center"
                >
                  <div>
                    <h4 className="font-medium text-slate-800">
                      {student.student}
                    </h4>

                    <p className="text-xs text-slate-500">{student.company}</p>
                  </div>

                  <span className="text-xs bg-primary-50 text-primary px-3 py-1 rounded-full">
                    {student.convocation}
                  </span>
                </div>
              ))}
            </div>
          </Card>
          {/* when put image */}
          {/* <div className="h-28 w-28 rounded-full overflow-hidden">
            <img
              src="/students/sheeri-fatima.jpg"
              alt="Sheeri Fatima"
              className="h-full w-full object-cover"
            />
          </div> */}
          {/* Special Achievement */}
          <Card className="relative overflow-hidden p-6 bg-gradient-to-br from-primary to-primary-800 text-white">
            {/* Decorative Background */}
            <div className="absolute -right-10 -top-10 w-36 h-36 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -left-6 bottom-0 w-28 h-28 rounded-full bg-accent/20 blur-2xl" />

            <div className="relative">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                  <Star size={20} className="text-yellow-300" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-primary-100">
                    Featured Achievement
                  </p>

                  <h3 className="text-lg font-semibold">Student Recognition</h3>
                </div>
              </div>

              {/* Student Avatar */}

              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center text-2xl font-bold">
                  SF
                </div>

                <div>
                  <h4 className="text-xl font-bold">
                    {specialAchievement.student}
                  </h4>

                  <p className="text-primary-100 text-sm">BCA V Semester</p>
                </div>
              </div>

              <p className="text-primary-100 leading-relaxed">
                {specialAchievement.title}
              </p>

              <div className="mt-6 inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm">
                🏅 {specialAchievement.award}
              </div>
            </div>
          </Card>
          0
        </div>
      </div>
    </section>
  );
}

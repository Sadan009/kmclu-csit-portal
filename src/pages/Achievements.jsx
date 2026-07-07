import { Award, Briefcase, Building2, Star } from "lucide-react";

import PageTitle from "../components/common/PageTitle";
import SectionTitle from "../components/common/SectionTitle";

import Hero from "../components/achievements/Hero";
import StatCard from "../components/achievements/StatCard";
import MedalCard from "../components/achievements/MedalCard";
import PlacementCard from "../components/achievements/PlacementCard";
import StudentStrength from "../components/achievements/StudentStrength";
import SpecialAchievement from "../components/achievements/SpecialAchievement";

import {
  achievementStats,
  medalists,
  placements,
  specialAchievement,
  studentStrength,
} from "../data/achievements";

const icons = {
  Award,
  Briefcase,
  Building2,
  Star,
};

export default function Achievements() {
  return (
    <>
      <title>Achievements & Placements | CSIT Department</title>

      <PageTitle
        title="Achievements & Placements"
        description="Celebrating the outstanding academic, placement and extracurricular achievements of our students."
        crumbs={[
          {
            label: "Achievements",
          },
        ]}
      />

      <div className="container-page py-10 space-y-20">
        {/* Hero */}

        <Hero />

        {/* Statistics */}

        <section>
          <SectionTitle eyebrow="Department Success" title="Quick Statistics" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {achievementStats.map((item) => {
              const Icon = icons[item.icon];

              return (
                <StatCard
                  key={item.id}
                  icon={Icon}
                  value={item.value}
                  title={item.title}
                />
              );
            })}
          </div>
        </section>

        {/* Chancellor Medalists */}

        <section>
          <SectionTitle
            eyebrow="Academic Excellence"
            title="Chancellor Medal Recipients"
            description="Students who brought laurels to the Department through outstanding academic performance."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {medalists.map((student) => (
              <MedalCard key={student.id} student={student} />
            ))}
          </div>
        </section>

        {/* Special Achievement */}

        <section>
          <SectionTitle
            eyebrow="Recognition"
            title="Outstanding Student Achievement"
          />

          <SpecialAchievement achievement={specialAchievement} />
        </section>

        {/* Placement */}

        <section>
          <SectionTitle
            eyebrow="Career Success"
            title="Placement Highlights"
            description="Our students are working in reputed national and international organizations."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {placements.map((student) => (
              <PlacementCard key={student.id} student={student} />
            ))}
          </div>
        </section>

        {/* Student Strength */}

        <section>
          <SectionTitle
            eyebrow="Department Growth"
            title="Year-wise Student Strength"
          />

          <StudentStrength students={studentStrength} />
        </section>
      </div>
    </>
  );
}

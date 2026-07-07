import { Trophy } from "lucide-react";

export default function Hero() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-primary to-primary-800 text-white overflow-hidden">
      <div className="container-page py-14 sm:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm mb-6">
            <Trophy size={18} className="text-yellow-300" />
            Student Success
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight">
            Achievements & Placements
          </h1>

          <p className="mt-6 text-primary-100 text-lg leading-relaxed">
            Celebrating the academic excellence, leadership, innovation and
            outstanding career achievements of our students.
          </p>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, BookOpen } from "lucide-react";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-800">
      {/* Decorative gradient / pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary-light/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 bg-white/10 text-primary-100 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
            <BookOpen size={14} />
            Khwaja Moinuddin Chishti Language University, Lucknow
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Department of Computer Science &amp; Information Technology
          </h1>
          <p className="text-primary-100/90 text-base sm:text-lg mt-5 leading-relaxed">
            Bachelor of Computer Applications (BCA) &middot; Master of Computer
            Applications (MCA)
          </p>
          <p className="text-primary-200/70 text-sm sm:text-base mt-3 max-w-xl">
            Your one-stop portal for notices, syllabus, time tables, previous
            year papers, faculty details and academic downloads.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button to="/notices" variant="accent" size="lg" icon={ArrowRight}>
              Latest Notices
            </Button>
            <Button
              to="/about"
              variant="outline"
              size="lg"
              className="!bg-transparent !text-white !border-white/30 hover:!bg-white/10"
            >
              About Department
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

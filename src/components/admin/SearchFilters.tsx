interface SearchFiltersProps {
  search: string;
  setSearch: (value: string) => void;

  category: string;
  setCategory: (value: string) => void;

  program: string;
  setProgram: (value: string) => void;

  semester: string;
  setSemester: (value: string) => void;

  year: string;
  setYear: (value: string) => void;
}

const categories = [
  "All",
  "Notice",
  "Syllabus",
  "Time Table",
  "Previous Paper",
  "Download",
];

const programs = ["All", "BCA", "MCA"];

const semesters = [
  "All",
  "Semester I",
  "Semester II",
  "Semester III",
  "Semester IV",
  "Semester V",
  "Semester VI",
];

const years = ["All", "2026", "2025", "2024", "2023"];

export default function SearchFilters({
  search,
  setSearch,
  category,
  setCategory,
  program,
  setProgram,
  semester,
  setSemester,
  year,
  setYear,
}: SearchFiltersProps) {
  return (
    <div className="rounded-xl bg-white border border-slate-200 shadow-sm p-5">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {/* Search */}

        <input
          type="text"
          placeholder="Search documents..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-[#0F4C81]"
        />

        {/* Category */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-[#0F4C81]"
        >
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        {/* Program */}

        <select
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          className="rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-[#0F4C81]"
        >
          {programs.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        {/* Semester */}

        <select
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          className="rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-[#0F4C81]"
        >
          {semesters.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        {/* Year */}

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-[#0F4C81]"
        >
          {years.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

import { useEffect, useMemo, useState } from "react";
import { FileStack } from "lucide-react";

import PageTitle from "../components/common/PageTitle";
import SearchBar from "../components/common/SearchBar";
import PDFCard from "../components/common/PDFCard";
import EmptyState from "../components/common/EmptyState";

import { getAllPreviousPapers } from "../services/publicService";

const courses = ["BCA", "MCA"];

const semestersByCourse = {
  BCA: [
    "Semester I",
    "Semester II",
    "Semester III",
    "Semester IV",
    "Semester V",
    "Semester VI",
  ],

  MCA: ["Semester I", "Semester II", "Semester III", "Semester IV"],
};

export default function PreviousPapers() {
  const [course, setCourse] = useState("BCA");
  const [semester, setSemester] = useState("All");
  const [year, setYear] = useState("All");
  const [query, setQuery] = useState("");

  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPapers();
  }, []);

  const loadPapers = async () => {
    try {
      setLoading(true);

      const data = await getAllPreviousPapers();

      setPapers(data);
    } catch (error) {
      console.error("Failed to load previous papers:", error);
    } finally {
      setLoading(false);
    }
  };

  // Dynamic years
  const years = useMemo(() => {
    const uniqueYears = [
      ...new Set(
        papers
          .filter(
            (paper) => paper.program === course || paper.program === "ALL",
          )
          .map((paper) => paper.year),
      ),
    ];

    return uniqueYears.sort((a, b) => Number(b) - Number(a));
  }, [papers, course]);

  // Filters
  const filtered = useMemo(() => {
    return papers.filter((paper) => {
      const matchesProgram =
        paper.program === course || paper.program === "ALL";

      const matchesSemester = semester === "All" || paper.semester === semester;

      const matchesYear = year === "All" || paper.year === year;

      const matchesSearch = paper.title
        .toLowerCase()
        .includes(query.toLowerCase());

      return matchesProgram && matchesSemester && matchesYear && matchesSearch;
    });
  }, [papers, course, semester, year, query]);

  return (
    <>
      <title>Previous Year Papers | CSIT Department</title>

      <PageTitle
        title="Previous Year Papers"
        description="Browse previous year question papers by course, semester and year."
        crumbs={[
          {
            label: "Previous Papers",
          },
        ]}
      />

      <div className="container-page py-10 sm:py-12">
        {/* Program */}

        <div className="mb-6 flex w-full gap-2 rounded-xl border border-slate-200 bg-white p-1.5 sm:w-fit">
          {courses.map((item) => (
            <button
              key={item}
              onClick={() => {
                setCourse(item);
                setSemester("All");
                setYear("All");
              }}
              className={`flex-1 rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors sm:flex-none ${
                course === item
                  ? "bg-primary text-white"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Filters */}

        <div className="mb-8 flex flex-col gap-4 lg:flex-row">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search papers..."
            className="lg:max-w-xs"
          />

          {/* Semester */}

          <select
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm"
          >
            <option value="All">All Semesters</option>

            {semestersByCourse[course].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          {/* Year */}

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm"
          >
            <option value="All">All Years</option>

            {years.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <div className="py-12 text-center text-slate-500">
            Loading previous papers...
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((paper) => (
              <PDFCard
                key={paper.id}
                title={paper.title}
                meta={`${paper.program} • ${paper.semester} • ${paper.year}`}
                driveFileId={paper.driveFileId}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={FileStack}
            title="No papers found"
            description="Try selecting another semester, year or search term."
          />
        )}
      </div>
    </>
  );
}

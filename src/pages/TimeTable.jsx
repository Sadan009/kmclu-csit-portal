import { useEffect, useMemo, useState } from "react";
import { CalendarClock } from "lucide-react";

import PageTitle from "../components/common/PageTitle";
import PDFCard from "../components/common/PDFCard";
import EmptyState from "../components/common/EmptyState";

import { getAllTimeTables } from "../services/publicService";

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

export default function TimeTable() {
  const [course, setCourse] = useState("BCA");
  const [semester, setSemester] = useState("All");

  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTimeTables();
  }, []);

  const loadTimeTables = async () => {
    try {
      setLoading(true);

      const data = await getAllTimeTables();

      setDocuments(data);
    } catch (error) {
      console.error("Failed to load time tables:", error);
    } finally {
      setLoading(false);
    }
  };

  const filtered = useMemo(() => {
    return documents.filter((doc) => {
      const matchesProgram = doc.program === course || doc.program === "ALL";

      const matchesSemester = semester === "All" || doc.semester === semester;

      return matchesProgram && matchesSemester;
    });
  }, [documents, course, semester]);

  return (
    <>
      <title>Time Table | CSIT Department, KMCLU Lucknow</title>

      <PageTitle
        title="Time Table"
        description="Course and semester-wise class schedules for BCA & MCA students."
        crumbs={[{ label: "Time Table" }]}
      />

      <div className="container-page py-10 sm:py-12">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          {/* Program */}

          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-500">
              Program
            </label>

            <select
              value={course}
              onChange={(e) => {
                setCourse(e.target.value);
                setSemester("All");
              }}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 sm:w-52"
            >
              {courses.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Semester */}

          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-500">
              Semester
            </label>

            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 sm:w-52"
            >
              <option value="All">All Semesters</option>

              {semestersByCourse[course].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="py-12 text-center text-slate-500">
            Loading time tables...
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((doc) => (
              <PDFCard
                key={doc.id}
                title={doc.title}
                meta={`${doc.program} • ${doc.semester}`}
                driveFileId={doc.driveFileId}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={CalendarClock}
            title="Time table not available"
            description="The time table for this selection has not been uploaded yet."
          />
        )}
      </div>
    </>
  );
}

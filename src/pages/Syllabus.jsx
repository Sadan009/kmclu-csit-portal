import { useEffect, useMemo, useState } from "react";
import { BookOpen } from "lucide-react";

import PageTitle from "../components/common/PageTitle";
import PDFCard from "../components/common/PDFCard";
import EmptyState from "../components/common/EmptyState";

import { getAllSyllabus } from "../services/publicService";

const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

export default function Syllabus() {
  const [course, setCourse] = useState("BCA");
  const [semester, setSemester] = useState(1);

  const [loading, setLoading] = useState(true);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    loadSyllabus();
  }, []);

  const loadSyllabus = async () => {
    try {
      setLoading(true);

      const data = await getAllSyllabus();

      setDocuments(data);
    } catch (error) {
      console.error("Failed to load syllabus:", error);
    } finally {
      setLoading(false);
    }
  };

  // Filter according to selected program & semester
  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      const matchesProgram = doc.program === course || doc.program === "ALL";

      const matchesSemester =
        doc.semester === `Semester ${romanNumerals[semester - 1]}`;

      return matchesProgram && matchesSemester;
    });
  }, [documents, course, semester]);

  const totalSemesters = course === "BCA" ? 6 : 4;

  return (
    <>
      <title>Syllabus | CSIT Department, KMCLU Lucknow</title>

      <PageTitle
        title="Syllabus"
        description="Semester-wise course structure and subject syllabus for BCA & MCA."
        crumbs={[{ label: "Syllabus" }]}
      />

      <div className="container-page py-10 sm:py-12">
        {/* Program */}

        <div className="mb-6 flex w-full gap-2 rounded-xl border border-slate-200 bg-white p-1.5 sm:w-fit">
          {["BCA", "MCA"].map((item) => (
            <button
              key={item}
              onClick={() => {
                setCourse(item);
                setSemester(1);
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

        {/* Semester */}

        <div className="mb-8 flex flex-wrap gap-2">
          {Array.from({ length: totalSemesters }, (_, index) => index + 1).map(
            (item) => (
              <button
                key={item}
                onClick={() => setSemester(item)}
                className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                  semester === item
                    ? "border-primary-200 bg-primary-50 text-primary"
                    : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
                }`}
              >
                Semester {romanNumerals[item - 1]}
              </button>
            ),
          )}
        </div>

        {/* Loading */}

        {loading ? (
          <div className="py-12 text-center text-slate-500">
            Loading syllabus...
          </div>
        ) : filteredDocuments.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDocuments.map((doc) => (
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
            icon={BookOpen}
            title="Syllabus not available"
            description="No syllabus has been uploaded for this semester."
          />
        )}
      </div>
    </>
  );
}

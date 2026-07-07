import { useEffect, useMemo, useState } from "react";
import PageTitle from "../components/common/PageTitle";
import SearchBar from "../components/common/SearchBar";
import NoticeCard from "../components/notices/NoticeCard";
import Pagination from "../components/common/Pagination";
import EmptyState from "../components/common/EmptyState";
import { ListSkeleton } from "../components/common/Skeleton";
import usePagination from "../hooks/usePagination";
import { getAllNotices } from "../services/publicService";
import { Bell } from "lucide-react";

const programs = ["All", "BCA", "MCA"];

export default function Notices() {
  const [query, setQuery] = useState("");
  const [program, setProgram] = useState("All");

  const [loading, setLoading] = useState(true);
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    loadNotices();
  }, []);

  const loadNotices = async () => {
    try {
      setLoading(true);

      const data = await getAllNotices();

      const formatted = data.map((doc) => ({
        id: doc.id,
        title: doc.title,
        category: doc.category,
        program: doc.program,
        semester: doc.semester,
        driveFileId: doc.driveFileId,
        date: doc.createdAt?.toDate ? doc.createdAt.toDate() : new Date(),
      }));

      setNotices(formatted);
    } catch (error) {
      console.error("Failed to load notices", error);
    } finally {
      setLoading(false);
    }
  };

  const filtered = useMemo(() => {
    return notices.filter((notice) => {
      const matchesProgram =
        program === "All" ||
        notice.program === program ||
        notice.program === "All";

      const matchesQuery = notice.title
        .toLowerCase()
        .includes(query.toLowerCase());

      return matchesProgram && matchesQuery;
    });
  }, [notices, query, program]);

  const { page, setPage, totalPages, pagedItems } = usePagination(filtered, 6);

  return (
    <>
      <title>Notices | CSIT Department, KMCLU Lucknow</title>

      <PageTitle
        title="Notices"
        description="Latest circulars, exam updates and academic announcements from the department."
        crumbs={[{ label: "Notices" }]}
      />

      <div className="container-page py-10 sm:py-12">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search notices..."
            className="sm:max-w-sm"
          />

          <div className="flex flex-wrap gap-2">
            {programs.map((item) => (
              <button
                key={item}
                onClick={() => setProgram(item)}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  program === item
                    ? "bg-primary text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:bg-primary-50 hover:text-primary"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <ListSkeleton count={6} />
        ) : pagedItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pagedItems.map((notice) => (
                <NoticeCard key={notice.id} notice={notice} />
              ))}
            </div>

            <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </>
        ) : (
          <EmptyState
            icon={Bell}
            title="No notices found"
            description="Try adjusting your search."
          />
        )}
      </div>
    </>
  );
}

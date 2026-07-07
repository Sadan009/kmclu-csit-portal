import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import SectionTitle from "../common/SectionTitle";
import NoticeCard from "../notices/NoticeCard";
import Button from "../common/Button";

import { getLatestNotices } from "../../services/publicService";

export default function LatestNotices() {
  const [latest, setLatest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLatestNotices();
  }, []);

  const loadLatestNotices = async () => {
    try {
      const data = await getLatestNotices(5);

      const formatted = data.map((doc) => ({
        id: doc.id,
        title: doc.title,
        category: doc.category,
        program: doc.program,
        semester: doc.semester,
        driveFileId: doc.driveFileId,
        date: doc.createdAt?.toDate ? doc.createdAt.toDate() : new Date(),
      }));

      setLatest(formatted);
    } catch (error) {
      console.error("Error loading notices:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white border-y border-slate-100">
      <div className="container-page py-14 sm:py-16">
        <SectionTitle
          eyebrow="Announcements"
          title="Latest Notices"
          description="Recent circulars, exam updates and departmental announcements."
          action={
            <Button to="/notices" variant="outline" icon={ArrowRight}>
              View All Notices
            </Button>
          }
        />

        {loading ? (
          <div className="text-center py-12 text-slate-500">
            Loading latest notices...
          </div>
        ) : latest.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            No notices available.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {latest.map((notice) => (
              <NoticeCard key={notice.id} notice={notice} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

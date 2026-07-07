import { useEffect, useState } from "react";
import {
  FileText,
  Bell,
  BookOpen,
  Download,
  PlusCircle,
  FolderOpen,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import StatCard from "../../components/admin/StatCard";

import {
  getCategoryCount,
  getLatestDocuments,
  getTotalDocuments,
} from "../../services/documentService";

export default function Dashboard() {
  const navigate = useNavigate();
  const [recentUploads, setRecentUploads] = useState<any[]>([]);

  const [stats, setStats] = useState([
    {
      title: "Documents",
      value: 0,
      icon: FileText,
      color: "#0F4C81",
    },
    {
      title: "Notices",
      value: 0,
      icon: Bell,
      color: "#F59E0B",
    },
    {
      title: "Syllabus",
      value: 0,
      icon: BookOpen,
      color: "#10B981",
    },
    {
      title: "Downloads",
      value: 0,
      icon: Download,
      color: "#7C3AED",
    },
  ]);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [totalDocs, totalNotices, totalSyllabus, totalDownloads, latest] =
          await Promise.all([
            getTotalDocuments(),
            getCategoryCount("Notice"),
            getCategoryCount("Syllabus"),
            getCategoryCount("Downloads"),
            getLatestDocuments(5),
          ]);

        setStats([
          {
            title: "Documents",
            value: totalDocs,
            icon: FileText,
            color: "#0F4C81",
          },
          {
            title: "Notices",
            value: totalNotices,
            icon: Bell,
            color: "#F59E0B",
          },
          {
            title: "Syllabus",
            value: totalSyllabus,
            icon: BookOpen,
            color: "#10B981",
          },
          {
            title: "Downloads",
            value: totalDownloads,
            icon: Download,
            color: "#7C3AED",
          },
        ]);

        setRecentUploads(latest);
      } catch (error) {
        console.error(error);
      }
    };

    loadDashboard();
  }, []);

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
        <h1 className="text-3xl font-bold text-slate-800">Welcome 👋</h1>

        <p className="mt-2 text-slate-500">
          Manage all documents and academic resources from one place.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>

      {/* Bottom Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Uploads */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-4">
            <h2 className="text-lg font-semibold text-slate-800">
              Recent Uploads
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">
                    Title
                  </th>

                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">
                    Category
                  </th>

                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">
                    Date
                  </th>
                </tr>
              </thead>

              <tbody>
                {recentUploads.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-slate-100 hover:bg-slate-50"
                  >
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {item.title}
                    </td>

                    <td className="px-6 py-4">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-[#0F4C81]">
                        {item.category}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-500">
                      {item.createdAt?.toDate().toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-4">
            <h2 className="text-lg font-semibold text-slate-800">
              Quick Actions
            </h2>
          </div>

          <div className="space-y-4 p-6">
            <button
              onClick={() => navigate("/admin/add-document")}
              className="flex w-full items-center gap-3 rounded-xl bg-[#0F4C81] px-4 py-3 text-white transition hover:bg-[#0d3e69] cursor-pointer"
            >
              <PlusCircle size={20} />
              Add Document
            </button>

            <button
              onClick={() => navigate("/admin/documents")}
              className="flex w-full items-center gap-3 rounded-xl border border-slate-300 px-4 py-3 text-slate-700 transition hover:bg-slate-100 cursor-pointer"
            >
              <FolderOpen size={20} />
              Manage Documents
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Calendar, Tag, Eye, Download } from "lucide-react";

import Card from "../common/Card";
import PDFPreviewModal from "../common/PDFPreviewModal";
import { formatDate } from "../../utils/formatDate";
import { getDownloadUrl } from "../../utils/googleDrive";

const categoryStyles = {
  Notice: "bg-red-50 text-red-600",
  Syllabus: "bg-blue-50 text-blue-600",
  "Time Table": "bg-green-50 text-green-600",
  "Previous Paper": "bg-purple-50 text-purple-600",
  Download: "bg-amber-50 text-amber-700",
};

export default function NoticeCard({ notice }) {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <Card className="flex h-full flex-col p-5">
        {/* Header */}

        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
              categoryStyles[notice.category] || "bg-slate-100 text-slate-600"
            }`}
          >
            <Tag size={12} />
            {notice.category}
          </span>

          <span className="inline-flex items-center gap-1 text-xs text-slate-400">
            <Calendar size={13} />
            {formatDate(notice.date)}
          </span>
        </div>

        {/* Title */}

        <h3 className="mb-4 text-lg font-semibold text-slate-800">
          {notice.title}
        </h3>

        {/* Program */}

        <p className="text-sm text-slate-500">
          Program:
          <span className="ml-2 font-medium">{notice.program}</span>
        </p>

        {/* Semester */}

        <p className="mb-6 text-sm text-slate-500">
          Semester:
          <span className="ml-2 font-medium">{notice.semester}</span>
        </p>

        {/* Buttons */}

        <div className="mt-auto flex gap-3">
          <button
            onClick={() => setPreviewOpen(true)}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#0F4C81] px-4 py-2 text-white transition hover:bg-[#0d3e69] cursor-pointer"
          >
            <Eye size={16} />
            View
          </button>

          <a
            href={getDownloadUrl(notice.driveFileId)}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2 transition hover:bg-slate-100"
          >
            <Download size={16} />
            Download
          </a>
        </div>
      </Card>

      <PDFPreviewModal
        isOpen={previewOpen}
        onClose={() => setPreviewOpen(false)}
        driveFileId={notice.driveFileId}
        title={notice.title}
      />
    </>
  );
}

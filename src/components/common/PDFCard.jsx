import { useState } from "react";
import { FileText, Eye, Download } from "lucide-react";
import Card from "./Card";
import Button from "./Button";

import PDFPreviewModal from "./PDFPreviewModal";
import { getPreviewUrl, getDownloadUrl } from "../../utils/googleDrive";

export default function PDFCard({ title, meta, driveFileId }) {
  const [openPreview, setOpenPreview] = useState(false);

  return (
    <>
      <Card className="p-5 flex items-start gap-4">
        {/* PDF Icon */}

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-50">
          <FileText size={20} className="text-red-500" />
        </div>

        {/* Content */}

        <div className="min-w-0 flex-1">
          <h3
            className="truncate text-sm font-semibold text-slate-800"
            title={title}
          >
            {title}
          </h3>

          {meta && <p className="mt-1 text-xs text-slate-400">{meta}</p>}

          <div className="mt-4 flex gap-2">
            <Button
              size="sm"
              variant="ghost"
              icon={Eye}
              className="!px-2"
              onClick={() => setOpenPreview(true)}
            >
              View
            </Button>

            <a
              href={getDownloadUrl(driveFileId)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="outline" icon={Download}>
                Download
              </Button>
            </a>
          </div>
        </div>
      </Card>

      <PDFPreviewModal
        isOpen={openPreview}
        onClose={() => setOpenPreview(false)}
        title={title}
        driveFileId={driveFileId}
      />
    </>
  );
}

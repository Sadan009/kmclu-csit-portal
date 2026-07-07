import { Download, Eye, FileText } from "lucide-react";
import { useState } from "react";

import Card from "../common/Card";
import Button from "../common/Button";
import PDFPreviewModal from "../common/PDFPreviewModal";
import { getDownloadUrl } from "../../utils/googleDrive";

export default function DownloadCard({ item }) {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <Card className="p-6 flex flex-col">
        <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
          <FileText size={22} className="text-red-500" />
        </div>

        <h3 className="font-semibold text-slate-800 mb-2">{item.title}</h3>

        <p className="text-sm text-slate-500 flex-1">
          {item.program} • {item.semester}
        </p>

        {item.year && (
          <p className="text-xs text-slate-400 mt-1">{item.year}</p>
        )}

        <div className="mt-5 flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            icon={Eye}
            onClick={() => setPreviewOpen(true)}
          >
            View
          </Button>

          <a
            href={getDownloadUrl(item.driveFileId)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" icon={Download}>
              Download
            </Button>
          </a>
        </div>
      </Card>

      <PDFPreviewModal
        isOpen={previewOpen}
        onClose={() => setPreviewOpen(false)}
        title={item.title}
        driveFileId={item.driveFileId}
      />
    </>
  );
}

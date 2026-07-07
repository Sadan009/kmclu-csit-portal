import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  driveFileId: string;
  title: string;
}

export default function PDFPreviewModal({
  isOpen,
  onClose,
  driveFileId,
  title,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
      <div className="relative h-[90vh] w-full max-w-6xl rounded-xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h2 className="text-lg font-semibold">{title}</h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={22} />
          </button>
        </div>

        <iframe
          title={title}
          src={`https://drive.google.com/file/d/${driveFileId}/preview`}
          className="h-[calc(90vh-72px)] w-full"
        />
      </div>
    </div>
  );
}

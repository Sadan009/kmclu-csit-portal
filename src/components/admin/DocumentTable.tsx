import { Eye, Pencil, Trash2, Download } from "lucide-react";

import { getDownloadUrl } from "../../utils/googleDrive";

import { DocumentType } from "../../types/document";

interface Props {
  documents: DocumentType[];

  onView: (doc: DocumentType) => void;

  onEdit: (id: string) => void;

  onDelete: (doc: DocumentType) => void;
}

export default function DocumentTable({
  documents,
  onView,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow border border-slate-200">
      <table className="min-w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left">Title</th>

            <th className="px-6 py-4 text-left">Category</th>

            <th className="px-6 py-4 text-left">Program</th>

            <th className="px-6 py-4 text-left">Semester</th>

            <th className="px-6 py-4 text-left">Year</th>

            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {documents.length === 0 ? (
            <tr>
              <td colSpan={6} className="py-10 text-center text-gray-500">
                No documents found.
              </td>
            </tr>
          ) : (
            documents.map((doc) => (
              <tr
                key={doc.id}
                className="border-t hover:bg-slate-50 transition"
              >
                <td className="px-6 py-4">{doc.title}</td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-[#0F4C81]">
                    {doc.category}
                  </span>
                </td>

                <td className="px-6 py-4">{doc.program}</td>

                <td className="px-6 py-4">{doc.semester}</td>

                <td className="px-6 py-4">{doc.year}</td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    {/* View */}
                    <button
                      onClick={() => onView(doc)}
                      className="rounded-lg bg-blue-100 p-2 text-blue-700 hover:bg-blue-200 transition cursor-pointer"
                      title="Preview"
                    >
                      <Eye size={18} />
                    </button>

                    {/* Download */}
                    <a
                      href={getDownloadUrl(doc.driveFileId)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-green-100 p-2 text-green-700 hover:bg-green-200 transition"
                      title="Download"
                    >
                      <Download size={18} />
                    </a>

                    {/* Edit */}
                    <button
                      onClick={() => onEdit(doc.id)}
                      className="rounded-lg bg-amber-100 p-2 text-amber-700 hover:bg-amber-200 transition cursor-pointer"
                      title="Edit"
                    >
                      <Pencil size={18} />
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => onDelete(doc)}
                      className="rounded-lg bg-red-100 p-2 text-red-700 hover:bg-red-200 transition cursor-pointer"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

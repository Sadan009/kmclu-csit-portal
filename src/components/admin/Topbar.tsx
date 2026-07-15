import { Download, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { DocumentType } from "../../types/document";
import { getDocuments } from "../../services/documentService";
import { exportDocumentsToExcel } from "../../utils/excelExport";

export default function Topbar() {
  const [documents, setDocuments] = useState<DocumentType[]>([]);

  useEffect(() => {
    const loadDocuments = async () => {
      const data = (await getDocuments()) as DocumentType[];

      setDocuments(data);
    };

    loadDocuments();
  }, []);

  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>

        <p className="text-sm text-gray-500">Department of CS & IT</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => exportDocumentsToExcel(documents)}
          className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-700 cursor-pointer"
        >
          <Download size={18} />
          Export Report
        </button>

        <span className="bg-blue-100 text-[#0F4C81] px-4 py-2 rounded-full text-sm font-medium">
          Admin
        </span>
      </div>
    </header>
  );
}

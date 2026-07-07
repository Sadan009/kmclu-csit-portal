import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchFilters from "../../components/admin/SearchFilters";
import DocumentTable from "../../components/admin/DocumentTable";
import Pagination from "../../components/admin/Pagination";

import { getDocuments } from "../../services/documentService";

import { DocumentType } from "../../types/document";

import PDFPreviewModal from "../../components/common/PDFPreviewModal";
import DeleteModal from "../../components/admin/DeleteModal";
import { deleteDocument } from "../../services/documentService";

const ITEMS_PER_PAGE = 10;

export default function Documents() {
  const navigate = useNavigate();

  const [documents, setDocuments] = useState<DocumentType[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [program, setProgram] = useState("All");

  const [semester, setSemester] = useState("All");

  const [year, setYear] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);

  const [selectedDocument, setSelectedDocument] = useState<DocumentType | null>(
    null,
  );

  const [previewOpen, setPreviewOpen] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);

  useEffect(() => {
    loadDocuments();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, program, semester, year]);

  async function loadDocuments() {
    try {
      setLoading(true);

      const data = await getDocuments();

      setDocuments(data as DocumentType[]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      const matchesSearch = doc.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory = category === "All" || doc.category === category;

      const matchesProgram = program === "All" || doc.program === program;

      const matchesSemester = semester === "All" || doc.semester === semester;

      const matchesYear = year === "All" || doc.year === year;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesProgram &&
        matchesSemester &&
        matchesYear
      );
    });
  }, [documents, search, category, program, semester, year]);

  const totalPages = Math.ceil(filteredDocuments.length / ITEMS_PER_PAGE);

  const paginatedDocuments = filteredDocuments.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleDelete = async () => {
    if (!selectedDocument) return;

    try {
      await deleteDocument(selectedDocument.id);

      setDeleteOpen(false);

      loadDocuments();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Documents</h1>

          <p className="text-gray-500">Manage all department resources</p>
        </div>

        <button
          onClick={() => navigate("/admin/add-document")}
          className="rounded-lg bg-[#0F4C81] px-5 py-3 text-white hover:bg-[#0d3e69]"
        >
          Add Document
        </button>
      </div>

      <SearchFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        program={program}
        setProgram={setProgram}
        semester={semester}
        setSemester={setSemester}
        year={year}
        setYear={setYear}
      />

      {loading ? (
        <div className="rounded-xl bg-white p-12 text-center shadow">
          Loading documents...
        </div>
      ) : (
        <>
          <DocumentTable
            documents={paginatedDocuments}
            onView={(doc) => {
              setSelectedDocument(doc);
              setPreviewOpen(true);
            }}
            onEdit={(id) => navigate(`/admin/edit/${id}`)}
            onDelete={(doc) => {
              setSelectedDocument(doc);
              setDeleteOpen(true);
            }}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />

          <PDFPreviewModal
            isOpen={previewOpen}
            onClose={() => setPreviewOpen(false)}
            driveFileId={selectedDocument?.driveFileId || ""}
            title={selectedDocument?.title || ""}
          />

          <DeleteModal
            isOpen={deleteOpen}
            title={selectedDocument?.title || ""}
            onCancel={() => setDeleteOpen(false)}
            onConfirm={handleDelete}
          />
        </>
      )}
    </div>
  );
}

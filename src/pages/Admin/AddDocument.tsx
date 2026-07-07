import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DocumentForm from "../../components/admin/DocumentForm";

import { addDocument } from "../../services/documentService";

import { DocumentFormData } from "../../types/document";
import toast from "react-hot-toast";

export default function AddDocument() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: DocumentFormData) => {
    try {
      setLoading(true);

      await addDocument(data);

      toast.success("Document added successfully");
      navigate("/admin/documents");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Add Document</h1>

      <DocumentForm onSubmit={handleSubmit} loading={loading} />
    </div>
  );
}

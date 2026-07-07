import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import DocumentForm from "../../components/admin/DocumentForm";

import { getDocument, updateDocument } from "../../services/documentService";

import { DocumentFormData } from "../../types/document";

import toast from "react-hot-toast";

export default function EditDocument() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [document, setDocument] = useState<DocumentFormData>();

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (id) {
      loadDocument();
    }
  }, [id]);

  const loadDocument = async () => {
    try {
      const data = await getDocument(id!);

      if (data) {
        setDocument(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data: DocumentFormData) => {
    try {
      setSaving(true);

      await updateDocument(id!, data);

      toast.success("Document updated successfully");
      navigate("/admin/documents");
    } catch (error) {
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow">
        Loading document...
      </div>
    );
  }

  if (!document) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow">
        Document not found.
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Edit Document</h1>

        <p className="text-gray-500 mt-2">Update document information.</p>
      </div>

      <DocumentForm
        initialValues={document}
        onSubmit={handleSubmit}
        loading={saving}
      />
    </div>
  );
}

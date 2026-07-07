import { useState } from "react";
import { extractDriveFileId } from "../../utils/googleDrive";
import { DocumentFormData } from "../../types/document";
import { CATEGORIES, PROGRAMS, SEMESTERS, YEARS } from "../../utils/constants";

interface Props {
  initialValues?: DocumentFormData;
  onSubmit: (data: DocumentFormData) => Promise<void>;
  loading?: boolean;
}

export default function DocumentForm({
  initialValues,
  onSubmit,
  loading = false,
}: Props) {
  const [form, setForm] = useState<DocumentFormData>({
    title: initialValues?.title || "",
    category: initialValues?.category || "Notice",
    program: initialValues?.program || "BCA",
    semester: initialValues?.semester || "ALL",
    year: initialValues?.year || YEARS[0],
    driveFileId: initialValues?.driveFileId || "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.title.trim()) {
      setError("Title is required.");
      return;
    }

    if (!form.driveFileId.trim()) {
      setError("Google Drive File ID is required.");
      return;
    }

    try {
      await onSubmit({
        ...form,
        driveFileId: extractDriveFileId(form.driveFileId),
      });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="space-y-6">
        {/* Error */}

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Title */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Document Title
          </label>

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter document title"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]"
          />
        </div>

        {/* Category */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Category
          </label>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]"
          >
            {CATEGORIES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Program / Semester / Year */}

        <div className="grid gap-4 md:grid-cols-3">
          {/* Program */}

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Program
            </label>

            <select
              name="program"
              value={form.program}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]"
            >
              {PROGRAMS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Semester */}

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Semester
            </label>

            <select
              name="semester"
              value={form.semester}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]"
            >
              {SEMESTERS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Year */}

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Year
            </label>

            <select
              name="year"
              value={form.year}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]"
            >
              {YEARS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Google Drive */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Google Drive File ID / Link
          </label>

          <input
            type="text"
            name="driveFileId"
            value={form.driveFileId}
            onChange={handleChange}
            placeholder="Paste Google Drive URL or File ID"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]"
          />

          <p className="mt-2 text-xs text-slate-500">
            You can paste either the complete Google Drive URL or just the File
            ID.
          </p>
        </div>

        {/* Button */}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-[#0F4C81] px-6 py-3 font-medium text-white transition hover:bg-[#0d3e69] disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {loading ? "Saving..." : "Save Document"}
          </button>
        </div>
      </div>
    </form>
  );
}

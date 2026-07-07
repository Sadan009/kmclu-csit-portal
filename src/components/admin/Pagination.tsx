import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="mt-6 flex items-center justify-between">
      {/* Previous */}

      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`flex items-center gap-2 rounded-lg px-4 py-2 transition
        ${
          currentPage === 1
            ? "cursor-not-allowed bg-slate-200 text-slate-400"
            : "bg-[#0F4C81] text-white hover:bg-[#0d3e69] cursor-pointer"
        }`}
      >
        <ChevronLeft size={18} />
        Previous
      </button>

      {/* Page Numbers */}

      <div className="flex gap-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`h-10 w-10 rounded-lg font-medium transition
            ${
              currentPage === page
                ? "bg-[#0F4C81] text-white"
                : "bg-white border border-slate-300 hover:bg-slate-100 cursor-pointer"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next */}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`flex items-center gap-2 rounded-lg px-4 py-2 transition
        ${
          currentPage === totalPages
            ? "cursor-not-allowed bg-slate-200 text-slate-400"
            : "bg-[#0F4C81] text-white hover:bg-[#0d3e69] cursor-pointer"
        }`}
      >
        Next
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

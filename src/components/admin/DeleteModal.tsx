interface Props {
  isOpen: boolean;
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function DeleteModal({
  isOpen,
  title,
  onCancel,
  onConfirm,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <h2 className="text-xl font-bold">Delete Document</h2>

        <p className="mt-3 text-gray-600">
          Are you sure you want to delete
          <span className="font-semibold"> "{title}"</span>?
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="rounded-lg border px-5 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

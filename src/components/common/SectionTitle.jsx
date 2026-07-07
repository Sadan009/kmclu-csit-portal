export default function SectionTitle({ eyebrow, title, description, action }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
      <div>
        {eyebrow && (
          <p className="text-accent-dark font-semibold text-xs uppercase tracking-wider mb-1.5">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl sm:text-3xl font-bold text-primary-800">{title}</h2>
        {description && (
          <p className="text-slate-500 mt-2 max-w-2xl">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

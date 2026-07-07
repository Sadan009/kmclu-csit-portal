export default function Card({ children, className = "", hover = true, ...props }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-card border border-slate-100 ${
        hover ? "hover:shadow-card-hover hover:-translate-y-0.5" : ""
      } transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

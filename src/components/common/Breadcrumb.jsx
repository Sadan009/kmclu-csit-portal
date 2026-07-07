import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb({ crumbs = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1 text-sm text-primary-100/80">
      <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
        <Home size={14} />
        <span>Home</span>
      </Link>
      {crumbs.map((crumb, idx) => (
        <span key={idx} className="flex items-center gap-1">
          <ChevronRight size={14} />
          {crumb.to ? (
            <Link to={crumb.to} className="hover:text-white transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-white font-medium">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

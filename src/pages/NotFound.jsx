import { Home, SearchX } from "lucide-react";
import Button from "../components/common/Button";

export default function NotFound() {
  return (
    <>
      <title>Page Not Found | CSIT Department, KMCLU Lucknow</title>
      <div className="container-page py-24 flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-primary-50 flex items-center justify-center mb-6">
          <SearchX size={36} className="text-primary-400" />
        </div>
        <p className="text-primary font-display font-bold text-5xl sm:text-6xl">404</p>
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-800 mt-4">
          Page Not Found
        </h1>
        <p className="text-slate-500 mt-2 max-w-md">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>
        <Button to="/" variant="primary" size="lg" icon={Home} iconPosition="left" className="mt-8">
          Back to Home
        </Button>
      </div>
    </>
  );
}

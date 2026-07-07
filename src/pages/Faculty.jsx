import { useMemo, useState } from "react";
import PageTitle from "../components/common/PageTitle";
import SearchBar from "../components/common/SearchBar";
import FacultyCard from "../components/faculty/FacultyCard";
import EmptyState from "../components/common/EmptyState";
import { faculty } from "../data/faculty";
import { UsersRound } from "lucide-react";

export default function Faculty() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return faculty.filter(
      (f) =>
        f.name.toLowerCase().includes(query.toLowerCase()) ||
        f.interest.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <>
      <title>Faculty | CSIT Department, KMCLU Lucknow</title>
      <PageTitle
        title="Faculty"
        description="Meet the experienced and dedicated faculty members of the department."
        crumbs={[{ label: "Faculty" }]}
      />

      <div className="container-page py-10 sm:py-12">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search by name or area of interest..."
          className="max-w-sm mb-8"
        />

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((member) => (
              <FacultyCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={UsersRound}
            title="No faculty found"
            description="Try a different name or area of interest."
          />
        )}
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import { FileDown } from "lucide-react";

import PageTitle from "../components/common/PageTitle";
import DownloadCard from "../components/downloads/DownloadCard";
import EmptyState from "../components/common/EmptyState";

import { getAllDownloads } from "../services/publicService";

export default function Downloads() {
  const [downloads, setDownloads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDownloads();
  }, []);

  const loadDownloads = async () => {
    try {
      setLoading(true);

      const data = await getAllDownloads();

      setDownloads(data);
    } catch (error) {
      console.error("Failed to load downloads:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <title>Downloads | CSIT Department, KMCLU Lucknow</title>

      <PageTitle
        title="Downloads"
        description="Academic documents and important downloadable forms."
        crumbs={[{ label: "Downloads" }]}
      />

      <div className="container-page py-10 sm:py-12">
        {loading ? (
          <div className="py-12 text-center text-slate-500">
            Loading downloads...
          </div>
        ) : downloads.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {downloads.map((item) => (
              <DownloadCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={FileDown}
            title="No downloads available"
            description="No downloadable documents have been uploaded yet."
          />
        )}
      </div>
    </>
  );
}

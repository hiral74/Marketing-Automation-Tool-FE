import { useState } from "react";
import { Image, Video, FileText, Plus, Upload } from "lucide-react";
import { PageHeader, PrimaryButton, Card } from "../components/ui/ui";
import { digitalAssets } from "../data/mockData";

const filters = ["All", "Images", "Video", "Documents", "Brand Kit"];
const typeIcon = { image: Image, video: Video, document: FileText };
const typeTint = {
  image: "bg-brand-soft text-brand-dark",
  video: "bg-rose-soft text-rose",
  document: "bg-amber-soft text-amber",
};

export default function AssetLibrary() {
  const [active, setActive] = useState("All");
  const filtered = digitalAssets.filter((a) => {
    if (active === "All") return true;
    if (active === "Brand Kit") return a.campaign === "Brand Kit";
    if (active === "Images") return a.fileType === "image";
    if (active === "Video") return a.fileType === "video";
    if (active === "Documents") return a.fileType === "document";
    return true;
  });

  return (
    <div>
      <PageHeader
        eyebrow="FR-09 · Digital Asset Management"
        title="Asset Library"
        action={<PrimaryButton>↑ Upload Assets</PrimaryButton>}
      />

      <div className="mb-4 flex gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-3.5 py-1.5 font-mono text-[12px] transition ${
              active === f ? "bg-ink text-white" : "border border-cream-line bg-white text-slate-muted hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((a) => {
          const Icon = typeIcon[a.fileType];
          return (
            <Card key={a.assetId} className="overflow-hidden">
              <div className={`flex h-24 items-center justify-center ${typeTint[a.fileType]}`}>
                <Icon size={26} />
              </div>
              <div className="p-3.5">
                <p className="truncate font-sans text-sm font-medium text-ink">{a.fileName}</p>
                <p className="mt-1 font-mono text-[11px] text-slate-muted">{a.size} · {a.campaign}</p>
              </div>
            </Card>
          );
        })}

        <button className="flex flex-col items-center justify-center gap-2 rounded-xl2 border border-dashed border-cream-line bg-white py-10 text-center transition hover:border-brand hover:bg-brand-soft/20">
          <Plus size={20} className="text-slate-muted" />
          <p className="font-sans text-sm font-semibold text-ink">Drop files here</p>
          <p className="flex items-center gap-1 font-sans text-xs text-slate-muted">
            <Upload size={12} /> or click Upload Assets above
          </p>
        </button>
      </div>
    </div>
  );
}

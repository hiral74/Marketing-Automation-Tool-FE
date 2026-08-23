import { useState } from "react";
import { Heart, MessageCircle, Repeat2 } from "lucide-react";
import { PageHeader, PrimaryButton, Card, Badge } from "../components/ui/ui";
import { socialPosts } from "../data/mockData";

const platforms = ["All platforms", "LinkedIn", "Instagram"];
const platformTint = { LinkedIn: "bg-brand-soft text-brand-dark", Instagram: "bg-rose-soft text-rose" };
const statusTint = { Published: "mint", "Awaiting review": "amber", Scheduled: "brand" };

export default function SocialPosts() {
  const [active, setActive] = useState("All platforms");
  const filtered = socialPosts.filter(
    (p) => active === "All platforms" || p.platform === active
  );

  return (
    <div>
      <PageHeader
        eyebrow="FR-07 / FR-08 · LinkedIn & Instagram Management"
        title="Social Posts"
        action={<PrimaryButton>+ New Post</PrimaryButton>}
      />

      <div className="mb-4 flex gap-2">
        {platforms.map((p) => (
          <button
            key={p}
            onClick={() => setActive(p)}
            className={`rounded-full px-3.5 py-1.5 font-mono text-[12px] transition ${
              active === p ? "bg-ink text-white" : "border border-cream-line bg-white text-slate-muted hover:text-ink"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Card key={p.postId} className="overflow-hidden">
            <div className={`flex h-16 items-center justify-center font-mono text-lg font-semibold ${platformTint[p.platform]}`}>
              {p.platform === "LinkedIn" ? "in" : "ig"}
            </div>
            <div className="p-4">
              <p className="font-sans text-sm font-semibold text-ink">{p.content}</p>
              <p className="mt-1 font-mono text-[11px] text-slate-muted">{p.platform} · {p.scheduledAt}</p>
              {p.status === "Awaiting review" && (
                <Badge tint={statusTint[p.status]} className="mt-2">{p.status}</Badge>
              )}
              {p.status === "Scheduled" && (
                <Badge tint={statusTint[p.status]} className="mt-2">{p.status}</Badge>
              )}
              {p.metrics && (
                <div className="mt-3 flex gap-4 font-mono text-[11px] text-slate-muted">
                  {p.metrics.likes && <span className="flex items-center gap-1"><Heart size={12} /> {p.metrics.likes}</span>}
                  {p.metrics.shares && <span className="flex items-center gap-1"><Repeat2 size={12} /> {p.metrics.shares}</span>}
                  {p.metrics.comments && <span className="flex items-center gap-1"><MessageCircle size={12} /> {p.metrics.comments}</span>}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

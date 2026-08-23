import { Diamond, Plus } from "lucide-react";
import { PageHeader, PrimaryButton, Card, Badge } from "../components/ui/ui";
import { campaigns } from "../data/mockData";

const headerTint = {
  brand: "bg-brand-soft text-brand-dark",
  mint: "bg-mint-soft text-mint",
  rose: "bg-rose-soft text-rose",
  amber: "bg-amber-soft text-amber",
};

const statusTint = { Active: "mint", Planning: "amber", Completed: "gray" };
const barTint = { brand: "bg-brand", mint: "bg-mint", rose: "bg-rose", amber: "bg-amber" };

export default function Campaigns() {
  return (
    <div>
      <PageHeader
        eyebrow="FR-03 · Campaign Management"
        title="Campaigns"
        action={<PrimaryButton>+ New Campaign</PrimaryButton>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {campaigns.map((c) => (
          <Card key={c.campaignId} className="overflow-hidden">
            <div className={`flex h-20 items-center justify-center ${headerTint[c.tint]}`}>
              <Diamond size={20} fill="currentColor" />
            </div>
            <div className="p-4">
              <p className="font-sans text-sm font-semibold text-ink">{c.name}</p>
              <p className="mt-1 font-mono text-[11px] text-slate-muted">
                {fmt(c.startDate)} – {fmt(c.endDate)} · {c.linkedAssets} linked assets
              </p>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-cream">
                <div className={`h-full ${barTint[c.tint]}`} style={{ width: `${c.progress}%` }} />
              </div>
              <div className="mt-2.5 flex items-center justify-between">
                <Badge tint={statusTint[c.status]}>{c.status}</Badge>
                <span className="font-mono text-[11px] text-slate-muted">{c.progress}% complete</span>
              </div>
            </div>
          </Card>
        ))}

        <button className="flex flex-col items-center justify-center gap-2 rounded-xl2 border border-dashed border-cream-line bg-white py-10 text-center transition hover:border-brand hover:bg-brand-soft/20">
          <Plus size={20} className="text-slate-muted" />
          <p className="font-sans text-sm font-semibold text-ink">Start a new campaign</p>
          <p className="max-w-[180px] font-sans text-xs text-slate-muted">
            Name, duration, and objective — the rest builds around it.
          </p>
        </button>
      </div>
    </div>
  );
}

function fmt(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", day: "2-digit" });
}

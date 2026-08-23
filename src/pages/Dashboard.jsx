import { PenSquare, Megaphone, AtSign, Mail, FolderKanban, ArrowRight } from "lucide-react";
import { PageHeader, PrimaryButton, SecondaryButton, Card, StatCard, Badge } from "../components/ui/ui";
import { useAuth } from "../context/AuthContext";
import { contentPulse, recentActivity, awaitingApproval } from "../data/mockData";

const pulseTint = {
  post: "bg-brand", blog: "bg-amber", newsletter: "bg-mint", social: "bg-rose", none: "bg-white/10",
};

const iconMap = { campaign: Megaphone, blog: PenSquare, social: AtSign, newsletter: Mail, asset: FolderKanban };

export default function Dashboard() {
  const { user } = useAuth();
  const firstName = user?.name?.split(" ")[0] ?? "there";

  return (
    <div>
      <PageHeader
        eyebrow="FR-12 · Admin / Marketing Dashboard"
        title={`Good morning, ${firstName}`}
        action={
          <div className="flex gap-2">
            <SecondaryButton>Export report</SecondaryButton>
            <PrimaryButton>+ New Campaign</PrimaryButton>
          </div>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Active Campaigns" value="12" delta="▲ 3 this month" />
        <StatCard label="Scheduled Content (7d)" value="28" delta="▲ 12%" />
        <StatCard label="Pending Approvals" value="5" delta="▲ needs review" deltaTint="rose" />
        <StatCard label="Avg. Engagement Rate" value="4.8%" delta="▲ 0.6 pts" />
      </div>

      <Card className="mt-4 border-none bg-ink p-5 text-white">
        <div className="mb-4 flex items-center justify-between">
          <p className="font-sans text-sm font-semibold">Content Pulse — next 14 days</p>
          <p className="font-mono text-[10px] uppercase tracking-wide text-white/40">Hover a day for detail</p>
        </div>
        <div className="grid grid-cols-7 gap-2 lg:grid-cols-[repeat(14,minmax(0,1fr))]">
          {contentPulse.map((d, i) => (
            <div
              key={i}
              title={d.type}
              className={`flex h-14 items-end justify-center rounded-md pb-1.5 font-mono text-[11px] text-white/70 ${pulseTint[d.type]}`}
            >
              {d.day}
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 font-mono text-[11px] text-white/60">
          <Legend color="bg-brand" label="Campaign posts" />
          <Legend color="bg-amber" label="Blog" />
          <Legend color="bg-mint" label="Newsletter" />
          <Legend color="bg-rose" label="Social" />
          <Legend color="bg-white/20" label="None scheduled" />
        </div>
      </Card>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card className="p-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-sans text-sm font-semibold text-ink">Recent Activity</p>
            <a href="#" className="font-mono text-[11px] text-brand">View all</a>
          </div>
          <div className="divide-y divide-cream-line">
            {recentActivity.map((a, i) => {
              const Icon = iconMap[a.icon];
              return (
                <div key={i} className="flex items-center gap-3 py-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream">
                    <Icon size={14} className="text-ink" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm text-ink">{a.text}</p>
                    <p className="text-xs text-slate-muted">{a.meta}</p>
                  </div>
                  <Badge tint={a.tint}>{a.tag}</Badge>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="p-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-sans text-sm font-semibold text-ink">Awaiting Your Approval</p>
            <a href="#" className="font-mono text-[11px] text-brand">View all</a>
          </div>
          <div className="divide-y divide-cream-line">
            {awaitingApproval.map((a, i) => {
              const Icon = iconMap[a.icon];
              return (
                <div key={i} className="flex items-center gap-3 py-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream">
                    <Icon size={14} className="text-ink" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm text-ink">{a.text}</p>
                    <p className="text-xs text-slate-muted">{a.meta}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <SecondaryButton className="mt-3 w-full justify-center">
            Review all pending <ArrowRight size={14} />
          </SecondaryButton>
        </Card>
      </div>
    </div>
  );
}

function Legend({ color, label }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={`h-2 w-2 rounded-sm ${color}`} /> {label}
    </span>
  );
}

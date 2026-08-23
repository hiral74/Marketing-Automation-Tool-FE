import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";
import { Sparkles, PenSquare, AtSign, Mail } from "lucide-react";
import { PageHeader, SecondaryButton, Card, StatCard } from "../components/ui/ui";
import { analyticsRecords } from "../data/mockData";

const iconMap = [Sparkles, PenSquare, AtSign, Mail];

export default function Analytics() {
  const data = analyticsRecords.engagementByCampaign;

  return (
    <div>
      <PageHeader
        eyebrow="FR-10 · Campaign Analytics Dashboard"
        title="Analytics"
        action={<SecondaryButton>Last 30 days ▾</SecondaryButton>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Reach" value={analyticsRecords.totalReach} delta="▲ 8.2%" />
        <StatCard label="Engagement Rate" value={analyticsRecords.engagementRate} delta="▲ 0.6 pts" />
        <StatCard label="Newsletter Open Rate" value={analyticsRecords.newsletterOpenRate} delta="▼ 1.1 pts" deltaTint="rose" />
        <StatCard label="Content Published" value={analyticsRecords.contentPublished} delta="▲ 14" />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1.6fr_1fr]">
        <Card className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-sans text-sm font-semibold text-ink">Engagement by Campaign</p>
            <a href="#" className="font-mono text-[11px] text-brand">Export</a>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} barCategoryGap="28%">
                <XAxis
                  dataKey="campaign"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontFamily: "IBM Plex Mono", fontSize: 11, fill: "#8A8F98" }}
                />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {data.map((d, i) => (
                    <Cell key={i} fill={d.value >= 75 ? "#545CFF" : "#E3E4FF"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-5">
          <p className="mb-3 font-sans text-sm font-semibold text-ink">Top Performing Content</p>
          <div className="divide-y divide-cream-line">
            {analyticsRecords.topPerformingContent.map((c, i) => {
              const Icon = iconMap[i % iconMap.length];
              return (
                <div key={i} className="flex items-center gap-3 py-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream">
                    <Icon size={14} className="text-ink" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-sans text-sm text-ink">{c.title}</p>
                    <p className="font-mono text-[11px] text-slate-muted">{c.meta}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}

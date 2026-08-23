import { MoreHorizontal } from "lucide-react";
import { PageHeader, PrimaryButton, Card, Badge } from "../components/ui/ui";
import { newsletters } from "../data/mockData";

const statusTint = { Scheduled: "mint", "Pending review": "amber", Draft: "gray", Delivered: "brand" };

export default function Newsletters() {
  return (
    <div>
      <PageHeader
        eyebrow="FR-06 · Newsletter Scheduling"
        title="Newsletters"
        action={<PrimaryButton>+ New Newsletter</PrimaryButton>}
      />

      <Card className="overflow-hidden">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-cream-line">
              {["Subject", "Segment", "Scheduled For", "Status", ""].map((h) => (
                <th key={h} className="section-label px-5 py-3 font-normal">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {newsletters.map((n) => (
              <tr key={n.newsletterId} className="border-b border-cream-line last:border-none hover:bg-cream/60">
                <td className="px-5 py-3.5 font-sans text-sm font-medium text-ink">{n.subject}</td>
                <td className="px-5 py-3.5 font-sans text-sm text-ink">{n.segment}</td>
                <td className="px-5 py-3.5 font-mono text-[12px] text-slate-muted">{n.scheduleAt}</td>
                <td className="px-5 py-3.5">
                  <Badge tint={statusTint[n.deliveryStatus]}>{n.deliveryStatus}</Badge>
                </td>
                <td className="px-5 py-3.5 text-right">
                  <button className="text-slate-muted hover:text-ink">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

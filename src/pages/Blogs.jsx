import { MoreHorizontal } from "lucide-react";
import { PageHeader, PrimaryButton, Card, Badge, Avatar } from "../components/ui/ui";
import { blogs } from "../data/mockData";

const statusTint = { "In review": "amber", Draft: "gray", Published: "mint" };

export default function Blogs() {
  return (
    <div>
      <PageHeader eyebrow="FR-05 · Blog Management" title="Blogs" action={<PrimaryButton>+ New Blog</PrimaryButton>} />

      <Card className="overflow-hidden">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-cream-line">
              {["Title", "Campaign", "Author", "Status", "Last Updated", ""].map((h) => (
                <th key={h} className="section-label px-5 py-3 font-normal">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {blogs.map((b) => (
              <tr key={b.blogId} className="border-b border-cream-line last:border-none hover:bg-cream/60">
                <td className="px-5 py-3.5 font-sans text-sm font-medium text-ink">{b.title}</td>
                <td className="px-5 py-3.5">
                  <Badge tint="brand">{b.campaign}</Badge>
                </td>
                <td className="px-5 py-3.5">
                  <span className="flex items-center gap-2 font-sans text-sm text-ink">
                    <Avatar initials={b.author.split(" ").map((n) => n[0]).join("")} />
                    {b.author}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <Badge tint={statusTint[b.status]}>{b.status}</Badge>
                </td>
                <td className="px-5 py-3.5 font-mono text-[12px] text-slate-muted">{b.updatedAt}</td>
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

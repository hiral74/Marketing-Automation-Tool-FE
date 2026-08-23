import { PageHeader, SecondaryButton, Card } from "../components/ui/ui";
import { notifications } from "../data/mockData";

const dotTint = { approval: "bg-amber", success: "bg-mint", alert: "bg-rose", info: "bg-brand", system: "bg-slate-muted" };

export default function Notifications() {
  return (
    <div>
      <PageHeader
        eyebrow="FR-11 · Notification Management"
        title="Notifications"
        action={<SecondaryButton>Mark all as read</SecondaryButton>}
      />

      <Card className="divide-y divide-cream-line">
        {notifications.map((n) => (
          <div key={n.notificationId} className="flex items-start gap-3 px-5 py-4">
            <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dotTint[n.type]}`} />
            <div>
              <p className="font-sans text-sm text-ink">{n.message}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-slate-muted">{n.createdAt}</p>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}

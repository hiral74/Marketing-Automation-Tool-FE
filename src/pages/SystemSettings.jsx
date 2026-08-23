import { PageHeader, Card, SecondaryButton } from "../components/ui/ui";
import { auditLog } from "../data/mockData";

function Field({ label, value }) {
  return (
    <div>
      <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-slate-muted">{label}</label>
      <input
        readOnly
        value={value}
        className="w-full rounded-lg border border-cream-line bg-cream px-3.5 py-2.5 font-sans text-sm text-ink focus:border-brand focus:outline-none"
      />
    </div>
  );
}

export default function SystemSettings() {
  return (
    <div>
      <PageHeader eyebrow="System Configuration" title="System Settings" />

      <Card className="p-5">
        <p className="mb-4 font-sans text-sm font-semibold text-ink">General</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Organization name" value="Company Inc." />
          <Field label="Default timezone" value="Asia/Kolkata (IST)" />
          <Field label="SMTP provider" value="SendGrid" />
          <Field label="AI content provider" value="Connected · Claude API" />
        </div>
      </Card>

      <Card className="mt-4 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4">
          <p className="font-sans text-sm font-semibold text-ink">Audit Log</p>
          <SecondaryButton className="py-1.5 text-xs">Export CSV</SecondaryButton>
        </div>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-y border-cream-line">
              {["Event", "User", "Timestamp"].map((h) => (
                <th key={h} className="section-label px-5 py-2.5 font-normal">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {auditLog.map((l) => (
              <tr key={l.logId} className="border-b border-cream-line last:border-none">
                <td className="px-5 py-3 font-sans text-sm text-ink">{l.action}</td>
                <td className="px-5 py-3 font-sans text-sm text-ink">{l.user}</td>
                <td className="px-5 py-3 font-mono text-[12px] text-slate-muted">{l.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
